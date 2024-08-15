import React from "react";

import { Button } from "~/components/ui/button";
import { Input, type InputProps } from "~/components/ui/input";

import { cn } from "~/lib/utils";

interface InputButtonProps extends InputProps {
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  onButtonBlur?: React.FocusEventHandler<HTMLButtonElement>;
}

const InputButton = React.forwardRef<HTMLInputElement, InputButtonProps>(
  ({ className, children, onButtonClick, onButtonBlur, ...props }, ref) => {
    return (
      <div className="relative">
        <Input ref={ref} {...props} className={cn(className, "pr-10")} />
        <Button
          variant={"ghost"}
          className={"absolute right-0 top-0 px-2"}
          onClick={onButtonClick}
          onBlur={onButtonBlur}
        >
          {children}
        </Button>
      </div>
    );
  },
);
InputButton.displayName = "InputButton";

export default InputButton;
