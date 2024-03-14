import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from '../../store/action';
import { UIState } from '../../store/reducer';
import { isModalOpen } from '../../store/selector';
import { ModalMeta } from '../../typings/modal';

export function useModal(modalFileName: string) {
  const dispatch = useDispatch();

  const onOpen = useCallback(
    (meta: ModalMeta) => dispatch(openModal(modalFileName, meta)),
    [modalFileName]
  );
  const onClose = useCallback(
    () => dispatch(closeModal(modalFileName)),
    [modalFileName]
  );

  const isOpen = useSelector<UIState>((state) =>
    isModalOpen(state, modalFileName)
  );

  return {
    isOpen,
    onOpen,
    onClose
  };
}
