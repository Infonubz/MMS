import React from "react";
import "./TableModal.css";
import { RxCross2 } from "react-icons/rx";

const TablePopupModal = ({ show, onClose, children, closeicon, module }) => {
  if (!show) {
    return null;
  }


  return (
    <div className="modal-overlayn " onClick={onClose}>
      <div
        className={`modal-contentn`}
         onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-closen" onClick={onClose}>
            <RxCross2 color="white" size={"1.5vw"} />
          </button>
        {children}
      </div>
    </div>
  );
};

export default TablePopupModal;
