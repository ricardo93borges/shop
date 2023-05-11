import { ReactNode } from "react";

export interface ModalProps {
  content: ReactNode;
  close: Function;
}

export default function Modal({ content, close }: ModalProps) {
  return (
    <div className={`modal is-active`}>
      <div className="modal-background" onClick={() => close()}></div>
      <div className="modal-content">
        <div className="box">
          <div className="column">{content}</div>
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
