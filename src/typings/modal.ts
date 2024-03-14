// ./typings/modal.ts
export interface ModalMeta {
  [name: string]: any;
}

export type Modal = {
  id: string;
  open: boolean;
  meta?: ModalMeta;
};

export type ModalMap = {
  [id: string]: Modal;
};
