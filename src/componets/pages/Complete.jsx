import React from 'react';
import { useIssuesContext } from '../../hooks/useIssuesContext';
import IssueInfo from '../dash/issueInfo';

const Complete = () => {

    const {issues} = useIssuesContext()

    const filterIssues = (issues) => {
        return issues.filter(issue => issue.complete)
    }
    return (
        <div>
            {filterIssues(issues).map((issue) => (
                <IssueInfo key={issue._id} issue={issue} />
            ))}
        </div>
    );
};

export default Complete;