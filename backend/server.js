const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 8000
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

//connect to database
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    // res.send('hi men are fuckin stupid')
    res.status(200).json({message: 'Welcome to the Support Desk API'})
})

//routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))

app.use(errorHandler)
app.listen(PORT, () => console.log(`server listening on port ${PORT}`))