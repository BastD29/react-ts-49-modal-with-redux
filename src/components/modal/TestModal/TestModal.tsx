// ./components/modal/TestModal/TestModal.tsx

import { BaseModal } from '../BaseModal';

export interface ITestModalProps {
  onClose?: () => void;
}

export default function TestModal(props: ITestModalProps) {
  return (
    <BaseModal title="Test Modal" show closeOnTap onClose={props.onClose}>
      <p>I'm a test modal window, so why don't you click me?</p>
    </BaseModal>
  );
}
