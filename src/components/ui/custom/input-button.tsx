import React from "react";

import { Input, type InputProps } from "~/components/ui/input";

import { cn } from "~/lib/utils";

const InputButton = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <Input ref={ref} {...props} className={cn(className, "pr-10")} />
        <div className="absolute right-0 top-0">{children}</div>
      </div>
    );
  },
);
InputButton.displayName = "InputButton";

export default InputButton;
