import Image from "next/image";
import React from "react";

import { Card, CardContent } from "~/components/ui/card";
import { AvatarGroup } from "~/components/ui/custom/avatar-group";

import styles from "./styles.module.css";

interface EventCardProps {
  title: string;
  venue: string | null;
  fromDate: string;
  toDate: string;
  registrations: number;
}

const EventCard = ({
  title,
  venue,
  fromDate,
  toDate,
  registrations,
}: EventCardProps) => {
  return (
    <Card className={`${styles.card} h-[345px] w-[275px] pb-4 sm:px-0`}>
      <CardContent className="h-full w-full p-2">
        <div className="relative mb-2 h-[50%] w-full">
          <Image src="/images/ui/event-fallback.png" fill alt="title" />
        </div>
        <div className="mb-4 flex items-center justify-between text-ellipsis">
          <h1 className="font-inter my-4 max-w-[60%] overflow-hidden  text-ellipsis whitespace-nowrap text-xl font-bold">
            {title}
          </h1>
          <div className="mt-2 flex flex-col items-center gap-y-1">
            <AvatarGroup images={[]} />
            {registrations > 100 ? (
              <h1 className=" font-inter text-[10px] font-bold">100+ teams</h1>
            ) : (
              <h1 className=" font-inter text-[10px] font-bold">
                {registrations} teams
              </h1>
            )}
          </div>
        </div>
        <h3 className="font-inter mb-4 text-sm font-bold">
          {fromDate.toString()} - {toDate.toString()}
        </h3>
        <h3 className="font-inter text-sm font-bold">{venue}</h3>
      </CardContent>
    </Card>
  );
};
export default EventCard;
