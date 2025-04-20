import Box, { type IBoxProps } from "../Box";

export interface IButtonProps<T extends React.ElementType> extends IBoxProps<T> { }

const Button = <T extends React.ElementType>({ children, className }: IButtonProps<T>) => {
  return <Box as="button" className={className}>
    {children}
  </Box>;
};

export default Button;