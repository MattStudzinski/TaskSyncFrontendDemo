require('dotenv').config()


const express = require('express')
const mongoose = require("mongoose")
const path = require('path')

const issueRoutes = require("./routes/Issues")
const userRoutes = require('./routes/user')

// express app
const app = express()


app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/issues', issueRoutes)
app.use('/api/user', userRoutes)


app.use(express.static(path.join(__dirname, 'build')))

// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // listening for requests
app.listen(process.env.PORT, () => {
    console.log("connected to db and listening on port",process.env.PORT)
})

require('./utility/scheduler')

})
.catch((error) => {
    console.log(error)
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
