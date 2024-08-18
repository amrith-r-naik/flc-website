import Image from "next/image";
import React, { forwardRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

import { RadialCard } from "~/components/utils/radialCard";
import { cn } from "~/lib/utils";
import { type User, useUser } from "~/store";

const RightPanel = forwardRef<HTMLDivElement, { className?: string }>(
  ({ className }, ref) => {
    const { user } = useUser();
    if (!user) return null;
    return <InnerRightPanel ref={ref} className={className} user={user} />;
  },
);
RightPanel.displayName = "RightPanel";

const InnerRightPanel = forwardRef<
  HTMLDivElement,
  { className?: string; user: User }
>(({ className, user }, ref) => {
  const images = user.Certificate.reduce(
    (acc, certificate) => [...acc, certificate.id],
    [] as string[],
  );

  return (
    <RadialCard
      ref={ref}
      className={cn(
        className,
        "flex h-full flex-col justify-between gap-5 overflow-auto rounded-lg border-2 border-border bg-card p-10",
      )}
    >
      <div className="flex flex-col gap-5 first:*:*:opacity-60">
        <div>
          <p>Year & Branch</p>
          <p>
            {user.year} - {user?.Branch.name}
          </p>
        </div>
        <div>
          <p>Activity Point</p>
          <p>{user.totalActivityPoints}</p>
        </div>
        <div>
          <p>Attendance</p>
          <p>{0}%</p>
        </div>
      </div>
      <div className="flex h-1/3 flex-col items-center rounded-lg border-2 p-5">
        <p className="text-lg font-bold">Bio</p>
        <p>{user.bio}</p>
      </div>
      <div className="flex h-1/3 flex-col items-center gap-5 rounded-lg border-2 p-5">
        <p className="text-lg font-bold">Certificates</p>
        {images.length > 0 ? (
          <Carousel>
            <CarouselContent>
              {images.map((image, idx) => (
                <CarouselItem key={idx}>
                  <Image src={image} alt={image} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : (
          <p className="my-auto opacity-60">No Events registered</p>
        )}
      </div>
    </RadialCard>
  );
});
InnerRightPanel.displayName = "InnerRightPanel";

export default RightPanel;
