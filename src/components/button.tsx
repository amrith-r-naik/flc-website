import React, { type HTMLAttributes } from "react";

import { cn } from "~/lib/utils";

type Props = HTMLAttributes<HTMLButtonElement>;

function Button(props: Props) {
  return (
    <button
      {...props}
      className={cn(
        "cursor-pointer rounded-full border p-4 py-2",
        props.className,
      )}
    >
      {props.children}
    </button>
  );
}

export default Button;
