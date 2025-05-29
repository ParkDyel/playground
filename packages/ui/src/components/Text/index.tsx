import Box, { type BoxProps } from "../Box";

export type TextProps<T extends React.ElementType = "span"> = BoxProps<T>;

const Text = <T extends React.ElementType = "span">(props: TextProps<T>) => {
  const { as, children, className, ...rest } = props;

  return <Box as={as || "span"} className={className} {...rest}>{children}</Box>;
};

export default Text;
