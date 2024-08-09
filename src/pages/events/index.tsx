"use client";

import React from "react";

import Card from "~/components/Card";
import CloudinaryUpload from "~/components/cloudinary/cloudinaryUpload";
import { uploadTypeEnum } from "~/components/cloudinary/cloudinaryUpload";
import EventCard from "~/components/eventCard";
import RadioButtons from "~/components/RadioButtons";
import { api } from "~/utils/api";

function page() {
  const { data: events, isLoading, error } = api.event.getAllEvents.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (events) {
    console.log(events);
  }
  if (error) {
    return <div>Error loading events</div>;
  }

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-gradient mt-8 text-7xl font-bold">Events</h1>
      </div>

      <div className="flex justify-center py-8 md:py-16">
        <RadioButtons />
      </div>
      <CloudinaryUpload
        uploadName="upload Event Image"
        eventId={1234}
        type={uploadTypeEnum.eventPicture}
      />

      <div className="mx-auto  grid max-w-7xl grid-cols-1 gap-10 px-5 md:grid-cols-2 xl:grid-cols-3">
        <EventCard data={{}} />
      </div>

      <div className="mx-2 mt-8 flex flex-wrap justify-center gap-20 md:mx-8">
        {events && events.length > 0 ? (
          <>
            {events.map((event, index) => (
              <Card key={index} event={event} />
            ))}
          </>
        ) : (
          <div>No events available</div>
        )}
      </div>
    </>
  );
}

export default page;
