import React from 'react';
import { useIssuesContext } from '../../hooks/useIssuesContext';
import IssueInfo from '../dash/issueInfo';
import { useState, useEffect, useRef } from 'react';
import Pagination from '../ui/Pagination';
import ModalControlInfo from '../modals/ModalControlInfo';


const OpenIssues = () => {

    const { issues } = useIssuesContext()
    const [selectedIssue, setSelectedIssue] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const issuesPerPage = 7

    const listRef = useRef(null)

    useEffect(() => {
        const listItems = listRef.current.children
        Array.from(listItems).forEach((item, index) => {
            item.style.setProperty('--index', index)
        })
    }, [issues])


    const filteredIssues = (issues) => {
        return issues.filter(issue => !issue.complete)
    }

    const handleIssueClick = (issue) => {
        setSelectedIssue(issue)
    }

    const handleCloseModal = () => {
        setSelectedIssue(null)
    }

const filteredAndSortedIssues = filteredIssues(issues)
const indexOfLastIssue = currentPage * issuesPerPage
const indexOfFirstIssue = indexOfLastIssue - issuesPerPage
const currentIssues = filteredAndSortedIssues.slice(indexOfFirstIssue, indexOfLastIssue)

const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div className='results-page'>
            <section className='results-page__card'>
                <ul ref={listRef} className='results-page__ul' >
            {currentIssues.map((issue) => (
                <li key={issue.id} className='results-page__li'>
                    <IssueInfo key={issue._id} issue= {issue} onClick={handleIssueClick}/>
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

export default OpenIssues;