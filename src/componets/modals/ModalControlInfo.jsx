import React, { useState } from 'react';
import Modal from '../ui/Modal';
import UserIssueInfo from '../pages/UserIssueInfo';


const ModalControlInfo = ({issue, isOpen, onClose}) => {

    
    return (
        
            
            <Modal open={isOpen} onClose={onClose}>
                <UserIssueInfo issue={issue} />
                
            </Modal>
            
        
    );
};
export default ModalControlInfo;

