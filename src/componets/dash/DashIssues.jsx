import { useContext, useEffect, useState, useRef } from "react";
import { useIssuesContext } from "../../hooks/useIssuesContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { IssueFilterContext } from "../context/FilterContext";
import IssueInfo from './issueInfo';
import Pagination from "../ui/Pagination";
import fetchIssues from "../../fetch/fetchIssues";
import ModalControlInfo from "../modals/ModalControlInfo";

const DashIssues = () => {
    const { issues, dispatch } = useIssuesContext();
    const { filter } = useContext(IssueFilterContext);
    const { user } = useAuthContext();
    const [loading, setLoading] = useState(true);
    const [selectedIssue, setSelectedIssue] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [animationKey, setAnimationKey] = useState(0);
    const issuesPerPage = 4;
    const listRef = useRef(null);

    useEffect(() => {
        if (user) {
            fetchIssues(dispatch, user.token).then(() => setLoading(false));
        }
    }, [dispatch, user]);

    useEffect(() => {
        const newFilteredIssues = filterIssues(issues);
        setAnimationKey(prevKey => prevKey + 1); // Update animation key to trigger animation
    }, [issues, filter]);

    const filterIssues = (issues) => {
        let filteredIssues = issues.filter(issue => !issue.complete);

        if (filter === 'completed') {
            filteredIssues = issues.filter(issue => issue.complete);
        }

        switch (filter) {
            case 'priority':
                return filteredIssues.sort((a, b) => {
                    const priorityOrder = { high: 1, medium: 2, low: 3 };
                    return priorityOrder[a.priority] - priorityOrder[b.priority];
                });
            case 'date':
                return filteredIssues.sort((a, b) => {
                    const dateA = new Date(a.createdAt);
                    const dateB = new Date(b.createdAt);
                    return dateB - dateA;
                });
            default:
                return filteredIssues;
        }
    };

    const handleIssueClick = (issue) => {
        setSelectedIssue(issue);
    };

    const handleCloseModal = () => {
        setSelectedIssue(null);
    };

    const filteredIssues = filterIssues(issues);
    const indexOfLastIssue = currentPage * issuesPerPage;
    const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
    const currentIssues = filteredIssues.slice(indexOfFirstIssue, indexOfLastIssue);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section className="issues-container">
            <ul ref={listRef} className={`results-page__ul animation-${animationKey}`}>
                {currentIssues.map((issue) => (
                    <li key={`${issue._id}-${animationKey}`} className="results-page__li">
                        <IssueInfo issue={issue} onClick={handleIssueClick} />
                    </li>
                ))}
            </ul>
            <Pagination
                className="pagination"
                itemsPerPage={issuesPerPage}
                totalItems={filteredIssues.length}
                paginate={paginate}
                currentPage={currentPage}
            />
            {selectedIssue && (
                <ModalControlInfo
                    issue={selectedIssue}
                    isOpen={true}
                    onClose={handleCloseModal}
                />
            )}
        </section>
    );
};

export default DashIssues;
