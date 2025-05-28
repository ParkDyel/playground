import Box, { type BoxProps } from '@/components/Box';

import { cn } from '@repo/utils';

type ButtonProps<T extends React.ElementType = 'button'> = BoxProps<T> & {
  variant?: Variant;
};

const Button = <T extends React.ElementType = 'button'>(
  props: ButtonProps<T>,
) => {
  const { as, children, className, ...rest } = props;
  const Component = as || 'button';
  return (
    <Box as={Component} className={cn("ui-border-none ui-rounded-lg ui-px-3 ui-py-2 ui-flex ui-items-center ui-gap-2", {
      "ui-bg-primary-default": props.variant === 'primary',
      "ui-text-text-light": props.variant === 'primary',
    }, className)} {...rest}>
      {children}
    </Box>
  );
};

export default Button;
