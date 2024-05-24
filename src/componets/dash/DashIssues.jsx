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

    useEffect(() => {
        if (user){
            fetchIssues(dispatch, user.token)
        }
    }, [dispatch, user])

    const filterIssues = (issues) => {
        console.log(issues)
        switch (filter) {
            case 'priority':
                return issues.sort((a, b) => {
                    const priorityOrder = {high: 1, medium: 2, low: 3}
                    return priorityOrder[a.priority] - priorityOrder[b.priority]
                })
            case 'date':
                return issues.sort((a, b) => {
                    const dateA = new Date(a.createdAt)
                    const dateB = new Date(b.createdAt)
                    console.log(dateA)
                    return dateA - dateB
                    
                })
                
                default:
                    return issues
                    
        }
    }

    return (
        <div className="minicard">
            {filterIssues(issues).map((issue) => (
                <IssueInfo key = {issue._id} issue= {issue}/>
            ))}
        </div>
    );
};

export default DashIssues;