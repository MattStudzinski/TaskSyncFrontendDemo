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

    return createPortal(
    
    <dialog ref={dialog} className={`modal ${className}`}>
        {children}
        <button onClick={onClose}>Close</button>
    </dialog>
    ,
    
    document.getElementById('modal'))
    
};

export default Modal;