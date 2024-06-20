import React from 'react';
import { useIssuesContext } from '../../hooks/useIssuesContext';
import IssueInfo from '../dash/issueInfo';
import { useState } from 'react';
import Pagination from '../ui/Pagination';


const OpenIssues = () => {

    const { issues } = useIssuesContext()
    const [currentPage, setCurrentPage] = useState(1)
    const issuesPerPage = 5

    const filteredIssues = (issues) => {
        return issues.filter(issue => !issue.complete)
    }

const filteredAndSortedIssues = filteredIssues(issues)
const indexOfLastIssue = currentPage * issuesPerPage
const indexOfFirstIssue = indexOfLastIssue - issuesPerPage
const currentIssues = filteredAndSortedIssues.slice(indexOfFirstIssue, indexOfLastIssue)

const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <>
            {currentIssues.map((issue) => (
                <IssueInfo key={issue._id} issue= {issue} />
            ))}
            
            <Pagination 
            itemsPerPage={issuesPerPage}
            totalItems={filteredAndSortedIssues.length}
            paginate={paginate}
            currentPage={currentPage}
            />
        </>
    );
};

export default OpenIssues;