import React from "react";
import ReactDOM from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  container: Element;
}

const Modal: React.FC<ModalProps> = ({ children, container }) => {
  return <div>{createPortal(children, container)}</div>;
  document.getElementById("modal");
};

export { Modal };
