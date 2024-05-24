import { createContext, useState } from "react";

export const IssueFilterContext = createContext()

export const IssueFilterProvider = ({ children }) => {
    const [filter, setFilter] = useState('all')

    return (
        <IssueFilterContext.Provider value= {{filter, setFilter}}>
            {children}
        </IssueFilterContext.Provider>
    )
}