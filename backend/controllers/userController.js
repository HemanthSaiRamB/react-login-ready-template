const Users = require('../models/Users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function registerUser(req, res) {
    try {
        const { username, password } = req.body
        const user = new Users({ username, password });
        await user.save();
        res.status(201).send("User Registered")
    } catch (error) {
        res.status(400).send(error.messaeg)
    }
}

async function loginUser(req, res) {
    try {
        const { username, password } = req.body
        if (req.body.username && req.body.password) {
            const user = await Users.findOne({ username })
            if (!user || !await bcrypt.compare(password, user.password)) {
                res.status(401).send('Authentication Failed')
            }

            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
            res.send({ token })
        } else {
            throw new Error(!username && !password ? 'Please fill all the details' : !username ? 'Please provide username' : 'Please provide password')
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    registerUser,
    loginUser
}