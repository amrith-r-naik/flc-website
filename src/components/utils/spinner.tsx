import { cva, type VariantProps } from "class-variance-authority";
import React, { type FunctionComponent } from "react";
import { LuLoader2 } from "react-icons/lu";

import { cn } from "~/lib/utils";

const spinnerVariants = cva("animate-spin", {
  variants: {
    size: {
      "2xs": "text-xl",
      xs: "text-2xl",
      sm: "text-3xl",
      default: "text-4xl",
      lg: "text-5xl",
    },
    intent: {
      primary: "text-primary-500",
      secondary: "text-secondary-500",
      black: "text-black",
      white: "text-white",
    },
  },
  defaultVariants: {
    size: "default",
    intent: "primary",
  },
});

interface Props extends VariantProps<typeof spinnerVariants> {
  className?: string;
}

const Spinner: FunctionComponent<Props> = ({ size, intent, className }) => {
  return (
    <div className="z-[9999] flex size-fit flex-col items-center justify-center">
      <LuLoader2 className={cn(className, spinnerVariants({ size, intent }))} />
    </div>
  );
};

export default Spinner;
