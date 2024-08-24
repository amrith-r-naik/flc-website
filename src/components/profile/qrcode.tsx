import { format } from "date-fns";
import { QRCodeSVG } from "qrcode.react";
import React, { type ReactNode, type FunctionComponent } from "react";

import { Button } from "~/components/ui/button";
import {
  DialogDrawer,
  DialogDrawerContent,
  DialogDrawerDescription,
  DialogDrawerHeader,
  DialogDrawerTitle,
  DialogDrawerTrigger,
} from "~/components/ui/custom/dialog-drawer";

import { cn } from "~/lib/utils";
import { type User, useUser } from "~/store";
import { idToPid } from "~/utils/id";

const QRCode: FunctionComponent<{
  className?: string;
  children: ReactNode;
}> = ({ className, children }) => {
  const { user } = useUser();
  if (!user) return null;
  return (
    <InnerQRCode user={user} className={className}>
      {children}
    </InnerQRCode>
  );
};

const InnerQRCode: FunctionComponent<{
  user: User;
  className?: string;
  children: ReactNode;
}> = ({ user, className, children }) => {
  if (!user.memberSince) return null;
  return (
    <DialogDrawer>
      <DialogDrawerTrigger asChild>
        <Button className={cn(className, "bg-white")}>{children}</Button>
      </DialogDrawerTrigger>
      <DialogDrawerContent>
        <DialogDrawerHeader className="space-y-4">
          <DialogDrawerTitle className="text-center">
            Your QR Code
          </DialogDrawerTitle>
          <DialogDrawerDescription className="text-center">
            {idToPid(user.id, format(user.memberSince, "yy"))}
          </DialogDrawerDescription>
          <QRCodeSVG
            value={idToPid(user.id, format(user.memberSince, "yy"))}
            size={130}
            bgColor="transparent"
            color="#ffffff"
            fgColor="#ffffff"
            className={"mx-auto size-52"}
          />
        </DialogDrawerHeader>
      </DialogDrawerContent>
    </DialogDrawer>
  );
};

export default QRCode;
