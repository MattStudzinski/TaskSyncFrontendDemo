import { useContext, useEffect } from "react";
import { useIssuesContext } from "../../hooks/useIssuesContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { IssueFilterContext } from "../context/FilterContext";
import IssueInfo from './issueInfo'
import fetchIssues from "../../fetch/fetchIssues";

const DashIssues = () => {
    const { issues, dispatch} = useIssuesContext()
    const {filter} = useContext(IssueFilterContext)
    const { user } = useAuthContext()
    console.log(issues)
    useEffect(() => {
        if (user){
            fetchIssues(dispatch, user.token)
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

    return (
        <>
            {filterIssues(issues).map((issue) => (
                <IssueInfo key = {issue._id} issue= {issue}/>
            ))}
        </>
    );
};

export default DashIssues;