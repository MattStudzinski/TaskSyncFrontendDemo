import React, { useEffect, useState } from 'react';
import { useIssuesContext } from '../../hooks/useIssuesContext';
import { useAuthContext } from '../../hooks/useAuthContext';

const Analytics = () => {
    const { issues } = useIssuesContext()
    const { user } = useAuthContext()
    const [ highPriority, setHighPriority ] = useState(0)
    const [ newIssues, setNewIssues ] = useState(0)
    const [ openIssues, setOpenIssues ] = useState(0)


    useEffect(() => {

        if (!user || !issues) return;


        
        // Filter open issues for the logged-in user
        const userOpenIssues = issues.filter(issue => {
            const isUserAssigned = issue.drivers.some(driver => driver.name === user.name);
            const isUserCompleted = issue.completionStatus.some(status => status.driver === user._id && status.isComplete);
            return isUserAssigned && !isUserCompleted;
        });

        setOpenIssues(userOpenIssues.length);
        

        const highPriorityIssues = issues.filter(issue => issue.priority === 'high')
        setHighPriority(highPriorityIssues.length)

        const dateTracker = new Date()
        dateTracker.setDate(dateTracker.getDate() - 1)

        const newIssues = issues.filter(issue => {
            const issueDate = new Date(issue.createdAt)
            return issueDate >= dateTracker
        })

        setNewIssues(newIssues.length)

    }, [user, issues])


    return (
        <section className='analytics'>
            <div className='analytics__open-issues'>
                <div >
                    Open Issues {openIssues}
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