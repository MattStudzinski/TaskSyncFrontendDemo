import { AuthContext } from "../componets/context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context) {
        throw Error("AuthContext must be used within the provider, something went wrong with its activation")
    }
    
    return context
}