// /components/modal/BaseModal.tsx

import { memo, MouseEventHandler, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import './modal.css';

export interface IBaseModalProps {
  show: boolean;
  title: string;
  children: string | ReactNode;
  footer?: string | ReactNode;
  closeOnTap?: boolean;
  onClose?: () => void;
}

export const BaseModal = memo((props: IBaseModalProps) => {
  const { title, footer, closeOnTap, onClose, children } = props;

  const root = document.getElementById('root');

  if (!root) throw new Error('Root node not found. Can`t render modal.');

  const handleInsideClick: MouseEventHandler<HTMLDivElement> = (event) => {
    if (!closeOnTap) {
      event.stopPropagation();
    }
  };

  const handleOutsideClick: MouseEventHandler<HTMLDivElement> = (event) => {
    if (onClose) {
      onClose();
    }
  };

  return createPortal(
    <div
      className={classnames({
        Modal: true,
        'Modal-show': props.show
      })}
      onClick={handleOutsideClick}
    >
      <div className="Modal-panel" onClick={handleInsideClick}>
        <div>
          <h4 className="Modal-header">{title}</h4>
        </div>
        <div className="Modal-content">{children}</div>
        {footer && <div className="Modal-footer">{footer}</div>}
      </div>
    </div>,
    root
  );
});
