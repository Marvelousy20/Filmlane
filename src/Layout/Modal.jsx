const SuccessModal = ({ isOpen, onClose, message }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content max-w-sm flex flex-col justify-center items-center h-[200px]">
          <p>{message}</p>
        </div>
      </div>
    );
  };
  
  export default SuccessModal;