import React, { useEffect, useRef } from "react";

import CursorClass from "~/components/cursor/Cursor";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    new CursorClass();
  });

  // useEffect(() => {
  //   const onMouseMove = (e: MouseEvent) => {
  //     if (!cursorRef.current) return;
  //     cursorRef.current.style.top = `${e.clientY}px`;
  //     cursorRef.current.style.left = `${e.clientX}px`;
  //   };

  //   window.addEventListener("mousemove", onMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //   };
  // });

  return (
    <>
      <style jsx>{`
        #cursor.is-locked {
          transition-property: width, height, left, top, border-radius;
        }

        #cursor.cursor--text {
          background: #008fff;
          width: 3px !important;
          border-radius: 2px !important;
        }
      `}</style>
      <div
        id="cursor"
        className="pointer-events-none absolute z-[99999] size-9 -translate-x-2/4 -translate-y-2/4 rounded-full bg-[#c8c8ff91] transition-all duration-100 ease-out"
      />
    </>
  );
};

export default Cursor;
