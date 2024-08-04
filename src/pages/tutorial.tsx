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
    <div className={sideBarVisiblity ? `p-4` : `px-6 `}>
      {!sideBarVisiblity && (
        <button onClick={close} className="text-white">
          open
        </button>
      )}
      <div className="flex w-full justify-evenly gap-64 ">
        {sideBarVisiblity && (
          <div>
            {sideBarVisiblity && (
              <div className="fixed left-0 top-12 h-full w-64 bg-gray-800 p-4">
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
