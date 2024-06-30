import React, { useState } from 'react';
import Modal from '../ui/Modal';
import UserIssueInfo from '../pages/UserIssueInfo';


const ModalControlInfo = ({issue, isOpen, onClose}) => {

    
    return (
        
            
            <Modal className='modal-issue__info' open={isOpen} onClose={onClose}>
                <UserIssueInfo onClose={onClose} issue={issue} />
            </Modal>
            
        
    );
};
export default ModalControlInfo;

