import React, { type HTMLAttributes } from 'react'
import { cn } from '~/utils/ui';

type Props = HTMLAttributes<HTMLButtonElement>;

function Button(props: Props) {
  return (
    <button  {...props} className={cn("rounded-full p-4 py-2 border cursor-pointer", props.className)}>
      {props.children}
    </button>
  )
}

export default Button