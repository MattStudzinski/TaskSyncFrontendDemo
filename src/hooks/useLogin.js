import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { jwtDecode } from "jwt-decode";

export const useLogin = () => {

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()


    const login = async (name, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('https://task-sync-backend-demo-a723755d492a.herokuapp.com/api/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, password})
        })
        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok) {
            const decodedToken = jwtDecode(json.token);
            const userWithRole = { ...json, role: decodedToken.role };
            // save user to local storage which is jwt and email
            localStorage.setItem('user', JSON.stringify(userWithRole))
            // update auth context
            dispatch({type: 'LOGIN', payload: userWithRole})
            setIsLoading(false)
        }
    }
    return {login, isLoading, error}
}