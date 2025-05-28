import Box, { type BoxProps } from "../Box";

export type TextProps<T extends React.ElementType = "span"> = BoxProps<T>;

const Text = <T extends React.ElementType = "span">({
  children,
  as,
}: TextProps<T>) => {
  return <Box as={as || "span"}>{children}</Box>;
};

export default Text;
