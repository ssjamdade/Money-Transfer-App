const { Router } = require('express');
const { Account } = require('../db');
const authMiddleware = require('../middleware');

const router = Router()

router.get('/balance', authMiddleware, async (req, res) => {

    const account = await Account.findOne({ userId: req.userId.id })

    res.json({
        message: "Account balance",
        userId: req.userId.id,
        balance: account.balance
    })
})

router.post('/transfer', authMiddleware, async (req, res) => {
    const session = await Account.startSession()

    session.startTransaction()
    const { to, amount } = req.body

    const fromAccount = await Account.findOne({ userId: req.userId.id }).session(session)
    const toAccount = await Account.findOne({ userId: to }).session(session)

    if (!fromAccount || fromAccount.balance < amount) {
        session.abortTransaction()
        return res.status(403).json({
            message: "Insufficient balance"
        });
    }

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(401).json({
            message: "Invalid account/ Unauthorized account"
        });
    }

    console.log(fromAccount.userId, toAccount.userId)
    await Account.updateOne({ userId: fromAccount.userId }, {
        $inc: {
            balance: -amount
        }
    }).session(session)
    
    await Account.updateOne({ userId: toAccount.userId }, {
        $inc: {
            balance: amount
        }
    }).session(session) 

    await session.commitTransaction();
    session.endSession()
    res.json({
        message: "Transfer successful"
    });
})

module.exports = router