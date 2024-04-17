const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
res.json({mssg:"get all issues"})
})

router.get('/:id',(req, res) => {
    res.json({mssg:"Get a single issue"})
})

router.post('/', (req, res) => {
    res.json({mssg: "POST a new issue"})
})

router.delete('/:id', (req, res) => {
    res.json({mssg: "DELETE an issue"})
})

router.patch('/:id', (req, res) => {
    res.json({mssg: "UPDATE a issue"})
})

module.exports = router