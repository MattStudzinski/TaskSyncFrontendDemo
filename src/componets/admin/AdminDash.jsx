import { useEffect } from "react";
import { useIssuesContext } from "../../hooks/useIssuesContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import AdminPageIssues from "./AdminPageIssues";
import fetchAdminIssues from "../../fetch/fetchAdminIssues";
import ModalControlAdmin from "../modals/ModalControlAdmin";

const AdminDash = () => {
    const { issues, dispatch} = useIssuesContext()
    const { user } = useAuthContext()

    useEffect(() => {
        if (user && user.role === 'admin'){
            fetchAdminIssues(dispatch, user.token)
        }
    }, [dispatch, user])

    return (
        <div>
        
        <div className="minicard">
        <ModalControlAdmin />
            {issues && issues.map((issue) => (
                <AdminPageIssues key = {issue._id} issue= {issue}/>
            ))}
        </div>
        </div>
    );
};

export default AdminDash;