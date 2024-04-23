const IssueDetails = ({issue}) => {
    const {driver, route, room } = issue
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
            
        </div>
    )
}
export default IssueDetails