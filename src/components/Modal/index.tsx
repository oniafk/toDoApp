import React from "react";
import ReactDOM from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  container: Element;
  openModal: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, container, openModal }) => {
  const modalClasses = ` ${!openModal ? "hidden" : ""}`;

  return (
    <div className={modalClasses}>{createPortal(children, container)}</div>
  );
};

export { Modal };
