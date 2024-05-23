import { createContext, useReducer } from "react";
import { useEffect } from "react";
import { jwtDecode } from 'jwt-decode'

export const AuthContext = createContext()


export const authReducer = (state, action) => {
switch (action.type) {
    case 'LOGIN':
        return { user: action.payload}
    case 'LOGOUT':
        return{ user: null }
    default: 
        return state
}
}

export const AuthContextProvider = ({children}) => {
const [state, dispatch] = useReducer(authReducer,{
    user: null
})

useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
        const decodedToken = jwtDecode(user.token);
        console.log('Decoded Token:', decodedToken); // Log the decoded token
        const userWithRole = { ...user, role: decodedToken.role };
        dispatch({ type: 'LOGIN', payload: userWithRole });
    }
}, [])


console.log("Authcontext state", state)

return (
    <AuthContext.Provider value={{...state, dispatch}}>
        {children}
    </AuthContext.Provider>
)
}