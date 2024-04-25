import { IssueContext } from "../componets/context/IssueContext";
import { useContext } from "react";

export const useIssuesContext = () => {
    const context = useContext(IssueContext)

    if(!context) {
        throw Error('useissueContext must be used within the provider. out of scope or something silly')
    }

    return context
}
