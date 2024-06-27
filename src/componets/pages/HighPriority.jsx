import React from 'react';
import { useIssuesContext } from '../../hooks/useIssuesContext';
import { useState, useEffect, useRef } from 'react';
import IssueInfo from '../dash/issueInfo';
import ModalControlInfo from '../modals/ModalControlInfo';
import Pagination from '../ui/Pagination';

const HighPriority = () => {

    const {issues} = useIssuesContext()
    const [selectedIssue, setSelectedIssue] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [animate, setAnimate] = useState(false)
    const issuesPerPage = 7

    const listRef = useRef(null)

    useEffect(() => {
        const listItems = listRef.current.children
        Array.from(listItems).forEach((item, index) => {
        item.style.setProperty('--index', index)
        })
    }, [issues])

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
        <div className='results-page'>
            <section className='results-page__card'>
                <ul ref={listRef} className='results-page__ul' >
                    {currentIssues.map((issue) => (
                        <li key={issue._id} className='results-page__li'>
                        <IssueInfo issue={issue} onClick={handleIssueClick}/>
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

export default HighPriority;