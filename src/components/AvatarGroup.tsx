import React from "react";
import AvatarCustom from "./avatar";

interface ImageProps {
  height: number;
  width: number;
  urls: string[];
  className: string;
}

const AvatarGroup = ({ height, width, urls, className }: ImageProps) => {
  return (
    <div className="relative h-[20px] w-[40px]">
      {urls.map((url, index) => (
        <AvatarCustom
          key={index}
          height={height}
          width={width}
          className={`absolute left-${index * 3} z-${50 - index * 10} ${className}`}
        />
      ))}
    </div>
  );
};
export default AvatarGroup;
