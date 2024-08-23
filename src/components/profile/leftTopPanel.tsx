import { Pencil } from "lucide-react";
import React, { forwardRef } from "react";
import { LuQrCode } from "react-icons/lu";

import NotFound from "~/pages/404";

import EditUserForm from "~/components/profile/editUserForm";
import ProfileImage from "~/components/profile/profileImage";
import QRCode from "~/components/profile/qrcode";
import { RadialCard } from "~/components/utils/radialCard";
import { cn } from "~/lib/utils";
import { type User, useUser } from "~/store";

const LeftPanel = forwardRef<HTMLDivElement, { className?: string }>(
  ({ className }, ref) => {
    const { user } = useUser();
    if (!user) return <NotFound />;
    return <InnerLeftPanel ref={ref} className={className} user={user} />;
  },
);
LeftPanel.displayName = "LeftPanel";

const InnerLeftPanel = forwardRef<
  HTMLDivElement,
  { className?: string; user: User }
>(({ className, user }, ref) => {
  return (
    <RadialCard
      ref={ref}
      className={cn(
        className,
        "relative flex flex-col items-center justify-evenly gap-3 rounded-lg border-2 border-border bg-card p-10",
      )}
    >
      <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
        <ProfileImage />
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <p className="text-center text-3xl">{user.name}</p>
          <p className="text-sm opacity-60">
            FLC Position - {user.position ?? "None"}
          </p>
          <div className="flex gap-5">
            <QRCode>
              QR
              <LuQrCode className="ml-2 size-5" />
            </QRCode>
            <EditUserForm>
              Edit<Pencil className="ml-2 size-5"></Pencil>
            </EditUserForm>
          </div>
        </div>
      </div>
      <div className="mx-0 flex flex-col gap-3 self-start text-lg first:*:*:opacity-60 md:mx-10">
        <div>
          <p>Phone</p>
          <p>{user.phone}</p>
        </div>
        <div>
          <p>Email</p>
          <p>{user.email}</p>
        </div>
        <div>
          <p>Branch</p>
          <p>{user.Branch.name}</p>
        </div>
      </div>
    </RadialCard>
  );
});
InnerLeftPanel.displayName = "InnerLeftPanel";

export default LeftPanel;
