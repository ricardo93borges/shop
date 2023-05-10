import { ReactNode, useState } from "react";

export interface ModalProps {
  isActive: boolean;
  content: ReactNode;
}

export default function Modal(props: ModalProps) {
  const [isActive, setIsActive] = useState(props.isActive);

  function close() {
    setIsActive(false);
  }

  return (
    <div className={`modal ${isActive ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box">
          <div className="column">{props.content}</div>
          <div className="column is-2 is-offset-10">
            <button className="button is-info" onClick={() => close()}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
