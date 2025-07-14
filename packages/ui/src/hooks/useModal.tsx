import { useCallback, useState } from 'react';

import Modal from '@/components/Modal';
import { AnimatePresence, motion } from "motion/react";

interface IFireModalProps<T> {
  type: 'close' | 'confirm' | 'cancel';
  value?: T;
  e?: Event;
  action?: 'escape' | 'overlay';
}

export type { IFireModalProps };

export default function useModal<T = any>() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resolve, setResolve] =
    useState<(event: IFireModalProps<T> | null) => void>();

  const handleModalOpen = useCallback(() => {
    setIsModalOpen(true);
    return new Promise<IFireModalProps<T>>(res => setResolve(() => res));
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
      <AnimatePresence>
        {isModalOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <Modal.Modal<T> onClose={handleModalClose}>{children}</Modal.Modal>
          </motion.div>
        ) : null}
      </AnimatePresence>,
  };
}