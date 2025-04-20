export interface IBoxProps<T extends React.ElementType> {
  children: React.ReactNode;
  as?: T;
  className?: string;
}

const Box = <T extends React.ElementType,>({ children, as, className }: IBoxProps<T>) => {
  const Component = as || 'div';
  return (
    <Component className={className}>
      {children}
    </Component>
  );
}

export default Box;