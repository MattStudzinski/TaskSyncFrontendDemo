import React from 'react';
import { useIssuesContext } from '../../hooks/useIssuesContext';
import IssueInfo from '../dash/issueInfo';

const NewIssues = () => {

    const {issues} = useIssuesContext()

    const filterIssues = (issues) => {
        let filteredIssues = issues.filter(issue => !issue.complete)
            
        return filteredIssues.sort((a, b) => {
            const prioriryOrder = {high:1, medium:2, low:3}
            return prioriryOrder[a.priority] - prioriryOrder[b.priority]

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