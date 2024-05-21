const express = require('express')

const {
    createIssue,
    getAllIssues,
    // getAdminIssues,
    getIssue,
    updateIssue,
    deleteIssue
} = require("../controllers/issueController")

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all routes
router.use(requireAuth)


// get all issues
router.get('/', getAllIssues)

// get all admin issues
// router
//     .route('/admin')
//     .get(requireAuth.protect, requireAuth.restrictTo('admin'), getAdminIssues)


// get issue by id
router.get('/:id', getIssue)


// post a new issue
router.post('/', createIssue)


// delete issue
router.delete('/:id', deleteIssue)


// update issue
router.patch('/:id', updateIssue)

module.exports = router