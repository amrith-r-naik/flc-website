import { format } from "date-fns";
import { QRCodeSVG } from "qrcode.react";
import React, { type ReactNode, type FunctionComponent } from "react";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

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
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-white">{children}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Your QR Code</DialogTitle>
          <DialogDescription className="text-center">
            {idToPid(user.id, format(user.memberSince, "yy"))}
          </DialogDescription>
          <QRCodeSVG
            value={idToPid(user.id, format(user.memberSince, "yy"))}
            size={130}
            bgColor="transparent"
            color="#ffffff"
            fgColor="#ffffff"
            className={cn(className, "size-52 self-center")}
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default QRCode;
