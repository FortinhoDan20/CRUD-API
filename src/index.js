const express = require('express')
const cors = require('cors')
const connectDB = require('./db/db')
require('dotenv').config()

const app = express()

connectDB()

const port = process.env.PORT

app.use(cors())
app.use(express.json())

app.get('/', async (req, res, next) => {
    res.send('WELCOME TO OUR MANAGEMENT API')
})

app.use('/api/user', require('./routes/user'))

app.listen(port, () => {
    console.log('Server started on port ' + port)

})
