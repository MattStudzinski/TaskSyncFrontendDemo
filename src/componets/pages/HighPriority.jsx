import React from 'react';
import { useIssuesContext } from '../../hooks/useIssuesContext';
import { useState } from 'react';
import IssueInfo from '../dash/issueInfo';
import ModalControlInfo from '../modals/ModalControlInfo';
import Pagination from '../ui/Pagination';

const HighPriority = () => {

    const {issues} = useIssuesContext()
    const [selectedIssue, setSelectedIssue] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const issuesPerPage = 5

    const filterIssues = (issues) => {
        let filteredIssues = issues.filter(issue => !issue.complete)

        return filteredIssues.sort((a, b) => {
            const priorityOrder = {high:1, medium: 2, low: 3}
            return priorityOrder[a.priority] - priorityOrder[b.priority]
        })
    }

    const handleIssueClick = (issue) => {
        setSelectedIssue(issue)
    }

    const handleCloseModal = () => {
        setSelectedIssue(null)
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

            {selectedIssue && (
                <ModalControlInfo
                issue={selectedIssue}
                isOpen={true}
                onClose={handleCloseModal}
                />
            )}
        </>
    );
};

export default HighPriority;