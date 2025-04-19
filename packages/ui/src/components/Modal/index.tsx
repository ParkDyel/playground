// ModalWrapper.tsx

import { type ReactNode, useEffect } from 'react';

import { type IFireModalProps } from '@/hooks/useModal';

import Overlay from './ModalOverlay';
import Portal from './ModalPortal';

type ModalWrapperProps<T> = {
  children?: ReactNode;
  onClose: (event: IFireModalProps<T>) => void;
  parent?: HTMLElement;
};

export default function Modal<T>({
  children,
  onClose,
  parent,
}: ModalWrapperProps<T>) {
  const handleOverlayClick = () =>
    onClose({
      type: 'close',
      action: 'overlay',
    });

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose({
          type: 'close',
          action: 'escape',
        });
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <Portal parent={parent}>
      <Overlay onClose={handleOverlayClick} />
      {children}
    </Portal>
  );
}
