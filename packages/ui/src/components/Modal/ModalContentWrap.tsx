interface IModalContentWrapProps {
  children: React.ReactNode;
}

const ModalContentWrap = ({ children }: IModalContentWrapProps) => {
  return (
    <section
      role="dialog"
      className="ui-bg-modal-content ui-p-8 ui-rounded-xl ui-z-[1]"
    >
      {children}
    </section>
  );
};

export default ModalContentWrap;

export type { IModalContentWrapProps };