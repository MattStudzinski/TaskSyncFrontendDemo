import React, { useState } from 'react';
import Modal from '../ui/Modal';
import DashIssueForm from '../forms/DashIssueForm';

const ModalControllerDash = ({onClose}) => {


    const [ isOpen, setIsOpen ] = useState(false)

    const handleOpenModal = () => {
        setIsOpen(true)
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }
    return (
        <div>
            <button className='new-task__button' onClick={handleOpenModal}>Create New Task</button>
            <Modal className='modal-form' open={isOpen} onClose={handleCloseModal}>
                <DashIssueForm onClose={handleCloseModal} />
            </Modal>
        </div>
    );
};

export default ModalControllerDash;