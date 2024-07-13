const express = require('express')
const cors = require('cors')
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const userRouter = require('./routes/userRouter')
const app = express()

app.use(express.json())
app.use(cors())

require('./database')

app.use('/api/users', userRouter)
app.listen(PORT, () => console.log("node js server on port", PORT))

