import { useTheme } from "next-themes";
import React, { useState, type FunctionComponent } from "react";

const SunMoonToggle: FunctionComponent = () => {
  const { theme, systemTheme, setTheme } = useTheme();

  const [isDay, setIsDay] = useState(
    theme === "light" || (theme === "system" && systemTheme === "light"),
  );

  return (
    <div>
      <div
        className={`relative h-[16em] w-[30em] rounded-full text-[12%] transition-all duration-500 ease-in-out ${
          isDay ? "bg-[#FFBF71]" : "bg-[#423966]"
        }`}
        onClick={() => {
          setIsDay(!isDay);
          setTheme(isDay ? "dark" : "light");
        }}
      >
        <div
          className={`absolute block rounded-full transition-all duration-400 ease-in-out ${
            isDay
              ? "left-[18em] top-[4.5em] size-[7em] rotate-0 bg-white shadow-toggle-sun"
              : "left-[3em] top-[3em] size-[10em] -rotate-75 bg-[#423966] shadow-toggle-moon"
          }`}
        />
      </div>
    </div>
  );
};

export default SunMoonToggle;
