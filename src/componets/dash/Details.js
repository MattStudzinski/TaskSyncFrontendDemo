const IssueDetails = ({issue}) => {
    const {assignment, route, room } = issue
    return (
        <div className="issue-details">
            <h4>{issue.title}</h4>
            <p><strong>Date</strong>{issue.createdAt}</p>
            <p><strong>description</strong>{issue.description}</p>
            <ul>
                {assignment.map((assignment,index) => (
                    <li key={index}>{assignment}</li>
                    
                    
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
            
        </div>
    )
}
export default IssueDetails