import React from 'react';

export type BoxProps<T extends React.ElementType = 'div'> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

const Box = React.forwardRef(
  <T extends React.ElementType = 'div'>(
    { as, className, children, ...rest }: BoxProps<T>,
    ref: React.Ref<any>
  ) => {
    const Component = as || 'div';
    return (
      <Component className={className} ref={ref} {...rest}>
        {children}
      </Component>
    );
  }
);

export default Box;
