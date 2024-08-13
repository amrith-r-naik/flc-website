import moment from "moment";
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "./calender.module.css";
<<<<<<< HEAD
import Background from "../events/ParticlesBackground";
=======
>>>>>>> 46bf7879e233a3ab81352da1b17f673c55e653ee

const localizer = momentLocalizer(moment);

const App = () => {
  const initialEvents = [
    {
      title: "hackfest",
      start: new Date(2024, 7, 10, 10, 0),
      end: new Date(2024, 7, 12, 11, 0),
    },
    {
      title: "techAdvent",
      start: new Date(2024, 7, 12, 15, 0),
      end: new Date(2024, 7, 12, 16, 0),
    },
    {
      title: "coding quiz",
      start: new Date(2024, 7, 14, 12, 0),
      end: new Date(2024, 7, 14, 13, 0),
    },
  ];

  const [events] = useState(initialEvents);

  return (
<<<<<<< HEAD
    <>
     <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: -1,
        }}
      >
        <Background />
      </div>
      <div style={{ height: "600px" }} className="bg-gradient-to-b">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ margin: "50px" }}
          selectable={true}
        />
      </div>
    </>
=======
    <div
      style={{ height: "600px" }}
      className="bg-gradient-to-b from-black via-purple-950 to-yellow-700"
    >
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: "50px" }}
        selectable={true}
      />
    </div>
>>>>>>> 46bf7879e233a3ab81352da1b17f673c55e653ee
  );
};

export default App;
