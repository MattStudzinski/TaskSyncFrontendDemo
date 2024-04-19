import React from 'react';
import IssueDetails from './Details'
import { useEffect, useState } from 'react';


const Tickets = () => {
const [issues, setIssues] = useState(null)

    useEffect(() => {
        const fetchIssues = async () => {
            const response = await fetch('/api/issues/')
            const json = await response.json()

            if(response.ok) {
                setIssues(json)
                
            }
        }

        fetchIssues()
        
    }, [])
console.log(issues)
    return (
        <div className='tickets'>
            <div className='issues'>
                {issues && issues.map((issue) => (
                    <IssueDetails key={issue._id} issue={issue} />
                ))}
            </div>
            
        </div>
    );
}



export default Tickets;