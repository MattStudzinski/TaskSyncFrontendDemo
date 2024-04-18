const express = require('express')

const {
    createIssue,
    getAllIssues,
    getIssue,
    updateIssue,
    deleteIssue
} = require("../controllers/issueController")

const router = express.Router()



// get all issues
router.get('/', getAllIssues)


// get issue by id
router.get('/:id', getIssue)


// post a new issue
router.post('/', createIssue)


// delete issue
router.delete('/:id', deleteIssue)


// update issue
router.patch('/:id', updateIssue)

module.exports = router