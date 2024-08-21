import { IonIcon } from "@ionic/react";
import { checkmarkCircleOutline, closeCircleOutline, mailOutline } from "ionicons/icons";

const SuccessModal = ({ isOpen, onClose, message, type, onSubmitEmail, email, setEmail }) => {
    if (!isOpen) return null;

    return (
      <div className="modal-overlay">
        <div className="modal-content max-w-sm flex flex-col justify-center items-center p-5">
          <IonIcon 
            icon={type === 'success' ? checkmarkCircleOutline : (type === 'error' ? closeCircleOutline : mailOutline)} 
            style={{ fontSize: '48px', color: type === 'success' ? 'green' : (type === 'error' ? 'red' : 'blue') }}
          />
          <p className="text-center mb-4">{message}</p>
          {type === 'email' && (
            <div>
              <input 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[30px] border border-gray-300 rounded-sm outline px-2"
              />
              <div className="flex justify-center">
                  <button onClick={onSubmitEmail} className="mt-4 bg-blue-500 text-white rounded-md py-2 px-4">Buy</button>
              </div>
            </div>
          )}
          <div>
              <button onClick={onClose} className="mt-4 px-4 py-2 rounded bg-gray-500 text-white hover:bg-gray-700">Close</button>
          </div>
        </div>
      </div>
    );
};

export default SuccessModal;
