import React from 'react';
import { useIssuesContext } from '../../hooks/useIssuesContext';
import IssueInfo from '../dash/issueInfo';
import { useState } from 'react';
import Pagination from '../ui/Pagination';

const NewIssues = () => {

    const {issues} = useIssuesContext()
    const [currentPage, setCurrentPage] = useState(1)
    const issuesPerPage = 5

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

    const filteredAndSortedIssues = filterIssues(issues)
    const indexOfLastIssue = currentPage * issuesPerPage
    const indexOfFirstIssue = indexOfLastIssue - issuesPerPage
    const currentIssues = filteredAndSortedIssues.slice(indexOfFirstIssue, indexOfLastIssue)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    
    return (
        <>
            {currentIssues.map((issue) => (
                <IssueInfo key={issue._id} issue={issue} />
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

export default NewIssues;