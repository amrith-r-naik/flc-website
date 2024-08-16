import { useTheme } from "next-themes";
import React, { useRef, type FunctionComponent } from "react";

const SunMoonToggle: FunctionComponent = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const tddnRef = useRef<HTMLDivElement>(null);
  const moonRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <style jsx>{`
        .light {
          background: #fff;
          color: #d43370;
        }
        .tdnn {
          margin: 0 auto;
          font-size: 30%;
          margin-top: 10em;
          position: relative;
          height: 16em;
          width: 30em;
          border-radius: 16em;
          transition: all 500ms ease-in-out;
          background: #423966;
        }
        .day {
          background: #ffbf71;
        }
        .moon {
          position: absolute;
          display: block;
          border-radius: 50%;
          transition: all 400ms ease-in-out;

          top: 3em;
          left: 3em;
          transform: rotate(-75deg);
          width: 10em;
          height: 10em;
          background: #423966;
          box-shadow:
            3em 2.5em 0 0em #d9fbff inset,
            rgba(255, 255, 255, 0.1) 0em -7em 0 -4.5em,
            rgba(255, 255, 255, 0.1) 3em 7em 0 -4.5em,
            rgba(255, 255, 255, 0.1) 2em 13em 0 -4em,
            rgba(255, 255, 255, 0.1) 6em 2em 0 -4.1em,
            rgba(255, 255, 255, 0.1) 8em 8em 0 -4.5em,
            rgba(255, 255, 255, 0.1) 6em 13em 0 -4.5em,
            rgba(255, 255, 255, 0.1) -4em 7em 0 -4.5em,
            rgba(255, 255, 255, 0.1) -1em 10em 0 -4.5em;
        }
        .sun {
          top: 4.5em;
          left: 18em;
          transform: rotate(0deg);
          width: 7em;
          height: 7em;
          background: #fff;
          box-shadow:
            3em 3em 0 5em #fff inset,
            0 -5em 0 -2.7em #fff,
            3.5em -3.5em 0 -3em #fff,
            5em 0 0 -2.7em #fff,
            3.5em 3.5em 0 -3em #fff,
            0 5em 0 -2.7em #fff,
            -3.5em 3.5em 0 -3em #fff,
            -5em 0 0 -2.7em #fff,
            -3.5em -3.5em 0 -3em #fff;
        }
      `}</style>
      <div
        ref={tddnRef}
        className={`tddn`}
        style={{
          backgroundColor: resolvedTheme === "dark" ? "#423966" : "#9ee3fb",
        }}
        onClick={() => {
          setTheme(resolvedTheme === "light" ? "dark" : "light");
          if (moonRef.current) moonRef.current.classList.toggle("sun");
          if (tddnRef.current) tddnRef.current.classList.toggle("day");
        }}
      >
        <div ref={moonRef} className={`moon`} />
      </div>
    </>
  );
};

export default SunMoonToggle;
