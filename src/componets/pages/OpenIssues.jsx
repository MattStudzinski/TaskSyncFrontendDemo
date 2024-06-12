import React from 'react';
import { useIssuesContext } from '../../hooks/useIssuesContext';
import IssueInfo from '../dash/issueInfo';


const OpenIssues = () => {

    const { issues } = useIssuesContext()

    const filteredIssues = (issues) => {
        return issues.filter(issue => !issue.complete)
    }


    return (
        <>
            {filteredIssues(issues).map((issue) => (
                <IssueInfo key={issue._id} issue= {issue} />
            ))}
        </>
    );
};

export default OpenIssues;