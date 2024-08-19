"use client";

import { Button } from "@radix-ui/themes";
import { X } from "lucide-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";

import Payment from "~/components/razorPay/paymentButton";
import CopyBtn from "~/components/utils/copyBtn";
import { api } from "~/utils/api";

interface TeamDialogProps {
  amount: number;
  eventId: number;
  maxTeamSize: number;
  isAFLCMember: boolean;
  eventName: string;
  userId: number;
}

const TeamDialog: React.FC<TeamDialogProps> = ({
  eventId,
  maxTeamSize,
  isAFLCMember,
  amount,
  eventName,
  userId,
}) => {
  const [isCreatingTeam, setIsCreatingTeam] = useState(false);
  const [isJoiningTeam, setIsJoiningTeam] = useState(false);
  const [teamId, setTeamId] = useState<number | null>(null);
  const [isTeamLeader, setIsTeamLeader] = useState(false);
  const [teamConfirmed, setTeamConfirmed] = useState(false);
  const [teamName, setTeamName] = useState("");
  const paymentStatusQuery = api.payment.checkEventPayment.useQuery(
    { eventName },
    {
      refetchOnMount: "always",
      refetchOnReconnect: "always",
      enabled: !isAFLCMember,
    },
  );

  const paymentStatus = paymentStatusQuery.data;

  const handleRegister = () => {
    document.getElementById("dialogTrigger")?.click();
  };

  const { data: teamData, refetch: refetchTeamData } =
    api.team.inATeamOfEvent.useQuery({ eventId });

  const joinTeamMutation = api.team.jointeam.useMutation({
    onSuccess: () => {
      refetchTeamData();
    },
    onError: (error) => {
      throw error.message;
    },
  });

  const confirmTeam = api.team.confirmTeam.useMutation({
    onSuccess: () => {
      toast.success("Team Confirmed");
      setTeamConfirmed(true);
    },
  });

  const joinTeam = async () => {
    if (teamId) {
      try {
        await joinTeamMutation.mutateAsync({ eventId, teamId });
      } catch (error: any) {
        toast.error(error);
        console.error("Error joining team:", error);
      }
    } else {
      toast.error("Please enter a valid team ID.");
    }
  };

  const removeMemberFromTeamMutation = api.team.removeFromTeam.useMutation({
    onSuccess: () => {
      refetchTeamData();
    },
  });

  useEffect(() => {
    if (teamData?.isConfirmed) {
      setTeamConfirmed(true);
    }
  }, [teamData?.isConfirmed]);

  useEffect(() => {
    if (teamData) {
      setIsTeamLeader(teamData?.isLeader);
      setTeamId(teamData.id);
    }
  }, [teamData]);

  const createTeam = api.team.createTeam.useMutation({
    onSuccess: () => {
      refetchTeamData();
      toast.success("Team created successfully!");
    },
    onError: (error) => {
      throw error.message;
    },
  });

  const handleCreateTeam = async () => {
    if (teamName) {
      try {
        await createTeam.mutateAsync({ eventId, teamName });
      } catch (error: any) {
        toast.error(error);
      }
    } else {
      toast.error("Please enter a valid team name.");
    }
  };

  const handleConfirmTeam = () => {
    if (teamData?.id) {
      confirmTeam.mutate({ teamId: teamData?.id });
    }
  };

  useEffect(() => {
    console.log(userId, isAFLCMember, amount, eventName);
  }, []);

  const removeMemberFromTeam = (id: number) => () => {
    removeMemberFromTeamMutation.mutate({ teamId: teamData?.id!, userId: id });
  };

  const leaveTeam = api.team.leaveTeam.useMutation({
    onSuccess: () => {
      refetchTeamData();
      toast.success("left team successfully!");
    },
    onError: (error) => {
      throw error.message;
    },
  });
  const leaveTeamHandle = async () => {
    if (teamId) {
      try {
        await leaveTeam.mutateAsync({ teamId: teamId });
      } catch (error: any) {
        toast.error(error);
      }
    } else {
      toast.error("Couldnt remove you from team");
    }
  };

  useEffect(() => {
    if (paymentStatus) {
      toast.success("You can register now!");
    }
  }, [paymentStatus]);

  const handlePaymentSuccess = () => {
    // Refetch payment status when payment is successful
    paymentStatusQuery.refetch();
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="z-20">
        <Button id="dialogTrigger" className="hidden" />
      </DialogTrigger>
      {isAFLCMember && (
        <Button className="card-button z-20" onClick={handleRegister}>
          Register
        </Button>
      )}
      {!isAFLCMember && !paymentStatus && (
        <Payment
          amount={amount}
          name={eventName}
          userId={userId}
          onPaymentSuccess={handlePaymentSuccess}
        />
      )}

      {!isAFLCMember && paymentStatus && (
        <Button className="card-button z-20" onClick={handleRegister}>
          Register Now
        </Button>
      )}

      <DialogContent className="intro-card w-[90%] border-none  sm:mx-0 sm:w-[40%]">
        <DialogClose asChild>
          <button
            className="absolute right-1.5 top-1.5 z-30 p-1.5 text-gray-600 hover:text-white"
            aria-label="Close"
          >
            <X />
          </button>
        </DialogClose>
        {!teamData && (
          <>
            <DialogTitle>Join | Create Team</DialogTitle>
            <DialogDescription>
              Choose whether you'd like to create a new team or join an existing
              one.
            </DialogDescription>

            <div className="flex flex-col gap-4">
              {!isCreatingTeam && !isJoiningTeam && (
                <div className="flex flex-col gap-4">
                  <Button
                    className="card-button mx-auto w-[40%]"
                    onClick={() => setIsCreatingTeam(true)}
                  >
                    Create Team
                  </Button>
                  <Button
                    className="card-button mx-auto w-[40%]"
                    onClick={() => setIsJoiningTeam(true)}
                  >
                    Join Team
                  </Button>
                </div>
              )}

              {isCreatingTeam && !isJoiningTeam && (
                <div className="mt-4">
                  <Input
                    placeholder="Enter Team Name"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="card-attributes"
                  />
                  <div className="flex justify-between">
                    <button
                      className="card-button mt-4 text-xs"
                      style={{ padding: "0.1rem 0.5rem" }}
                      onClick={handleCreateTeam}
                    >
                      Create
                    </button>
                    <button
                      onClick={() => setIsCreatingTeam(false)}
                      className="card-button mt-4 text-xs"
                      style={{ padding: "0.1rem 0.5rem" }}
                    >
                      Go Back
                    </button>
                  </div>
                </div>
              )}

              {isJoiningTeam && !isCreatingTeam && (
                <div className="mt-4">
                  <Input
                    placeholder="Enter Team ID"
                    className="card-attributes"
                    value={teamId ? teamId.toString() : ""}
                    onChange={(e) => setTeamId(Number(e.target.value) || null)}
                  />
                  <div className="flex justify-between">
                    <button
                      className="card-button mt-4 text-xs"
                      style={{ padding: "0.1rem 0.5rem" }}
                      onClick={joinTeam}
                    >
                      Join
                    </button>
                    <button
                      onClick={() => setIsJoiningTeam(false)}
                      className="card-button mt-4 text-xs"
                      style={{ padding: "0.1rem 0.5rem" }}
                    >
                      Go Back
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {teamData && (
          <>
            <DialogTitle className="flex items-center justify-between">
              <p className="events-heading text-2xl font-bold capitalize">
                {teamData?.name}
              </p>
              {!teamConfirmed && (
                <div className="flex flex-col gap-2">
                  <p className="text-xs">Share team id to join</p>
                  <div className="flex gap-2">
                    <input
                      className=" card-attributes flex-1 rounded-lg p-1.5 text-xs text-white"
                      type="text"
                      value={teamId?.toString()}
                      disabled
                    />
                    <CopyBtn value={teamId?.toString()} />
                  </div>
                </div>
              )}
            </DialogTitle>
            <DialogDescription>
              {teamData?.Members?.length} members in this team. (Max{" "}
              {maxTeamSize})
            </DialogDescription>

            <div>
              {teamData?.Members?.map((member) => (
                <div key={member.id} className="flex items-center gap-2">
                  <p className="capitalize">{member.name}</p>
                  {!teamConfirmed &&
                    isTeamLeader &&
                    member.id != teamData.userId && (
                      <button
                        onClick={removeMemberFromTeam(member.id)}
                        className="z-30"
                      >
                        <p className="rounded-lg border px-1 text-xs text-white hover:bg-red-600">
                          Remove
                        </p>
                      </button>
                    )}

                  {!teamConfirmed &&
                    !isTeamLeader &&
                    member.id === teamData.userId && (
                      <button onClick={leaveTeamHandle} className="z-30">
                        <p className="rounded-lg border px-1 text-xs text-white hover:bg-red-600">
                          Leave Team
                        </p>
                      </button>
                    )}
                </div>
              ))}
            </div>

            {!teamConfirmed && isTeamLeader && (
              <div className="flex flex-col gap-2">
                <p className="text-xs text-red-600">
                  <span className="font-bold">Warning: </span>Proceed to confirm
                  only when all the team members have joined. You won't be able
                  to add or delete more members after.
                </p>
                <Button className="card-button " onClick={handleConfirmTeam}>
                  Confirm Team
                </Button>
              </div>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TeamDialog;
