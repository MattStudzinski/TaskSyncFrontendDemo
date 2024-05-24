import { useEffect } from "react";
import { useIssuesContext } from "../../hooks/useIssuesContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import AdminPageIssues from "./AdminPageIssues";
import fetchAdminIssues from "../../fetch/fetchAdminIssues";
import Modal from "../ui/Modal";
import ModalControl from "../context/ModalControl";

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
        <ModalControl />
        <div className="minicard">
            {issues && issues.map((issue) => (
                <AdminPageIssues key = {issue._id} issue= {issue}/>
            ))}
        </div>
        </div>
    );
};

export default AdminDash;