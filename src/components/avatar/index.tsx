import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const AvatarIcon = ({src}:{src:string}) => {
  return (
    <>
    <Avatar className=" size-10 ">
         <AvatarImage src={src} />
         <AvatarFallback>PP</AvatarFallback>
       </Avatar>
       </>
  )
}

export default AvatarIcon