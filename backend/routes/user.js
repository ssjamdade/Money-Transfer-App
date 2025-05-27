const { Router } = require('express')
const zod = require('zod')
const { User } = require('../db')
const { Account } = require('../db')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config')
const authMiddleware = require('../middleware')

const router = Router()

const userSignup = zod.object({
    username: zod.string().email().min(3).trim().toLowerCase(),
    password: zod.string().min(6),
    firstName: zod.string().min(1),
    lastName: zod.string().min(1),
})


router.post('/signup', async (req, res) => {
    const { success } = userSignup.safeParse(req.body)
    if (!success) {
        return res.status(401).json({ message: "Invalid data" })
    }

    const existUser = await User.findOne({ username: req.body.username })
    if (existUser) {
        return res.status(409).json({ message: "Email already exists" })
    }

    const user = await User.create(req.body)
    const token = jwt.sign({ id: user._id }, JWT_SECRET)

    await Account.create({
        userId: user._id,
        balance: Math.floor(Math.random() * 10000) + 1
    })

    res.json({
        message: "User created successfully",
        token: token,
        username: user.username
    })
})

const userSignin = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6),
})

router.post('/signin', async (req, res) => {
    const { success } = userSignin.safeParse(req.body)

    if (!success) {
        return res.status(400).json({ message: "Bad Request" })
    }

    const existUser = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if (!existUser) {
        return res.status(401).json({ message: "Invalid credentials" })
    }
    res.json({
        message: "User signed in successfully",
        token: jwt.sign({ id: existUser._id }, JWT_SECRET),
        username: existUser.username
    })
})


const userUpdate = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put('/', authMiddleware, async (req, res) => {
    const { success } = userUpdate.safeParse(req.body)
    if (!success) {
        return res.status(400).json({ message: "Invalid data" })
    }

    console.log(req.userId.id)

    try {
        await User.updateOne( {_id:req.userId.id}, req.body); 
        res.json({ message: "User updated successfully" })
    }
    catch (error) {
        res.status(411).json({ message: "Error while updating information" })
    }
})

router.get('/bulk', async (req, res) => {
    const user = req.query.filter

    //search for documents where either the firsName or lastName field matches a pattern. 
    // The $or operator is used to specify that either condition can match.
    // The $regex operator is used to perform a case-insensitive search for the user input in both fields. If you don't use regex, it will search for exact match.
    // The $options: "i" flag makes the search case-insensitive.
    const users = await User.find({
        $or: [
            { firstName: { $regex: user, $options: "i" } },
            { lastName: { $regex: user, $options: "i" } }
        ]
    })

    res.json({
        users: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})


module.exports = router