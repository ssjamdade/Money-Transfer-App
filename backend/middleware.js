const jwt = require('jsonwebtoken')
require('dotenv').config()

const jwt_secret = process.env.JWT_SECRET

const authMiddleware = (req, res, next) => {
    
     const authHeader = req.headers.authorization;
     
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({meassage: "token not provided/ invalid"});
    }

    const token = authHeader.split(' ')[1]

    jwt.verify(token, jwt_secret, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Unauthorized" })
        }
        req.userId = decoded
        next()
    })
}

module.exports = authMiddleware