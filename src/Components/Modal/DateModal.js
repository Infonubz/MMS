import React from "react";
import "./DateModal.css";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {/* <button className="close-button" onClick={onClose}>
          &times;
        </button> */}
        {children}
      </div>
    </div>
  );
}
