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
    <div className="p-2 p-3 sm:w-[0px] md:w-fit  ">
      <button onClick={close}>close</button>
      <div className="eh w-[200px] cursor-pointer px-2 pt-6" onClick={openSetup}>
        Setup
      </div>
      <div className="he w-[200px] cursor-pointer  px-2 " onClick={openProject}>
        Project
      </div>
      <div className="ws w-[200px] cursor-pointer px-2" onClick={openGit}>
        Git-Github
      </div>
      <div className="sdf w-[200px] cursor-pointer px-2" onClick={OpenHosting}>
        Hosting
      </div>
    </div>
  );
}
