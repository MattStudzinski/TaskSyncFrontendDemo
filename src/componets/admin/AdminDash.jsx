import { useEffect, useState } from "react";
import { useIssuesContext } from "../../hooks/useIssuesContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import AdminPageIssues from "./AdminPageIssues";
import fetchAdminIssues from "../../fetch/fetchAdminIssues";
import ModalControlAdmin from "../modals/ModalControlAdmin";
import useFilteredIssues from "../../hooks/useFilteredIssues";
import useOptions from "../../hooks/useOptions";

const AdminDash = () => {
    const { issues = [], dispatch} = useIssuesContext()
    const { user } = useAuthContext()
    const [selectedUser, setSelectedUser] = useState('')
    const [selectedPriority, setSelectedPriority] = useState('')
    const { userOptions, priorityOptions } = useOptions(issues)
    const filteredIssues = useFilteredIssues(issues, selectedUser, selectedPriority)
    const [currentPage, setCurrentPage] = useState(1)
    const issuesPerPage = 5
    

    useEffect(() => {
        if (user && user.role === 'admin'){
            fetchAdminIssues(dispatch, user.token)
            .catch(error => console.error("Error fetching issues:", error));
        }
    }, [dispatch, user])

    


    const handleUserChange = (e) => {
        setSelectedUser(e.target.value)
        setCurrentPage(1)
    }

    const handlePriorityChange = (e) => {
        setSelectedPriority(e.target.value)
        setCurrentPage(1)
    }
   
    const indexOfLastIssue = currentPage * issuesPerPage
    const indexOfFirstIssue = indexOfLastIssue - issuesPerPage
    const currentIssues = filteredIssues.slice(indexOfFirstIssue, indexOfLastIssue)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
       <div>
            <div>
                <label>User: </label>
                <select value={selectedUser} onChange={handleUserChange}>
                    <option value="">All Users</option>
                    {userOptions.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>

            <div>
                <label>Priority: </label>
                <select value={selectedPriority} onChange={handlePriorityChange}>
                    <option value="">All Priorities</option>
                    {priorityOptions.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>

            <div className="minicard">
                <ModalControlAdmin />
                {currentIssues.map((issue) => (
                    <AdminPageIssues key={issue._id} issue={issue} />
                ))}
            </div>

            <div className="pagination">
                {Array.from({ length: Math.ceil(filteredIssues.length / issuesPerPage) }, (_, i) => (
                    <button key={i} onClick={() => paginate(i + 1)}>
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AdminDash;