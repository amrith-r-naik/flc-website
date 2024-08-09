import React from 'react'
import { useState } from 'react';
export default function SideBar({
  visibility,
  setupVisiblity,
  projectVisiblity,
  gitVisiblity,
  hostingVisibility,
}: {
  visibility: React.Dispatch<React.SetStateAction<boolean>>;
  setupVisiblity: React.Dispatch<React.SetStateAction<boolean>>;
  projectVisiblity: React.Dispatch<React.SetStateAction<boolean>>;
  gitVisiblity: React.Dispatch<React.SetStateAction<boolean>>;
  hostingVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  function close() {
    visibility((prev) => !prev);
  }

  function openSetup() {
    setupVisiblity(true);
    projectVisiblity(false);
    gitVisiblity(false);
    hostingVisibility(false);
  }

   function openProject() {
     setupVisiblity(false);
     projectVisiblity(true);
     gitVisiblity(false);
     hostingVisibility(false);
   }

    function openGit() {
      setupVisiblity(false);
      projectVisiblity(false);
      gitVisiblity(true);
      hostingVisibility(false);
    }

     function OpenHosting() {
       setupVisiblity(false);
       projectVisiblity(false);
       gitVisiblity(false);
       hostingVisibility(true);
     }

  return (
    <div className="sticky  px-4 w-fit">
      <div className="leading-8">
        <button onClick={close} className="text-right text-white">
          <svg
            className="text-white-800 h-6 w-6 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
            />
          </svg>
        </button>
        <div
          className="eh w-[200px] cursor-pointer px-2 pt-6"
          onClick={openSetup}
        >
          Setup
        </div>
        <div
          className="he w-[200px] cursor-pointer  px-2 "
          onClick={openProject}
        >
          Project
        </div>
        <div className="ws w-[200px] cursor-pointer px-2" onClick={openGit}>
          Git-Github
        </div>
        <div
          className="sdf w-[200px] cursor-pointer px-2"
          onClick={OpenHosting}
        >
          Hosting
        </div>
      </div>
    </div>
  );
}
