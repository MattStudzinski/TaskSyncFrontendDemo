import React, { useState } from 'react';
import Modal from '../ui/Modal';
import AdminForm from '../forms/AdminForm'

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
            <button className='new-task__button' onClick={handleOpenModal}>Add New Issue</button>
            <Modal open={isModalOpen} onClose={handleCloseModal}>
                <AdminForm onClose={handleCloseModal} />
            </Modal>
        </div>
    );
};

export default ModalControlAdmin;