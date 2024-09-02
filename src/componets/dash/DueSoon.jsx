import React, { useState } from 'react';
import { useIssuesContext } from '../../hooks/useIssuesContext';
import DueSoonCard from '../pages/DueSoonCard';

const DueSoon = () => {

    const {issues} = useIssuesContext()
    
    

    const filterIssues = (issues) => {
        
        

        let filteredIssues = issues.filter(issue => {
            return !issue.complete 
        })

        return filteredIssues.sort((a,b) => {
            const dueDateA = new Date(a.dueDate)
            const dueDateB = new Date(b.dueDate)
            return dueDateA - dueDateB
        })
    }
    const filteredAndSortedIssues = filterIssues(issues)

    return (
        
            <section className='due-soon'>
                <h3 className='due-soon__title'>
                    Due Soon
                </h3>
                <ul className='due-soon__ul'>
                    {filteredAndSortedIssues.slice(0,4).map((issue) => (
                        <li key={issue.id} className='due-soon__li'>
                            <DueSoonCard key={issue._id} issue={issue} />
                        </li>
                    ))}
                    
                </ul>
            </section>
    );
};

export default DueSoon;