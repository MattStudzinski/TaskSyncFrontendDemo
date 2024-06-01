import React, { useState } from 'react';
import Modal from '../ui/Modal';
import IssueForm from '../forms/IssueForm';

const ModalControlAdmin = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }
    
    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div>
            <button onClick={handleOpenModal}>Add New Issue</button>
            <Modal open={isModalOpen} onClose={handleCloseModal}>
                <IssueForm />
            </Modal>
        </div>
    );
};

export default ModalControlAdmin;