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
    <div>
      <div className="flex w-full justify-evenly gap-16 ">
        {!sideBarVisiblity && <button onClick={close}>open</button>}
        {sideBarVisiblity && (
          <div>
            {sideBarVisiblity && (
              <SideBar
                visibility={setSideBarVisiblity}
                setupVisiblity={setSetupVisiblity}
                projectVisiblity={setProjectVisiblity}
                gitVisiblity={setgitVisiblity}
                hostingVisibility={setHostingVisibility}
              ></SideBar>
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
