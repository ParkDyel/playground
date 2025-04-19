import React from 'react';

interface ModalContentWrapProps {
  children: React.ReactNode;
}

const ModalContentWrap: React.FC<ModalContentWrapProps> = ({ children }) => {
  return (
    <div
      className="absolute top-1/2 left-1/2 z-[var(--z-index-modal)] w-fit transform -translate-x-1/2 -translate-y-1/2"
    >
      {children}
    </div>
  );
};

export default ModalContentWrap;
