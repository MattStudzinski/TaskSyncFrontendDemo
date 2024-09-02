import { useEffect, useState } from 'react';

const useFilteredIssues = (issues, selectedUser, selectedPriority, selectedCategory) => {
    const[filteredIssues, setFilteredIssues] = useState([])

    useEffect(() => {
        let tempIssues = issues

        if(selectedUser) {
            tempIssues = tempIssues.filter(issue =>
            issue.drivers.some(driver => driver.name === selectedUser)
            )
        }

        if(selectedCategory) {
            tempIssues = tempIssues.filter(issue => issue.category === selectedCategory)
        }

        if (selectedPriority) {
            tempIssues = tempIssues.filter(issue => issue.priority === selectedPriority)
        }

        setFilteredIssues(tempIssues)
    }, [issues, selectedPriority, selectedUser, selectedCategory]
)
    return filteredIssues
        
};

export default useFilteredIssues;