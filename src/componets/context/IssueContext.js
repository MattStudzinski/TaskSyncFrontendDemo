import { createContext, useReducer } from "react";

export const IssueContext = createContext()

export const issuesReducer = (state, action) => {
switch (action.type) {
    case "SET_ISSUES":
        return{
            issues: action.payload
        }
        case "CREATE_ISSUE":
            return{
                issues: [action.payload, ...state.issues]
            }
        case "DELETE_ISSUE":
            console.log("Payload in DELETE_ISSUE action:", action.payload);
            return{
                issues: state.issues.filter((i) => i._id !== action.payload._id)
            }
            
            default: 
            return state
}
}

export const IssueContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(issuesReducer, {
        issues: null
    })

    // dispatch({type: 'SET_WORKOUTS', payload: [{}, {}]})

    return (
        <IssueContext.Provider value={{...state, dispatch}}>
            { children }
        </IssueContext.Provider>
    )
}