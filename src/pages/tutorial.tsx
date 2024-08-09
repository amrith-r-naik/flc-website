import React from 'react'
import SideBar from '~/components/Tutorials/FOP/sideBar'
import Setup from '~/components/Tutorials/FOP/setup'
import Git from '~/components/Tutorials/FOP/git';
import Hosting from '~/components/Tutorials/FOP/hosting';
import Project from '~/components/Tutorials/FOP/project';
import { useState } from 'react';

export default function Tutorials() {
  const [sideBarVisiblity, setSideBarVisiblity] = useState<boolean>(true);
  const [setupVisiblity, setSetupVisiblity] = useState<boolean>(true);
  const [projectVisiblity, setProjectVisiblity] = useState<boolean>(false);
  const [gitVisiblity, setgitVisiblity] = useState<boolean>(false);
  const [hostingVisibility, setHostingVisibility] = useState<boolean>(false);
  
  function close(){
    setSideBarVisiblity((prev)=> !prev);
  }
  return (
    <div className={sideBarVisiblity ? `p-4` : `flex p-6 py-4 `}>
      {!sideBarVisiblity && (
        <button
          onClick={close}
          className="fixed  bg-slate-800 p-3 text-white sm:w-[0px] md:w-fit"
        >
          <svg
            className="text-white-800 h-6 w-6 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 17 14"
          >
            <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z" />
          </svg>
        </button>
      )}
      <div className="md:flex sm:inline w-full justify-evenly gap-64   ">
        {sideBarVisiblity && (
          <div>
            {sideBarVisiblity && (
              <div
                className={
                  "fixed  left-2 md:top-24  h-full  bg-gray-800 p-4 sm:z-50 sm:w-[100vw] md:w-64  "
                }
              >
                <SideBar
                  visibility={setSideBarVisiblity}
                  setupVisiblity={setSetupVisiblity}
                  projectVisiblity={setProjectVisiblity}
                  gitVisiblity={setgitVisiblity}
                  hostingVisibility={setHostingVisibility}
                />
              </div>
            )}
          </div>
        )}

        {setupVisiblity && <Setup />}
        {projectVisiblity && <Project />}
        {gitVisiblity && <Git />}
        {hostingVisibility && <Hosting />}
      </div>
    </div>
  );
}
