// fetchIssues.js

const fetchIssues = async (dispatch, token) => {
    const response = await fetch('/api/issues/', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const json = await response.json();

    if(response.ok) {
        dispatch({ type: "SET_ISSUES", payload: json });
    }
};

export default fetchIssues;
