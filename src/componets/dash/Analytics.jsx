import React, { useEffect, useState } from 'react';
import { useIssuesContext } from '../../hooks/useIssuesContext';

const Analytics = () => {
    const { issues } = useIssuesContext()
    const [highPriority, setHighPriority] = useState(0)
    const [newIssues, setNewIssues] = useState(0)


    useEffect(() => {
        const highPriorityIssues = issues.filter(issue => issue.priority === 'high')
        setHighPriority(highPriorityIssues.length)

        const dateTracker = new Date()
        dateTracker.setDate(dateTracker.getDate() - 1)

        const newIssues = issues.filter(issue => {
            const issueDate = new Date(issue.createdAt)
            return issueDate >= dateTracker
        })

        setNewIssues(newIssues.length)

    }, [issues])


    return (
        <section className='analytics'>
            <div className='analytics__open-issues'>
                <div >
                    Open Issues
                </div>
                <p className='analytics__box-text'>hello</p>
            </div>
            <div className='analytics__new-issues'>
                <div>
                    new issues {newIssues}
                </div>
                <p className='analytics__box-text'>hello</p>
            </div>
            <div className='analytics__priority-issues'>
                <div>
                    High Priority {highPriority}
                </div>
                <p className='analytics__box-text'>hello</p>
            </div>
        </section>
    );
};

export default Analytics;