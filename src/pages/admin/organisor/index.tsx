import React from "react";
import OrganisorCard from "~/components/organisor/organisorcard";



const Dashboard = () => {
  return (
    <div className="container mx-auto bg-gray-400 p-4">
      {dummyEvents.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <OrganisorCard events={dummyEvents} />
        </div>
      ) : (
        <p className="text-center text-gray-600">No events available.</p>
      )}
    </div>
  );
};

export default Dashboard;

const dummyEvents = [
  {
    id: 1,
    name: "Tech Conference 2024",
    imgSrc: "https://via.placeholder.com/150",
    description: "A conference focusing on the latest in technology.",
    venue: "Tech Hall, San Francisco",
    eventType: "Conference",
    category: "Technology",
    fromDate: "2024-09-01T09:00:00Z",
    toDate: "2024-09-03T17:00:00Z",
    deadline: "2024-08-20T23:59:59Z",
    maxTeams: 10,
    minTeamSize: 2,
    maxTeamSize: 5,
    amount: 150,
    state: "LIVE",
    isLegacy: false,
  },
  {
    id: 2,
    name: "Marketing Summit 2024",
    imgSrc: "https://via.placeholder.com/150",
    description: "An event dedicated to marketing strategies and trends.",
    venue: "Marketing Center, New York",
    eventType: "Summit",
    category: "Marketing",
    fromDate: "2024-10-15T09:00:00Z",
    toDate: "2024-10-17T17:00:00Z",
    deadline: "2024-10-01T23:59:59Z",
    maxTeams: 8,
    minTeamSize: 1,
    maxTeamSize: 3,
    amount: 200,
    state: "PUBLISHED",
    isLegacy: true,
  },
  // Add more dummy events as needed
];
