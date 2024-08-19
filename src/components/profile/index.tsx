import React from "react";
import { type FunctionComponent, useRef } from "react";

import LeftBottomPanel from "~/components/profile/leftBottomPanel";
import LeftTopPanel from "~/components/profile/leftTopPanel";
import RightPanel from "~/components/profile/rightPanel";
import { RadialCardWrapper } from "~/components/utils/radialCard";

const Profile: FunctionComponent = () => {
  const leftTopPanelRef = useRef<HTMLDivElement>(null);
  const leftBottomPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  return (
    <main className="container my-10 mb-52 h-screen w-full">
      <RadialCardWrapper className="flex size-full flex-col gap-5 md:flex-row">
        <div className="flex w-1/2 flex-col gap-5">
          <LeftTopPanel ref={leftTopPanelRef} className="h-2/3" />
          <LeftBottomPanel ref={leftBottomPanelRef} className="h-1/3" />
        </div>
        <RightPanel ref={rightPanelRef} className="w-1/2" />
      </RadialCardWrapper>
    </main>
  );
};

export default Profile;
