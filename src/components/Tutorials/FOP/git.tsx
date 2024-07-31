import React, { useState } from "react";

export default function Git() {
    const [guiMode,setGuiMode]=useState<boolean>(true)
  return (
    <div className="w-full bg-green-200 p-2 text-black">
      {" "}
      <h2 className="mb-3 flex justify-between">
        <div>3. Git</div>{" "}
        <div
          onClick={() => setGuiMode((prev) => !prev)}
          className={`h-fit cursor-pointer rounded-md p-2 text-sm text-white ${guiMode ? "bg-green-500" : "bg-black"}`}
        >
          {guiMode ? "use GUI" : "use CLI (from terminal)"}
        </div>
        <div className="right-0 inline  w-fit text-sm">
          {" "}
          <div>time:30-40 mins</div>
          <div>data: 300mbs </div>
        </div>
      </h2>
      {!guiMode&&(<iframe
        src="https://scribehow.com/embed/Search_for_potato_image_on_Google___aqFBaY9TZClvyVasLOv1g"
        width="100%"
        height="640"
        allowFullScreen
        // frameBorder="0"
      ></iframe>)}
      <div className="h-fit w-full bg-slate-200">
        In this section we will be seting up Tools which will come in handy to
        finish the Projects.
        <div className="List text m-3 rounded-md bg-slate-300 p-2 p-3 ">
          <div>
            <ul className="ml-3 list-disc">
              <li>VS Code *</li>
              <li>Git Bash (optional)</li>
            </ul>
          </div>
        </div>
        <div className="VScode text m-3 rounded-md bg-slate-300 p-2 p-3 ">
          <div>VS Code (~200 mbs)</div>

          <div>
            Download :{" "}
            <a
              href="http://https://code.visualstudio.com/download"
              className="underline"
            >
              https://code.visualstudio.com/download
            </a>{" "}
            <br />
            Installation:{" "}
            <a
              href="https://youtu.be/bN6DE-4uFNo?si=dUCQyvgTXiuBMBUJ"
              className="underline"
            >
              https://youtu.be/bN6DE-4uFNo?si=dUCQyvgTXiuBMBUJ
            </a>{" "}
            <br />
          </div>
        </div>
        <div className="GitBash text m-3 rounded-md bg-slate-300 p-2 p-3 ">
          <div>Git-Bash (~70 mbs)</div>

          <div>
            Download :{" "}
            <a href="https://git-scm.com/downloads" className="underline">
              https://git-scm.com/downloads
            </a>{" "}
            <br />
            Installation:{" "}
            <a
              href="https://youtu.be/qkbK31dMNfM?si=tukcZHQd6u_kLB4Z"
              className="underline"
            >
              https://youtu.be/qkbK31dMNfM?si=tukcZHQd6u_kLB4Z
            </a>{" "}
            <br />
          </div>
        </div>
        <div className="Note p-3">
          <div className="text-red-800  ">Note</div>

          <div className="text ml-3 rounded-md bg-slate-300 p-2 ">
            When it comes to installing softwares in general, Keep these points
            in mind <br />
            1. Download the softwares from official source. <br />
            2. Try reading & understanding the installation steps.
            <br />
            3. after installation put the installation-path in{" "}
            <i>
              {" "}
              <a
                href="https://youtu.be/KjZ3IakXzFA?si=LdEahbf6m5f2DEM1"
                className="underline"
              >
                {" "}
                *environment variables of system*
              </a>
            </i>
            <div className="m-3 text-center text-sm">
              Will come in handy if u want to practice C/C++, Java Or Python in
              future :){" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}