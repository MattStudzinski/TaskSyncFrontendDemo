import { createContext, useReducer, useEffect } from "react";
import {jwtDecode} from 'jwt-decode';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload };
        case 'LOGOUT':
            return { user: null };
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
    });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (user) {
            const decodedToken = jwtDecode(user.token);
            const currentTime = Date.now() / 1000;
            if (decodedToken.exp < currentTime) {
                localStorage.removeItem('user');
            } else {
                const userWithRole = { ...user, role: decodedToken.role };
                dispatch({ type: 'LOGIN', payload: userWithRole });
            }
        }
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
