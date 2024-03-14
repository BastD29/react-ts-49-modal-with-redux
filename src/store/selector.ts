// ./store/selector.ts

import { ModalMeta } from '../typings/modal';
import type { UIState } from './reducer';

export const getOpenModalsList: (state: UIState) => string[] = (state) =>
  Object.keys(state.modal).filter((modalId) => state.modal[modalId].open);

export const isModalOpen: (state: UIState, id: string) => boolean = (
  state,
  id
) => state.modal[id]?.open ?? false;

export const getModalMeta: (
  state: UIState,
  id: string
) => ModalMeta | undefined = (state, id) => state.modal[id]?.meta;
