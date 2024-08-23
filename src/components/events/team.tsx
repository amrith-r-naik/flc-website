import { Button } from "@radix-ui/themes";
import { X } from "lucide-react";
import React, { type FunctionComponent, useEffect, useState } from "react";
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

const TeamDialog: FunctionComponent<{
  amount: number;
  eventId: number;
  maxTeamSize: number;
  eventName: string;
}> = ({ eventId, maxTeamSize, amount, eventName }) => {
  const [open, setOpen] = useState<boolean>(false);

  const [isCreatingTeam, setIsCreatingTeam] = useState(false);
  const [isJoiningTeam, setIsJoiningTeam] = useState(false);
  const [teamId, setTeamId] = useState<string | null>(null);
  const [isTeamLeader, setIsTeamLeader] = useState(false);
  const [teamConfirmed, setTeamConfirmed] = useState(false);
  const [teamName, setTeamName] = useState("");

  const { data: paymentStatus, refetch: refetchPaymentStatus } =
    api.payment.checkEventPayment.useQuery(
      { eventName },
      {
        refetchOnMount: "always",
        refetchOnReconnect: "always",
      },
    );

  const { data: teamData, refetch: refetchTeamData } =
    api.team.inATeamOfEvent.useQuery({ eventId });

  const joinTeam = api.team.jointeam.useMutation();
  const confirmTeam = api.team.confirmTeam.useMutation();
  const leaveTeam = api.team.leaveTeam.useMutation();
  const createTeam = api.team.createTeam.useMutation();
  const removeFromTeam = api.team.removeFromTeam.useMutation();

  useEffect(() => {
    if (teamData?.isConfirmed) setTeamConfirmed(true);
  }, [teamData?.isConfirmed]);

  useEffect(() => {
    if (!teamData) return;
    setIsTeamLeader(teamData?.isLeader);
    setTeamId(teamData.id);
  }, [teamData]);

  useEffect(() => {
    if (!teamData && paymentStatus) toast.success("You can register now!");
  }, [paymentStatus]);

  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogTrigger asChild>
        <Button className="card-button z-20">
          {teamConfirmed ? "View Team" : "Create Team"}
        </Button>
      </DialogTrigger>

      {!paymentStatus && (
        <Payment
          amount={amount}
          name={eventName}
          onPaymentSuccess={() => {
            void refetchPaymentStatus();
          }}
        />
      )}

      {paymentStatus && (
        <Button className="card-button z-20" onClick={() => setOpen(true)}>
          {teamConfirmed ? "View Team" : "Register"}
        </Button>
      )}

      <DialogContent className="intro-card w-[90%] border-none !opacity-100  sm:mx-0 sm:w-[40%]">
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
              Choose whether you&apos;d like to create a new team or join an
              existing one.
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
                      onClick={() => {
                        toast.loading("Creating team...");
                        createTeam.mutate(
                          { eventId: eventId, teamName: teamName },
                          {
                            onSuccess: () => {
                              void refetchTeamData();
                              toast.dismiss();
                              toast.success("Team successfully created");
                            },
                            onError: ({ message }) => {
                              toast.dismiss();
                              toast.error(message);
                            },
                          },
                        );
                      }}
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
                    value={teamId ?? ""}
                    onChange={(e) => setTeamId(e.target.value)}
                  />
                  <div className="flex justify-between">
                    <button
                      className="card-button mt-4 text-xs"
                      style={{ padding: "0.1rem 0.5rem" }}
                      onClick={() => {
                        if (teamId) {
                          joinTeam.mutate(
                            { eventId, teamId },
                            {
                              onSuccess: () => {
                                void refetchTeamData();
                              },
                              onError: (error) => {
                                throw error.message;
                              },
                            },
                          );
                        } else {
                          toast.error("Please enter a valid team ID.");
                        }
                      }}
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
                        onClick={() => () => {
                          removeFromTeam.mutate(
                            { teamId: teamData.id, userId: member.id },
                            {
                              onSuccess: () => {
                                void refetchTeamData();
                              },
                            },
                          );
                        }}
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
                      <button
                        onClick={() => {
                          if (teamId) {
                            toast.loading("Leaving team...");
                            leaveTeam.mutate(
                              { teamId: teamId },
                              {
                                onSuccess: () => {
                                  toast.dismiss();
                                  void refetchTeamData();
                                  toast.success("Left team successfully!");
                                },
                                onError: ({ message }) => {
                                  toast.dismiss();
                                  toast.error(message);
                                },
                              },
                            );
                          } else {
                            toast.error("Couldnt remove you from team");
                          }
                        }}
                        className="z-30"
                      >
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
                  only when all the team members have joined. You won&apos;t be
                  able to add or delete more members after.
                </p>
                <Button
                  className="card-button "
                  onClick={() => {
                    if (teamData?.id) {
                      confirmTeam.mutate(
                        { teamId: teamData?.id },
                        {
                          onSuccess: () => {
                            toast.success("Team Confirmed");
                            setTeamConfirmed(true);
                          },
                        },
                      );
                    }
                  }}
                >
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
