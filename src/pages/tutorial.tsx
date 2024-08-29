import React from "react";
import { useState } from "react";

import Git from "~/components/tutorials/FOP/git";
import Hosting from "~/components/tutorials/FOP/hosting";
import Project from "~/components/tutorials/FOP/project";
import Setup from "~/components/tutorials/FOP/setup";
import SideBar from "~/components/tutorials/FOP/sideBar";

export default function Tutorials() {
  const [sideBarVisiblity, setSideBarVisiblity] = useState<boolean>(true);
  const [setupVisiblity, setSetupVisiblity] = useState<boolean>(true);
  const [projectVisiblity, setProjectVisiblity] = useState<boolean>(false);
  const [gitVisiblity, setgitVisiblity] = useState<boolean>(false);
  const [hostingVisibility, setHostingVisibility] = useState<boolean>(false);

  function close() {
    setSideBarVisiblity((prev) => !prev);
  }
  return (
    <div className={sideBarVisiblity ? `p-4` : `flex p-6 py-4 `}>
      {!sideBarVisiblity && (
        <button
          onClick={close}
          className="fixed z-40 bg-slate-800 p-3 text-white sm:w-[0px] md:w-fit"
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
      <div className="w-full justify-evenly gap-64 sm:inline md:flex ">
        {sideBarVisiblity && (
          <div>
            {sideBarVisiblity && (
              <div
                className={
                  "fixed left-2 h-full bg-gray-800 p-4 sm:z-50 sm:w-[100vw] md:top-24 md:w-64 "
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
