import { useEffect } from "react";
import { useIssuesContext } from "../../hooks/useIssuesContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import AdminPageIssues from "./AdminPageIssues";
import fetchIssues from "../../fetchIssues";

const AdminDash = () => {
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
                <AdminPageIssues key = {issue._id} issue= {issue}/>
            ))}
        </div>
    );
};

export default AdminDash;