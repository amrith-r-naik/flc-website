import React, { useEffect, type FunctionComponent } from "react";

const Background: FunctionComponent = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "/script.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <canvas className="bg-transparent" />;
};

export default Background;
