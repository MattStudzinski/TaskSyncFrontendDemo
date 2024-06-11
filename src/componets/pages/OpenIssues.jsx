import React from 'react';
import { useIssuesContext } from '../../hooks/useIssuesContext';
import IssueInfo from '../dash/issueInfo';


const OpenIssues = () => {

    const { issues } = useIssuesContext()
    return (
        <>
            {issues.map((issue) => (
                <IssueInfo key={issue._id} issue= {issue} />
            ))}
        </>
    );
};

export default OpenIssues;