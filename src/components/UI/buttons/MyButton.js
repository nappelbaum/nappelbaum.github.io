import React from "react";

const MyButton = React.forwardRef(({ children, ...props }, ref) => (
  <button ref={ref} {...props}>
    {children}
  </button>
));

export default MyButton;
