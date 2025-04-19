import { useCallback, useState } from 'react';

import Modal from '@/components/Modal';

interface IFireModalProps<T> {
  type: 'close' | 'confirm' | 'cancel';
  value?: T;
  e?: Event;
  action?: 'escape' | 'overlay';
}

export default function useModal<T = any>() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resolve, setResolve] =
    useState<(event: IFireModalProps<T> | null) => void>();

  const handleModalOpen = useCallback(() => {
    setIsModalOpen(true);
    return new Promise<T | null>(res => setResolve(() => res));
  }, []);

  const handleModalClose = useCallback(
    (event: IFireModalProps<T>) => {
      setIsModalOpen(false);
      if (resolve) {
        resolve(event);
      }
    },
    [resolve],
  );

  return {
    isModalOpen,
    handleModalOpen,
    handleModalClose,
    ModalWrap: ({ children }: { children: React.ReactNode }) =>
      isModalOpen ? (
        <Modal<T> onClose={handleModalClose}>{children}</Modal>
      ) : null,
  };
}

export type { IFireModalProps };
