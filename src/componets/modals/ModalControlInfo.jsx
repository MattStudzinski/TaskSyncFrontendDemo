import Modal from '../ui/Modal';
import UserIssueInfo from '../pages/UserIssueInfo';


const ModalControlInfo = ({issue, isOpen, onClose}) => {

    
    return (
        
            
            <Modal open={isOpen} onClose={onClose}>
                <UserIssueInfo onClose={onClose} issue={issue} />
            </Modal>
            
        
    );
};
export default ModalControlInfo;

