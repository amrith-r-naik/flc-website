import React, {
  type ReactNode,
  useRef,
  type FunctionComponent,
  useEffect,
  forwardRef,
} from "react";

import { cn } from "~/lib/utils";

const RadialCardWrapper: FunctionComponent<{
  className?: string;
  children: ReactNode;
}> = ({ className, children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    wrapperRef.current.addEventListener("mousemove", (e) => {
      if (!wrapperRef.current) return;
      for (const card of wrapperRef.current.childNodes) {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty("--mouse-x", x + "px");
        (card as HTMLElement).style.setProperty("--mouse-y", y + "px");
      }
    });
  });

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
};

const RadialCard = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children: ReactNode;
    withGlow?: boolean;
  }
>(({ children, className, withGlow = false, ...props }, ref) => {
  return (
    <>
      <style jsx>{`
        .radialCard {
          background: radial-gradient(
              50% 70.31% at 50% 0%,
              rgba(126, 61, 255, 0.16) 0%,
              rgba(126, 61, 255, 0) 100%
            ),
            rgba(11, 1, 29, 0.8);
        }

        .radialCard:before {
          background: linear-gradient(
              105.43deg,
              rgba(168, 128, 255, 0) 25.1%,
              rgba(168, 128, 255, 0.32) 72.57%,
              rgba(168, 128, 255, 0) 102.57%
            ),
            linear-gradient(
              0deg,
              rgba(255, 255, 255, 0.1),
              rgba(255, 255, 255, 0.1)
            );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        .radialCard::after {
          background: radial-gradient(
            600px circle at var(--mouse-x) var(--mouse-y),
            rgba(255, 255, 255, 0.1),
            transparent 40%
          );
        }
      `}</style>
      <div
        ref={ref}
        {...props}
        className={cn(
          className,
          "radialCard",
          withGlow &&
            "before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-10 before:box-border before:size-full before:content-normal before:rounded-[15px] before:p-px before:opacity-60 before:transition-opacity before:duration-500 after:absolute after:left-0 after:top-0 after:z-10 after:size-full after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:contain-none hover:before:opacity-100 hover:after:opacity-100",
        )}
      >
        {children}
      </div>
    </>
  );
});
RadialCard.displayName = "RadialCard";

export { RadialCardWrapper, RadialCard };
