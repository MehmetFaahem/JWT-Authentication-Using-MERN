const express = require('express')
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()
const pointRoutes = require('./routes/pointRoutes')
const userRoutes = require('./routes/userRoutes')
const connectDB = require('./config/db')

const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(errorHandler)

app.use('/api/points', pointRoutes)
app.use('/api/users', userRoutes)

app.listen(port, () => console.log(`Server started on ${port}`))