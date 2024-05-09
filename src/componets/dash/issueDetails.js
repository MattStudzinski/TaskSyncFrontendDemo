import { useIssuesContext } from "../../hooks/useIssuesContext"
import { useAuthContext } from "../../hooks/useAuthContext"
const IssueDetails = ({issue}) => {
    const {dispatch} = useIssuesContext()
    const { driver = [], route = [], room = [] } = issue
    const {user} = useAuthContext()
    const handleClick = async () => {
        if (!user){
            return
        }

        const response = await fetch('/api/issues/' + issue._id, {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if(response.ok) {
            dispatch({type:'DELETE_ISSUE', payload: json})
        }
    }
    return (
        <div className="issue-details">
            <h4>{issue.title}</h4>
            <p><strong>Date</strong>{issue.createdAt}</p>
            <p><strong>description</strong>{issue.description}</p>
            <ul>
                {driver.map((driver,index) => (
                    <li key={index}>{driver}</li>
                    
                    
                ))}
            </ul>
            <ul>
                {route.map((route,index) => (
                    <li key={index}>{route}</li>
                    
                    
                ))}
            </ul>
            <ul>
                    {room.map((room, index) => (
                        <li key={index}>{room}</li>
                    ))}
            </ul>
            <p><strong>Priority</strong>{issue.priority}</p>
            <p><strong>Group Assigned</strong>{issue.groupassignment}</p>
            <p><strong>Category</strong>{issue.category}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    )
}
export default IssueDetails