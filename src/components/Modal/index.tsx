import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  containerId: string; // Cambiado a string para el ID del contenedor
  openModal: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, containerId, openModal }) => {
  useEffect(() => {
    const containerElement = document.getElementById(containerId);

    if (containerElement) {
      // Modificar el estilo del contenedor según el valor de openModal
      containerElement.style.display = openModal ? "block" : "none";
    }

    // Limpieza: Restaurar el estilo al desmontar el componente
    return () => {
      if (containerElement) {
        containerElement.style.display = "block";
      }
    };
  }, [containerId, openModal]);

  // Verificar que containerElement no sea null antes de llamar a createPortal
  const containerElement = document.getElementById(containerId);
  return containerElement ? createPortal(children, containerElement) : null;
};

export { Modal };
