import { useEffect, useState } from "react";
import { useIssuesContext } from "../../hooks/useIssuesContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import AdminPageIssues from "./AdminPageIssues";
import fetchAdminIssues from "../../fetch/fetchAdminIssues";
import ModalControlAdmin from "../modals/ModalControlAdmin";

const AdminDash = () => {
    const { issues = [], dispatch} = useIssuesContext()
    const { user } = useAuthContext()
    const [selectedUser, setSelectedUser] = useState('')
    const [selectedPriority, setSelectedPriority] = useState('')
    const [userOptions, setUserOptions] = useState([])
    const [priorityOptions, setPrioriryOptions] = useState([])

    useEffect(() => {
        if (user && user.role === 'admin'){
            fetchAdminIssues(dispatch, user.token)
            .catch(error => console.error("Error fetching issues:", error));
        }
    }, [dispatch, user])

    useEffect(() => {
        if (issues.length > 0) {
            const uniquePriorities = [...new Set(issues.map(issue => issue.priority))]
            const uniqueUsers = [...new Set(issues.map(issue => issue.drivers.map(driver => driver.name)).flat())];
            

            setUserOptions(uniqueUsers.map(user => ({ value: user, label:user })))
            setPrioriryOptions(uniquePriorities.map(priority => ({value: priority, label: priority})))
        }
    }, [issues])

    const filterByUser = (issues, user) => {
        if (!user) return issues
        return issues.filter(issue =>
        issue.drivers.some(driver => driver.name === user)
        )
    }

    const filterByPriority = (issues, priority) => {
        if (!priority) return issues
        return issues.filter(issue => issue.priority === priority)
    }   

    const handleUserChange = (selectedOption) => {
        setSelectedUser(selectedOption.value)
    }

    const handlePriorityChange = (selectedOption) => {
        setSelectedPriority(selectedOption.value)
    }

    const getFilteredIssues = () => {
        let filteredIssues = issues || []
        filteredIssues = filterByUser(filteredIssues, selectedUser)
        filteredIssues = filterByPriority(filteredIssues, selectedPriority)

        return filteredIssues
    }

    return (
        <div>
            <div>
                <label>User: </label>
                <select value={selectedUser} onChange={(e) => handleUserChange(e.target.value)}>
                    <option value="">All Users</option>
                    {userOptions.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>

            <div>
                <label>Priority: </label>
                <select value={selectedPriority} onChange={(e) => handlePriorityChange(e.target.value)}>
                    <option value="">Priorities</option>
                    {priorityOptions.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                ))}
                </select>
            </div>

            <div className="minicard">
                <ModalControlAdmin />
                {getFilteredIssues().map((issue) => (
                    <AdminPageIssues key={issue._id} issue={issue} />
                ))}
            </div>
        </div>
    );
};

export default AdminDash;