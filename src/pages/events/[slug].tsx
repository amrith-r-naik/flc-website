"use client";

import { Button } from "@radix-ui/themes";
import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

import AvatarCustom from "~/components/avatar";
import Loader from "~/components/loader";
import CopyBtn from "~/components/utils/copyBtn";
import { api } from "~/utils/api";

import NotFound from "../404";
import TeamDialog from "./team";

const EventsSlug: NextPage = () => {
  const isAFLCMember = api.user.isAFLCMember.useQuery().data;
  const router = useRouter();
  const id = Array.isArray(router.query.slug)
    ? router.query.slug[0]
    : router.query.slug;

  const path = usePathname();
  const url = `http://localhost:3000/events/${path}`;
  console.log(path);
  console.log(id);

  const {
    data: event,
    isLoading,
    status,
  } = api.event.getEventById.useQuery({
    eventId: parseInt(id!),
  });

  if (isLoading || status === "pending") {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (status === "error") {
    return <NotFound />;
  }
  const fromDate = new Date(event.fromDate);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const formattedDate = fromDate.toLocaleString("en-US", options);

  return (
    <main className=" mb-1 mt-16 flex w-[100%] flex-col items-center justify-start space-y-4 font-sans">
      <section className="intro-card  relative flex w-[90%]  flex-col overflow-hidden rounded-2xl border border-border bg-accent sm:flex-row md:w-[85%] lg:w-[75%] xl:w-[60%] ">
        <div className="flex    shrink justify-start overflow-hidden">
          <Image
            className="z-50 w-full rounded-t-3xl sm:w-[300px] sm:rounded-s-3xl sm:rounded-tr-none lg:w-[400px]"
            src={event.imgSrc ?? "/assets/image.png"}
            alt="event"
            width={300}
            height={5}
          />
        </div>
        <div className="flex-1 space-y-4  p-8">
          <p className="events-heading text-5xl  font-bold md:text-6xl">
            {event?.name}{" "}
          </p>

          <p className="text-base font-medium sm:text-lg">
            Date: {formattedDate}
          </p>

          <p className="text-base font-medium">Venue : {event.venue}</p>
          <p className="text-sm font-medium sm:text-base">
            Organisers :{" "}
            {event.Organiser?.map((organiser) => organiser.User.name).join(
              ", ",
            )}
          </p>

          <div className="mt-4 flex items-center gap-8">
            {!isAFLCMember?.status && (
              <p className="text-lg font-bold">
                Entry fee: Rs
                {event.amount > 0 ? ` ${event.amount}/-` : " FREE"}{" "}
              </p>
            )}

            {isAFLCMember !== undefined && (
              <TeamDialog
                eventId={event.id}
                maxTeamSize={event.maxTeamSize}
                isAFLCMember={isAFLCMember.status}
                amount={event.amount}
                eventName={event.name}
                userId={isAFLCMember.userId}
              />
            )}
          </div>
        </div>
        <Image
          src="/card_bottom.png"
          alt=""
          height={50}
          width={50}
          className="absolute bottom-0 left-0 right-0 top-auto w-[100%] opacity-50"
        />
      </section>

      <section className="intro-card relative mx-auto flex w-[90%] flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-accent p-8 sm:flex-row md:w-[85%]  lg:w-[75%]  xl:w-[60%]">
        <div className="space-y-4 " style={{ flex: 2 }}>
          <h1 className="text-3xl font-bold ">Description</h1>
          {/* <p>{event.description}</p> */}
          <p className="font-extralight">{event.description}</p>
        </div>
        <div className="b" style={{ flex: 1 }}>
          <h1 className="text-xl font-medium">
            {event.teamCount > 0
              ? `Registered (${event.teamCount})`
              : "Register Now!"}
          </h1>
          <div className="relative px-2 pb-6 pt-2">
            {event.selectedImages?.map((image: any, index) => (
              <AvatarCustom
                key={index}
                height={40}
                width={40}
                src={image!}
                className={`absolute left-${index * 3} z-${0 + index * 10}`}
              />
            ))}
          </div>
          <h1 className="mb-2 mt-8 text-xl font-medium">Share with a friend</h1>
          <div className="flex gap-2 ">
            <input
              className="card-attributes flex-1 rounded-lg p-1.5 text-xs"
              type="text"
              value={url}
              disabled
            />
            <CopyBtn value={url} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventsSlug;
