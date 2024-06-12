import React from 'react';
import { useIssuesContext } from '../../hooks/useIssuesContext';
import IssueInfo from '../dash/issueInfo';

const NewIssues = () => {

    const {issues} = useIssuesContext()

    const filterIssues = (issues) => {
        const now = new Date()
        const oneDay = new Date(now.getTime() - 24 * 60 * 60 * 1000)

        let filteredIssues = issues.filter(issue => {
            const issueDate = new Date(issue.createdAt)
            return !issue.complete && issueDate >= oneDay
        })

        return filteredIssues.sort((a, b) => {
            const dateA = new Date(a.createdAt)
            const dateB = new Date(b.createdAt)
            return dateB - dateA
        })
    }

    
    return (
        <>
            {filterIssues(issues).map((issue) => (
                <IssueInfo key={issue._id} issue={issue} />
            ))}
        </>
    );
};

export default NewIssues;