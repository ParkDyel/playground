import Box, { type IBoxProps } from "../Box";

export interface ITextProps<T extends React.ElementType> extends IBoxProps<T> { }

const Text = <T extends React.ElementType,>({ children, as }: ITextProps<T>) => {
  return (
    <Box as={as || 'span'}>
      {children}
    </Box>
  );
};

export default Text;