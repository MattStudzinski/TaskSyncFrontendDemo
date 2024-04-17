require('dotenv').config()


const express = require('express')
const mongoose = require("mongoose")

const issueRoutes = require("./routes/Issues")

// express app
const app = express()


app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/issues', issueRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // listening for requests
app.listen(process.env.PORT, () => {
    console.log("connected to db and listening on port",process.env.PORT)
})

})
.catch((error) => {
    console.log(error)
})


