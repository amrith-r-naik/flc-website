import React, { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    console.log("hello");
    const cursor = document.querySelector(".cursor");
    const cursor2 = document.querySelector(".cursor2");

    const handleMouseMove = (e: MouseEvent) => {
      cursor?.setAttribute(
        "style",
        `top: ${e.clientY}px; left: ${e.clientX}px;`,
      );
      cursor2?.setAttribute(
        "style",
        `top: ${e.clientY}px; left: ${e.clientX}px;`,
      );
    };

    const handleMouseEnter = () => {
      cursor?.classList.add("scale-up");
      cursor2?.classList.add("scale-down");
    };

    const handleMouseLeave = () => {
      cursor?.classList.remove("scale-up");
      cursor2?.classList.remove("scale-down");
    };

    const makeInvisible = () => {
      cursor?.classList.add("invisible");
      cursor2?.classList.add("invisible");
    };
    const makeVisible = () => {
      setTimeout(() => {
        cursor?.classList.remove("invisible");
        cursor2?.classList.remove("invisible");
      }, 200); // 200 milliseconds = 0.2 seconds
    };

    document.addEventListener("mousemove", handleMouseMove);

    const hoverableElements = document.querySelectorAll(".hoverable");
    const hoverInvisibleElements = document.querySelectorAll(
      ".hoverableInvisible",
    );

    hoverableElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    hoverInvisibleElements.forEach((element) => {
      element.addEventListener("mouseenter", makeInvisible);
      element.addEventListener("mouseleave", makeVisible);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      hoverableElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div>
      <style>
        {`
        * {
          cursor: none;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        h1 {
          font-family: Montserrat;
          font-size: 40px;
        }

        a {
          font-family: Montserrat;
          position: relative;
          text-decoration: none;
        }

        a:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          display: white;
          margin-top: 0px;
          left: 0%;
          transition: width .3s ease;
        }

        a:hover:after {
          width: 100%;
          left: 0%;
        }

        .cursor {
          width: 20px;
          height: 20px;
          border-radius: 100%;
          border: 0px solid white;
          transition: all 200ms ease-out;
          position: fixed;
          pointer-events: none;
          left: 0;
          top: 0;
          transform: translate(-50%, -50%);
        }

        .cursor2 {
          width: 20px;
          height: 20px;
          margin:auto;
          border-radius: 100%;
          background-color: white;
          opacity: .3;
          position: fixed;
          transform: translate(-50%, -50%);
          pointer-events: none;
          transition: width .3s, height .3s, opacity .3s;
        }

        .hover {
          background-color: red;
          opacity: 0.5;
        }

        .scale-up {
          transform: translate(-50%, -50%) scale(1);
          box-shadow: 0 0 20px 30px rgba(255, 255, 255, 0.5); /* Thicker shadow */

        }

        .scale-down {
          transform: translate(-50%, -50%) scale(0.5);

        }

        .cursorinnerhover {
          width: 50px;
          height: 50px;
          opacity: .5;
        }`}
      </style>

      <div className="cursor z-50"></div>
      <div className="cursor2 z-50"></div>
    </div>
  );
}
