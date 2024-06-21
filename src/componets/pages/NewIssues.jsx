import React from 'react';
import { useIssuesContext } from '../../hooks/useIssuesContext';
import IssueInfo from '../dash/issueInfo';
import { useState } from 'react';
import Pagination from '../ui/Pagination';
import ModalControlInfo from '../modals/ModalControlInfo';

const NewIssues = () => {

    const {issues} = useIssuesContext()
    const [selectedIssue, setSelectedIssue] = useState(null)
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
        <div className='results-page'>
            <section className='results-page__card'>
                <ul className='issue-list__list'>
                    {currentIssues.map((issue) => (
                        <li className='issue-list__list-issue'>
                        <IssueInfo key={issue._id} issue={issue} onClick={handleIssueClick} />
                        </li>
                    ))}
                </ul>
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
            </section>
        </div>
    );
};

export default NewIssues;