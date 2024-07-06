const mongoose = require('mongoose')
const Issue = require('../models/Issue')

const createRecurringIssues = async () => {
    const now = new Date()

    try{
        const issues = await issuesReducer.find({
            recurrenceInterval: { $exists: true },
            recurrenceUnit: { $exists: true },
            dueDate: { $lte: now },
        })

        for(const issue of issues ) {
            const newDueDate = new Date(issue.dueDate)

            switch (issue.recurrenceUnit) {
                case "days":
                    newDueDate.setDate(newDueDate.getDate() + issue.recurrenceInterval)
                    break;
                case 'weeks':
                    newDueDate.setDate(newDueDate.getDate() + (issue.recurrenceInterval * 7))
                    break;
                case 'months':
                    newDueDate.setMonth(newDueDate.getMonth() + issue.recurrenceInterval)
                    break;
                case 'years':
                    newDueDate.setFullYear(newDueDate.getFullYear() + issue.recurrenceInterval)
                    break;
                default:
                    break;
            }

            const NewIssues = new Issue({
                ...issue._doc,
                _id: mongoose.Types.objectId(),
                isNew: true,
                dueDate: newDueDate,
                createdAt: now,
                complete: flase
            })

            await NewIssues.save()
        }
    } catch (error) {
        console.log('error creating recurring issues', error)
    }
}

module.exports = createRecurringIssues