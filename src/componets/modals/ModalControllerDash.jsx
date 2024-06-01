import React, { useState } from 'react';
import Modal from '../ui/Modal';
import DashIssueForm from '../forms/DashIssueForm';

const ModalControllerDash = () => {


    const [ isOpen, setIsOpen] = useState(false)

    const handleOpenModal = () => {
        setIsOpen(true)
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }
    return (
        <div>
            <button onClick={handleOpenModal}>Create New Task</button>
            <Modal open={isOpen} onClose={handleCloseModal}>
                <DashIssueForm />
            </Modal>
        </div>
    );
};

export default ModalControllerDash;