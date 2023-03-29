import React, { forwardRef } from "react";

interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({ as, children, ...rest }, ref) => {
  const Component = as;

  return <Component ref={ref} {...rest}>{children}</Component>
});

Heading.displayName = 'Heading';

export default Heading;