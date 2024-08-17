import React from "react";

import OrganisorCard from "~/components/organiser/card";
import { api } from "~/utils/api";

const OrganiserDashboard = () => {
  const { data: events } = api.event.getAllEventsForOrganiser.useQuery();

  return (
    <div className="container mx-auto bg-gray-400 p-4">
      {events && events.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {events.map((event, idx) => (
            <OrganisorCard key={idx} event={event} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No events available.</p>
      )}
    </div>
  );
};

export default OrganiserDashboard;
