import { IonIcon } from "@ionic/react";
import { checkmarkCircleOutline, closeCircleOutline } from "ionicons/icons";

const SuccessModal = ({ isOpen, onClose, message, type }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content max-w-sm flex flex-col justify-center items-center h-[200px]">
          <IonIcon 
            icon={type === 'success' ? checkmarkCircleOutline : closeCircleOutline} 
            style={{ fontSize: '48px', color: type === 'success' ? 'green' : 'red' }}
          />
          <p>{message}</p>
          <button onClick={onClose} className="mt-4 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700">Close</button>
        </div>
      </div>
    );
};

export default SuccessModal;
