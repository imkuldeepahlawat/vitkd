import { forwardRef, ComponentProps } from "react";

const Button = forwardRef<
  HTMLButtonElement,
  ComponentProps<"button">
>(({ children, className, ...rest }, ref) => {
  return (
    <button
      ref={ref}
      className={className}
      {...rest}
    >
      {children}
    </button>
  );
});

export default Button;
