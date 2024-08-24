import Image from "next/image";
import Link from "next/link";
import React, { forwardRef, useState } from "react";
import { LuPlus, LuTrash2 } from "react-icons/lu";
import { toast } from "sonner";

import { Button } from "~/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { Input } from "~/components/ui/input";

import { RadialCard } from "~/components/utils/radialCard";
import { useRefetchContext } from "~/context/refetchContext";
import { cn } from "~/lib/utils";
import { type User, useUser } from "~/store";
import { api } from "~/utils/api";
import { addUserLinkZ } from "~/zod/userZ";

const RightPanel = forwardRef<HTMLDivElement, { className?: string }>(
  ({ className }, ref) => {
    const { user } = useUser();
    if (!user) return null;
    return <InnerRightPanel ref={ref} className={className} user={user} />;
  },
);
RightPanel.displayName = "RightPanel";

const InnerRightPanel = forwardRef<
  HTMLDivElement,
  { className?: string; user: User }
>(({ className, user }, ref) => {
  const { executeRefetch } = useRefetchContext("user");

  const [userLink, setUserLink] = useState<{ url: string; linkName: string }>({
    linkName: "",
    url: "",
  });

  const addUserLink = api.user.addUserLink.useMutation();
  const removeUserLink = api.user.removeUserLink.useMutation();

  const images = user.Certificate.reduce(
    (acc, certificate) => [...acc, certificate.id],
    [] as string[],
  );

  return (
    <RadialCard
      ref={ref}
      className={cn(
        className,
        "flex h-full flex-col justify-between gap-5 overflow-auto rounded-lg border-2 border-border bg-card p-10",
      )}
    >
      <div className="flex h-1/5 flex-col items-center rounded-lg border p-5">
        <p className="text-lg font-bold">Bio</p>
        <p>{user.bio}</p>
      </div>

      <div className="flex flex-col gap-5 first:*:*:opacity-60">
        <div>
          <p>Year & Branch</p>
          <p>
            {user.year} - {user.Branch.name}
          </p>
        </div>
        <div>
          <p>Activity Point</p>
          <p>{user.totalActivityPoints}</p>
        </div>
        <div>
          <p>Attendance</p>
          {/* TODO: integrate backend */}
          <p>{0}%</p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {user.UserLink.map((link, idx) => (
            <div key={idx} className="flex w-full gap-1">
              <Button variant={"outline"} className="w-full" asChild>
                <Link href={link.url}>{link.linkName}</Link>
              </Button>
              <Button
                variant={"outline"}
                className="p-2"
                onClick={() => {
                  toast.loading("Removing Link...");
                  removeUserLink.mutate(
                    {
                      linkId: link.id,
                    },
                    {
                      onSuccess: () => {
                        executeRefetch();
                        toast.dismiss();
                        toast.success("Link removed successfully");
                      },
                      onError: ({ message }) => {
                        toast.dismiss();
                        toast.error(message);
                      },
                    },
                  );
                }}
              >
                <LuTrash2 className="size-5 text-red-500" />
              </Button>
            </div>
          ))}
        </div>
        {user.UserLink.length < 4 && (
          <div className="flex gap-1">
            <Input
              className="w-1/2"
              placeholder="Name"
              value={userLink.linkName}
              onChange={(e) =>
                setUserLink((prev) => ({ ...prev, linkName: e.target.value }))
              }
            />
            <Input
              className="w-1/2"
              placeholder="URL"
              value={userLink.url}
              onChange={(e) =>
                setUserLink((prev) => ({ ...prev, url: e.target.value }))
              }
            />
            <Button
              className="px-2"
              onClick={() => {
                const { success } = addUserLinkZ.safeParse(userLink);
                if (!success) {
                  toast.error("Invalid name or URL");
                  return;
                }
                toast.loading("Adding link...");
                addUserLink.mutate(
                  {
                    linkName: userLink.linkName,
                    url: userLink.url,
                  },
                  {
                    onSuccess: () => {
                      executeRefetch();
                      toast.dismiss();
                      toast.success("Link added successfully");
                      setUserLink({ linkName: "", url: "" });
                    },
                    onError: ({ message }) => {
                      toast.dismiss();
                      toast.error(message);
                    },
                  },
                );
              }}
            >
              <LuPlus className="size-5" />
            </Button>
          </div>
        )}
      </div>

      <div className="flex h-1/3 flex-col items-center gap-5 rounded-lg border p-5">
        <p className="text-lg font-bold">Certificates</p>
        {images.length > 0 ? (
          <Carousel>
            <CarouselContent>
              {images.map((image, idx) => (
                <CarouselItem key={idx} className="relative size-20">
                  <Image src={image} alt={image} fill />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : (
          <p className="my-auto opacity-60">No Certificates</p>
        )}
      </div>
    </RadialCard>
  );
});
InnerRightPanel.displayName = "InnerRightPanel";

export default RightPanel;
