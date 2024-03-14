// ./store/reducer.ts

import { ModalMap } from '../typings/modal';
import {
  ModalOpenAction,
  ModalCloseAction,
  MODAL_OPEN,
  MODAL_CLOSE
} from './action';

export const MODALS_DATA_MODEL_SAMPLE: ModalMap = {
  TestModal: {
    id: 'TestModal',
    open: true
  },
  LoginModal: {
    id: 'LoginModal',
    open: true,
    meta: {
      user: 'fedor'
    }
  }
};

type ModalAction = ModalOpenAction | ModalCloseAction;

export interface UIState {
  modal: ModalMap;
}

const initialState: UIState = {
  modal: {}
};

export default function (
  state: UIState = initialState,
  action: ModalAction
): UIState {
  switch (action.type) {
    case MODAL_OPEN: {
      const id = action.payload.modalFileName;
      const meta = action.payload.meta;
      return {
        ...state,
        modal: {
          ...state.modal,
          [id]: { id, meta, open: true }
        }
      };
    }

    case MODAL_CLOSE: {
      const id = action.payload.modalFileName;
      return {
        ...state,
        modal: {
          ...state.modal,
          [id]: { id, open: false }
        }
      };
    }

    default:
      return state;
  }
}
