import React, { useState, type FunctionComponent } from "react";
import { toast } from "sonner";

import { api } from "~/utils/api";

import { Input } from "../ui/input";

interface JoinTeamProps {
  eventId: number;
  onJoinTeam: () => void;
  onGoBack: () => void;
}

const JoinTeam: FunctionComponent<JoinTeamProps> = ({
  eventId,
  onGoBack,
  onJoinTeam,
}) => {
  const [teamId, setTeamId] = useState<string | null>(null);

  const joinTeam = api.team.jointeam.useMutation();

  const handleJoinTeam = () => {
    if (teamId) {
      joinTeam.mutate(
        { eventId, teamId },
        {
          onSuccess: () => {
            onJoinTeam();
          },
          onError: (error) => {
            toast.error(error.message);
            throw error.message;
          },
        },
      );
    } else {
      toast.error("Please enter a valid team ID.");
    }
  };
  return (
    <div className="mt-4">
      <Input
        placeholder="Enter Team ID"
        className="card-attributes"
        value={teamId ?? ""}
        onChange={(e) => setTeamId(e.target.value)}
      />
      <div className="flex justify-between">
        <button
          className="card-button mt-4 text-xs"
          style={{ padding: "0.1rem 0.5rem" }}
          onClick={handleJoinTeam}
        >
          Join
        </button>
        <button
          onClick={onGoBack}
          className="card-button mt-4 text-xs"
          style={{ padding: "0.1rem 0.5rem" }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default JoinTeam;
