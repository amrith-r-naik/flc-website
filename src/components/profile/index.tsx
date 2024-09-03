import React from "react";
import { type FunctionComponent, useRef } from "react";

import BottomPanel from "~/components/profile/bottomPanel";
import LeftTopPanel from "~/components/profile/leftTopPanel";
import RightTopPanel from "~/components/profile/rightTopPanel";
import { RadialCardWrapper } from "~/components/utils/radialCard";

const Profile: FunctionComponent<{ notMine?: boolean }> = ({
  notMine = false,
}) => {
  const leftTopPanelRef = useRef<HTMLDivElement>(null);
  const leftBottomPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  return (
    <main className="my-10 h-auto min-h-screen w-full p-3 md:container md:h-screen">
      <RadialCardWrapper className="flex size-full flex-col gap-5">
        <div className="flex h-2/3 w-full flex-col gap-5 md:flex-row">
          <LeftTopPanel
            ref={leftTopPanelRef}
            className="w-full border-2 border-white/10 md:w-1/2"
            notMine={notMine}
          />
          <RightTopPanel
            ref={rightPanelRef}
            className="w-full border-2 border-white/10 md:w-1/2"
            notMine={notMine}
          />
        </div>
        <BottomPanel
          ref={leftBottomPanelRef}
          className="h-1/3 w-full border-2 border-white/10"
          notMine={notMine}
        />
      </RadialCardWrapper>
    </main>
  );
};

export default Profile;
