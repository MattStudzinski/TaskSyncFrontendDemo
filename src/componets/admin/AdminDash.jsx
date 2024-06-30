import { useEffect, useRef, useState } from "react";
import { useIssuesContext } from "../../hooks/useIssuesContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import AdminPageIssues from "./AdminPageIssues";
import fetchAdminIssues from "../../fetch/fetchAdminIssues";
import ModalControlAdmin from "../modals/ModalControlAdmin";
import useFilteredIssues from "../../hooks/useFilteredIssues";
import useOptions from "../../hooks/useOptions";
import Pagination from "../ui/Pagination";
import ModalControlIssuesAdmin from "../modals/ModalControlIssuesAdmin";

const AdminDash = () => {
    const { issues = [], dispatch} = useIssuesContext()
    const { user } = useAuthContext()
    const [selectedUser, setSelectedUser] = useState('')
    const [selectedPriority, setSelectedPriority] = useState('')
    const [selectedIssue, setSelectedIssue] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState('')
    const { userOptions, priorityOptions, categoryOptions } = useOptions(issues)
    const filteredIssues = useFilteredIssues(issues, selectedUser, selectedPriority, selectedCategory)
    const [currentPage, setCurrentPage] = useState(1)
    const issuesPerPage = 6

    const listRef= useRef(null)
    

    useEffect(() => {
        if (user && user.role === 'admin'){
            fetchAdminIssues(dispatch, user.token)
            .catch(error => console.error("Error fetching issues:", error));
        }
    }, [dispatch, user])

    
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value)
        setCurrentPage(1)
    }

    const handleUserChange = (e) => {
        setSelectedUser(e.target.value)
        setCurrentPage(1)
    }

    const handlePriorityChange = (e) => {
        setSelectedPriority(e.target.value)
        setCurrentPage(1)
    }

    const handleIssueClick = (issue) => {
        setSelectedIssue(issue)
    }

    const handleCloseModal = () => {
        setSelectedIssue(null)
    }
   
    const indexOfLastIssue = currentPage * issuesPerPage
    const indexOfFirstIssue = indexOfLastIssue - issuesPerPage
    const currentIssues = filteredIssues.slice(indexOfFirstIssue, indexOfLastIssue)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
       

            <section className="admin-page">
                <div className="admin-page__navigation">
            <div className="filter-container">

                <div className="filter">
                    <label className="filter__label">User: </label>
                    <select className="filter__select" value={selectedUser} onChange={handleUserChange}>
                        <option className="filter__option" value="">All Users</option>
                        {userOptions.map((option, index) => (
                            <option key={index} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>

                <div className="filter">
                    <label className="filter__label">Category: </label>
                    <select className="filter__select" value={selectedCategory} onChange={handleCategoryChange}>
                        <option className="filter__option" value="">All Categories</option>
                        {categoryOptions.map((option, index) => (
                            <option key={index} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>

                <div className="filter">
                    <label className="filter__label">Priority: </label>
                    <select className="filter__select" value={selectedPriority} onChange={handlePriorityChange}>
                        <option className="filter__option" value="">All Priorities</option>
                        {priorityOptions.map((option, index) => (
                            <option key={index} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
                
            </div>
                <ModalControlAdmin />
            </div>
            <div className="results-page-admin">
                
                <section className="results-page-admin__card-admin">
                <ul ref={listRef} className='results-page__ul'>
                    {currentIssues.map((issue) => (
                        <li key={issue._id} className='results-page__li'>
                            <AdminPageIssues key={issue._id} issue={issue} onClick={handleIssueClick} />
                        </li>
                ))}
                </ul>
            </section>

            <Pagination
            itemsPerPage={issuesPerPage}
            totalItems={filteredIssues.length}
            paginate={paginate}
            currentPage={currentPage}
            />

                {selectedIssue && (
                <ModalControlIssuesAdmin
                issue={selectedIssue}
                isOpen={true}
                onClose={handleCloseModal}
                />
            )}
        </div>
        </section>
    );
};

export default AdminDash;