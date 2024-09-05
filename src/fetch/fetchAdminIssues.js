// fetchIssues.js

const fetchIssues = async (dispatch, token) => {
    const response = await fetch('https://tasksyncbackend-01eb2bc18fab.herokuapp.com/api/issues/admin', {
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
