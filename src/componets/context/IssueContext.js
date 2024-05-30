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
            case "UPDATE_ISSUE":
                console.log("Payload in UPDATE_ISSUE action:", action.payload);
                return {
                    issues: state.issues.map((issue) => 
                        issue._id === action.payload._id ? action.payload : issue
                    )
                };
            
            default: 
            return state
}
}

export const IssueContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(issuesReducer, {
        issues: []
    })

    // dispatch({type: 'SET_WORKOUTS', payload: [{}, {}]})

    return (
        <IssueContext.Provider value={{...state, dispatch}}>
            { children }
        </IssueContext.Provider>
    )
}