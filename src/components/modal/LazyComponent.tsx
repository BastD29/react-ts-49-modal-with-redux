// ./components/modal/LazyComponent.tsx

import { Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ErrorBoundary from '../error-boundary/ErrorBoundary';
import { isModalOpen, getModalMeta } from '../../store/selector';
import { closeModal } from '../../store/action';
import { UIState } from '../../store/reducer';
import { ModalMeta } from '../../typings/modal';

interface ILazyComponentProps {
  filename: string;
}

export function LazyComponent({ filename }: ILazyComponentProps) {
  console.log(`loading ./${filename}/${filename}.tsx`);

  const dispatch = useDispatch();
  const isOpen = useSelector<UIState, boolean>((state) =>
    isModalOpen(state, filename)
  );
  const meta = useSelector<UIState, ModalMeta | undefined>((state) =>
    getModalMeta(state, filename)
  );

  const handleModalClose = () => {
    dispatch(closeModal(filename));
  };

  const Component = lazy(() => import(`./${filename}/${filename}.tsx`));

  return (
    <Suspense fallback={null}>
      <ErrorBoundary>
        {filename ? (
          <Component isOpen={isOpen} onClose={handleModalClose} {...meta} />
        ) : null}
      </ErrorBoundary>
    </Suspense>
  );
}
