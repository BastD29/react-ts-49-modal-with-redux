// ./store/action.ts

import { ModalMeta } from '../typings/modal';

export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';

export type ModalOpenAction = {
  readonly type: typeof MODAL_OPEN;
  readonly payload: {
    modalFileName: string;
    meta: ModalMeta;
  };
};

export type ModalCloseAction = {
  readonly type: typeof MODAL_CLOSE;
  readonly payload: {
    modalFileName: string;
  };
};

export function openModal(
  modalFileName: string,
  meta: ModalMeta
): ModalOpenAction {
  return {
    type: MODAL_OPEN,
    payload: {
      modalFileName,
      meta
    }
  };
}

export function closeModal(modalFileName: string): ModalCloseAction {
  return {
    type: MODAL_CLOSE,
    payload: { modalFileName }
  };
}
