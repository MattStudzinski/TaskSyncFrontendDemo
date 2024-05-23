// fetchIssues.js

const fetchIssues = async (dispatch, token) => {
    const response = await fetch('/api/issues/admin', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const json = await response.json();

    if(response.ok) {
        dispatch({ type: "SET_ISSUES", payload: json });
        console.log(json, "from admin fetch")
    }
};

export default fetchIssues;
