import React from 'react';

export type BoxProps<T extends React.ElementType = 'div'> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

const Box = <T extends React.ElementType = 'div'>({
  as,
  className,
  children,
  ...rest
}: BoxProps<T>) => {
  const Component = as || 'div';
  return (
    <Component className={className} {...rest}>
      {children}
    </Component>
  );
};

export default Box;
