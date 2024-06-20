import React from 'react';
import { useIssuesContext } from '../../hooks/useIssuesContext';
import { useState } from 'react';
import IssueInfo from '../dash/issueInfo'
import Pagination from '../ui/Pagination';
import ModalControlInfo from '../modals/ModalControlInfo';

const Complete = () => {
    const [selectedIssue, setSelectedIssue] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const issuesPerPage = 5
    const {issues} = useIssuesContext()

    const filterIssues = (issues) => {
        return issues.filter(issue => issue.complete)
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
        <section className="results-page__card">
        <ul className="issue-list__list">
            {currentIssues.map((issue) => (
            <li className="issue-list__list-item">
                <IssueInfo key = {issue._id} issue= {issue} onClick={handleIssueClick}/>
            </li>
            ))}
        </ul>
        </section>
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
        </div>
    )
}

export default Complete;