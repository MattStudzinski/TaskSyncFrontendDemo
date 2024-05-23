import { useEffect } from "react";
import { useIssuesContext } from "../../hooks/useIssuesContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import IssueInfo from './issueInfo'
import fetchIssues from "../../fetch/fetchIssues";

const DashIssues = () => {
    const { issues, dispatch} = useIssuesContext()
    const { user } = useAuthContext()

    useEffect(() => {
        if (user){
            fetchIssues(dispatch, user.token)
        }
    }, [dispatch, user])

    return (
        <div className="minicard">
            {issues && issues.map((issue) => (
                <IssueInfo key = {issue._id} issue= {issue}/>
            ))}
        </div>
    );
};

export default DashIssues;