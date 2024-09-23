// fetchIssues.js

const fetchIssues = async (dispatch, token) => {
    const response = await fetch('https://task-sync-backend-demo-a723755d492a.herokuapp.com/api/issues/admin', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const json = await response.json();

    if(response.ok) {
        dispatch({ type: "SET_ISSUES", payload: json });
        console.log(json)
    }
};

export default fetchIssues;
