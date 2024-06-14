import React from 'react';
import { useEffect, useState } from 'react';

const useOptions = (issues) => {
    const [userOptions, setUserOptions] = useState([])
    const [priorityOptions, setPriorityOptions] = useState([])

    useEffect(() => {
        if (issues.length > 0) {
            const uniqueUsers = [...new Set(issues.map(issue => issue.drivers.map(driver => driver.name)).flat())]
            const uniquePriority = [...new Set(issues.map(issue => issue.priority))]

            setUserOptions(uniqueUsers.map(user => ({value: user, label: user})))
            setPriorityOptions(uniquePriority.map(priority => ({value: priority, label: priority})))
        }
    }, [issues])
    return {userOptions, priorityOptions}
};

export default useOptions;