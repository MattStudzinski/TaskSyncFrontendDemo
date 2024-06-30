import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';


const Modal = ({children, open, onClose, className = ''}) => {
    const dialog = useRef()
    
    
    useEffect(() => {
        if(open){
            dialog.current.showModal()
        } else {
            dialog.current.close()
        }
    }, [open])

    useEffect(() => {
        const handleClose = () => onClose()
        const dialogNode = dialog.current
        dialogNode.addEventListener('close', handleClose)
        return () => (
            dialogNode.removeEventListener('close', handleClose)
        )
    }, [onClose])

    const handleOutClick = (e) => {
        console.log(e.target)
        if(e.target == dialog.current) {
            
            onClose()
        }
    }

    return createPortal(
    
    <dialog ref={dialog} className={`modal ${className}`} onClick={handleOutClick}>
        <div className='modal__container'>
        {children}
        </div>
    </dialog>
    ,
    
    document.getElementById('modal'))
    
};

export default Modal;