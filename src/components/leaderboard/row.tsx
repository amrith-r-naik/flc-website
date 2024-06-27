import React from "react";

interface rowProps {
  name: string;
  usn: string;
  eventsAttended: number;
  xp: number;
}

const Row = ({ name, usn, eventsAttended, xp }: rowProps) => {
  return (
    <div className="flex w-full rounded-lg border-2 border-border">
      <div className="flex-1  border-orange-700 py-4">
        <p className="sm:text-md font-semibol text-center text-xs md:text-lg">
          {name}
        </p>
      </div>

      <div className="flex-1  border-orange-700 py-4">
        <p className="sm:text-md font-semibol text-center text-xs md:text-lg">
          {usn}
        </p>
      </div>

      <div className="flex-1  border-orange-700 py-4">
        <p className="sm:text-md font-semibol text-center text-xs md:text-lg">
          {eventsAttended}
        </p>
      </div>

      <div className="flex-1  border-orange-700 py-4">
        <p className="sm:text-md font-semibol text-center text-xs md:text-lg">
          {xp}xp
        </p>
      </div>
    </div>
  );
};

export default Row;
