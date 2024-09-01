import React from 'react';
import CategoryIcon from '../ui/CategoryIcon';

const DueSoonCard = ({issue}) => {


    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString()
    }

    return (
        <div className='due-soon__card'>
            <p>
                <CategoryIcon category={issue.category} className='alternate-style' />
            </p>
            
            <div className='due-soon__info-container'>
                <h4 className='due-soon__name'>{issue.name}</h4>
            
                <p className='due-soon__date'><strong>Due: </strong>{formatDate(issue.dueDate)}</p>
            </div>
        </div>
    );
};

export default DueSoonCard;