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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

import { RadialCard } from "~/components/utils/radialCard";
import { userLinkNames } from "~/constants";
import { useRefetchContext } from "~/context/refetchContext";
import { cn } from "~/lib/utils";
import { type User, useUser } from "~/store";
import { api } from "~/utils/api";
import { addUserLinkZ } from "~/zod/userZ";

const RightTopPanel = forwardRef<
  HTMLDivElement,
  { className?: string; notMine: boolean }
>(({ className, notMine }, ref) => {
  const { user } = useUser();
  if (!user) return null;
  return (
    <InnerRightTopPanel
      ref={ref}
      className={className}
      user={user}
      notMine={notMine}
    />
  );
});
RightTopPanel.displayName = "RightTopPanel";

const InnerRightTopPanel = forwardRef<
  HTMLDivElement,
  { className?: string; user: User; notMine: boolean }
>(({ className, user, notMine }, ref) => {
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
        "flex h-full flex-col justify-between gap-5 overflow-auto rounded-lg bg-card p-10",
      )}
    >
      <div className="grid grid-cols-2 gap-5 first:*:*:opacity-60">
        <div className="col-span-2">
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
              <button variant={"outline"} className="w-full" asChild>
                <Link href={link.url}>
                  <Image
                    src={`/${link.linkName.toLowerCase()}${link.linkName.toLowerCase() === 'instagram' ? '.jpg' : '.png'}`}
                    alt={link.linkName}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                </Link>
              </button>
              {!notMine && (
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
              )}
            </div>
          ))}
        </div>
        {!notMine && user.UserLink.length < 4 && (
          <div className="flex gap-1">
            <Select
              value={userLink.linkName}
              onValueChange={(value) =>
                setUserLink((prev) => ({ ...prev, linkName: value }))
              }
            >
              <SelectTrigger className="w-1/2">
                <SelectValue placeholder="Link Name" />
              </SelectTrigger>
              <SelectContent>
                {userLinkNames
                  .filter((userLinkName) =>
                    user.UserLink.length > 0
                      ? user.UserLink.find(
                        (userLink) => userLink.linkName !== userLinkName,
                      )
                      : true,
                  )
                  .map((linkName, idx) => (
                    <SelectItem key={idx} value={linkName}>
                      {linkName}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
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

      <div className="flex h-1/2 flex-col items-center gap-5 rounded-lg border border-white/10 p-5">
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
InnerRightTopPanel.displayName = "InnerRightTopPanel";

export default RightTopPanel;
