import { useContext, useEffect, useState } from "react";
import { useIssuesContext } from "../../hooks/useIssuesContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { IssueFilterContext } from "../context/FilterContext";
import IssueInfo from './issueInfo'
import fetchIssues from "../../fetch/fetchIssues";
import ModalControlInfo from "../modals/ModalControlInfo";

const DashIssues = () => {
    const { issues, dispatch} = useIssuesContext()
    const {filter} = useContext(IssueFilterContext)
    const { user } = useAuthContext()
    const [loading, setLoading] = useState(true)
    const [selectedIssue, setSelectedIssue] = useState(null)

    console.log(issues)
    useEffect(() => {
        if (user){
            fetchIssues(dispatch, user.token).then(() => setLoading(false))
        }
    }, [dispatch, user])

    const filterIssues = (issues) => {
        let filteredIssues = issues.filter(issue => !issue.complete)

        if (filter === 'completed') {
            filteredIssues = issues.filter(issue => issue.complete)
        } 
        


        switch (filter) {
            case 'priority':
                return filteredIssues.sort((a, b) => {
                    console.log(filteredIssues)
                    const priorityOrder = {high: 1, medium: 2, low: 3}
                    return priorityOrder[a.priority] - priorityOrder[b.priority]
                    
                })
            case 'date':
                return filteredIssues.sort((a, b) => {
                    console.log(filteredIssues)
                    const dateA = new Date(a.createdAt)
                    const dateB = new Date(b.createdAt)
                    return dateB - dateA
                    
                })
                default:
                    return filteredIssues
                    
        }
    }

    const handleIssueClick = (issue) => {
        setSelectedIssue(issue)
    }

    const handleCloseModal = () => {
        setSelectedIssue(null)
    }

    if(loading) {
        return<div>Loading...</div>
    }

    return (
        <>
        <ul>
            {filterIssues(issues).map((issue) => (
            
                <IssueInfo key = {issue._id} issue= {issue} onClick={handleIssueClick}/>
        
            ))}
        </ul>
        {selectedIssue && (
            <ModalControlInfo 
            issue={selectedIssue} 
            isOpen={true} 
            onClose={handleCloseModal}
        />
        )}
        </>
    );
};


export default DashIssues;