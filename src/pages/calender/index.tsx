

import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calender.module.css"
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
    <div style={{ height: "600px" }} className="bg-gradient-to-b from-black via-purple-950 to-yellow-700">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: "50px" }}
        selectable={true}
      />
    </div>
    
      );
};

export default App;
