import React from 'react';
import { useIssuesContext } from '../../hooks/useIssuesContext';
import IssueInfo from '../dash/issueInfo'

const Complete = () => {

    const {issues} = useIssuesContext()

    const filterIssues = (issues) => {
        return issues.filter(issue => issue.complete)
    }
    return (
        <div className='results-page'>
        <section className="results-page__card">
        <ul className="issue-list__list">
            {filterIssues(issues).map((issue) => (
            <li className="issue-list__list-item">
                <IssueInfo key = {issue._id} issue= {issue}/>
            </li>
            ))}
        </ul>
        </section>
        </div>
    )
}

export default Complete;