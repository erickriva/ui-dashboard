import React from "react";
import Modal from "../Modal";

interface Props {
  isLoading: boolean;
}
const LoadingModal: React.FC<Props> = ({ isLoading }) => {
  return (
    <Modal show={isLoading}>
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#ffffff",
        }}
      >
        Cargando...
      </div>
    </Modal>
  );
};

export default LoadingModal;
