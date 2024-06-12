import React, { useEffect, useState } from 'react';
import { useIssuesContext } from '../../hooks/useIssuesContext';
import { useAuthContext } from '../../hooks/useAuthContext';
import { Link } from 'react-router-dom';
import AnalyticNewTask from '../../svgs/SVG/AnalyticNewTask';
import AnalyticOpenTasks from '../../svgs/SVG/AnalyticOpenTasks';
import AnalyticPriority from '../../svgs/SVG/AnalyticPriority';

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
            return isUserAssigned && !isUserCompleted && !issue.complete;
        });

        setOpenIssues(userOpenIssues.length);
        

        const highPriorityIssues = issues.filter(issue => issue.priority === 'high' && !issue.complete)
        setHighPriority(highPriorityIssues.length)

        const dateTracker = new Date()
        dateTracker.setDate(dateTracker.getDate() - 1)

        const newIssues = issues.filter(issue => {
            const issueDate = new Date(issue.createdAt)
            return issueDate >= dateTracker & !issue.complete
        })

        setNewIssues(newIssues.length)

    }, [user, issues])


    return (
        <section className='analytics'>
            <Link className='analytics__link' to= {'/allissues'}>
                <article className='analytics__open-issues'>
                    <div className= 'analytics__header-container'>
                        <div className='analytics__header-logo'>
                            <AnalyticOpenTasks />
                        </div>
                        <h2 className='analytics__header-title'>Tasks<br></br> In Progress</h2>
                    </div>
                    <div className='analytics__info-box'>
                        <p className='analytics__info'>
                            {openIssues} 
                        </p>
                        <p className='analytics__info-string'>Open issues</p>
                    </div>
            </article>
            </Link>
            <Link className='analytics__link' to={'/new'}>
                <article className='analytics__new-issues'>
                    <div className='analytics__header-container'>
                        <div className='analytics__header-logo'>
                            <AnalyticNewTask />
                        </div>
                        <h2 className='analytics__header-title'>New Issues</h2>
                    </div>
                    <div className='analytics__info-box'>
                        <p className='analytics__info'>
                            {newIssues}
                        </p>
                        <p className='analytics__info-string'>New In The Last Day </p>
                    </div>
            </article>
            </Link>
            <Link className='analytics__link' to={'/priority'}>
            <article className='analytics__priority-issues'>
                <div className='analytics__header-container'>
                    <div className='analytics__header-logo'>
                        <AnalyticPriority />
                    </div>
                    <h2 className='analytics__header-title'>Priority Issues</h2>
                </div>
                <div className='analytics__info-box'>
                    <p className='analytics__info'>
                        {highPriority}
                    </p>
                    <p className='analytics__info-string'>
                        High Priority Issues
                    </p>
                </div>
            </article>
            </Link>
        </section>
    );
};

export default Analytics;