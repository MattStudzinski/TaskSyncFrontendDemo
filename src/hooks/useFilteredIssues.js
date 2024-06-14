import React from 'react';
import { useEffect, useState } from 'react';

const useFilteredIssues = (issues, selectedUser, selectedPriority) => {
    const[filteredIssues, setFilteredIssues] = useState([])

    useEffect(() => {
        let tempIssues = issues

        if(selectedUser) {
            tempIssues = tempIssues.filter(issue =>
            issue.drivers.some(driver => driver.name === selectedUser)
            )
        }

        if (selectedPriority) {
            tempIssues = tempIssues.filter(issue => issue.priority === selectedPriority)
        }

        setFilteredIssues(tempIssues)
    }, [issues, selectedPriority, selectedUser]
)
    return filteredIssues
        
};

export default useFilteredIssues;