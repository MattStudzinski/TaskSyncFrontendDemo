import React, { useState } from 'react';
import UserIssueInfo from '../pages/UserIssueInfo';
import Modal from '../ui/Modal';

const ModalControlIssuesAdmin = ({issue, isOpen, onClose}) => {

    return (
        <Modal className='modal-issue__info' open={isOpen} onClose={onClose} >
                <UserIssueInfo onClose={onClose} issue={issue} />
        </Modal>
    );
};

export default ModalControlIssuesAdmin;