import React from 'react';
import { useIssuesContext } from '../../hooks/useIssuesContext';
import IssueInfo from '../dash/issueInfo';

const HighPriority = () => {

    const {issues} = useIssuesContext()

    const filterIssues = (issues) => {
        let filteredIssues
    }

    
    return (
        <>
            {filterIssues(issues).map((issue) => (
                <IssueInfo key={issue._id} issue={issue} />
            ))}
        </>
    );
};

export default HighPriority;