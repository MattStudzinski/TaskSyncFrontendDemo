import { useEffect, useState } from 'react';

const useOptions = (issues) => {
    const [userOptions, setUserOptions] = useState([])
    const [priorityOptions, setPriorityOptions] = useState([])
    const [categoryOptions, setCategoryOptions] = useState([])

    useEffect(() => {
        if (issues.length > 0) {
            const uniqueUsers = [...new Set(issues.map(issue => issue.drivers.map(driver => driver.name)).flat())]
            const uniquePriority = [...new Set(issues.map(issue => issue.priority))]
            const uniqueCategory = [...new Set(issues.map(issue => issue.category))]

            setUserOptions(uniqueUsers.map(user => ({value: user, label: user})))
            setCategoryOptions(uniqueCategory.map(category => ({value: category, label: category})))
            setPriorityOptions(uniquePriority.map(priority => ({value: priority, label: priority})))
        }
    }, [issues])
    return {userOptions, priorityOptions, categoryOptions}
};

export default useOptions;