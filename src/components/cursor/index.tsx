import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onTouchStart = () => {
      if (cursorRef.current) cursorRef.current.style.display = "none";
    };
    window.addEventListener("touchstart", onTouchStart);
    return () => window.removeEventListener("touchstart", onTouchStart);
  });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.top = `${e.clientY}px`;
      cursorRef.current.style.left = `${e.clientX}px`;
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  });

  useEffect(() => {
    const onMouseOver = (fontSize: number) => () => {
      if (!cursorRef.current) return;
      cursorRef.current.style.height = fontSize * 1.4 + "px";
      cursorRef.current.style.width = "3px";
      cursorRef.current.style.borderRadius = "2px";
      cursorRef.current.style.backgroundColor = "#008fff";
    };
    const onMouseOut = () => cursorRef.current?.removeAttribute("style");

    const textCursorNodes = Array.from(
      document.querySelectorAll(
        "h1, h2, h3, h4, h5, h6, p, dd, dt, figcaption, blockquote",
      ),
    );

    textCursorNodes.forEach((ele) => {
      ele.addEventListener(
        "mouseover",
        onMouseOver(
          parseInt(
            window
              .getComputedStyle(ele)
              .getPropertyValue("font-size")
              .replace("px", ""),
          ),
        ),
        {
          passive: true,
        },
      );
      ele.addEventListener("mouseout", onMouseOut, {
        passive: true,
      });
    });

    return () => {
      textCursorNodes.forEach((ele) => {
        ele.removeEventListener("mouseover", onMouseOver(0));
        ele.removeEventListener("mouseout", onMouseOut);
      });
    };
  });

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[99999] size-8 -translate-x-2/4 -translate-y-2/4 rounded-full bg-[#c8c8ff91] transition-all duration-100 ease-out"
    />
  );
};

export default Cursor;
