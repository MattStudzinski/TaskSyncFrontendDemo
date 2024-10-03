import React, { useEffect, useState } from 'react';
import { useIssuesContext } from '../../../hooks/useIssuesContext';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { Link } from 'react-router-dom';
import New from '../../../svgs/MobileSVG/MobileAnalytics/New';
import Priority from '../../../svgs/MobileSVG/MobileAnalytics/Priority';
import InProgress from '../../../svgs/MobileSVG/MobileAnalytics/InProgress';

const MobAnalytics = () => {

    const { issues } = useIssuesContext()
    const { user } = useAuthContext()
    const [ highPriority, setHighPriority ] = useState(0)
    const [ newIssues, setNewIssues ] = useState(0)
    const [ openIssues, setOpenIssues ] = useState(0)

    useEffect(() => {
        if (!user || !issues) return

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
        <section className='mobileanalytics'>
            <div className='mobileanalytics__container'>
                <Link className='mobileanalytics__link1' to= {'/allissues'}>
                <article className='mobileanalytics__open-issues'>
                    <div className= 'mobileanalytics__header-container'>
                        <div className='mobileanalytics__header-logo'>
                            <InProgress />
                        </div>
                        <h2 className='mobileanalytics__header-title'>In Progress</h2>
                    </div>
                    <div className='mobileanalytics__info-box'>
                        <p className='mobileanalytics__info'>
                            {openIssues} 
                        </p>
                        <p className='mobileanalytics__info-string'>Open issues</p>
                    </div>
            </article>
                </Link>
                <Link className='mobileanalytics__link2' to= {'/new'}>
                <article className='mobileanalytics__new-issues'>
                    <div className='mobileanalytics__header-container'>
                        <div className='mobileanalytics__header-logo'>
                            <New />
                        </div>
                        <h2 className='mobileanalytics__header-title'>New</h2>
                    </div>
                    <div className='mobileanalytics__info-box'>
                        <p className='mobileanalytics__info'>
                            {newIssues}
                        </p>
                        <p className='mobileanalytics__info-string'>Last 24 Hours </p>
                    </div>
            </article>
                </Link>
                <Link className='mobileanalytics__link3' to= {'/priority'}>
                <article className='mobileanalytics__priority-issues'>
                <div className='mobileanalytics__header-container'>
                    <div className='mobileanalytics__header-logo'>
                        <Priority />
                    </div>
                    <h2 className='mobileanalytics__header-title'>Priority</h2>
                </div>
                <div className='mobileanalytics__info-box'>
                    <p className='mobileanalytics__info'>
                        {highPriority}
                    </p>
                    <p className='mobileanalytics__info-string'>
                        High Priority Issues
                    </p>
                </div>
            </article>
                </Link>
            </div>
        </section>
    );
};

export default MobAnalytics;