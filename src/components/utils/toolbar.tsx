import React, { type ReactNode, type FunctionComponent } from "react";

import { cn } from "~/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

const ToolBar: FunctionComponent<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "absolute bottom-4 right-4 flex flex-wrap justify-center gap-6 pt-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default ToolBar;
