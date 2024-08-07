import { format } from "date-fns";
import { QRCodeSVG } from "qrcode.react";
import React, { type FunctionComponent } from "react";

import { cn } from "~/lib/utils";
import { idToPid } from "~/utils/id";

interface Props {
  pid: number;
  year: Date;
  className?: string;
}

const QRCode: FunctionComponent<Props> = ({ pid, year, className }) => {
  return (
    <QRCodeSVG
      value={idToPid(pid, format(year, "yy"))}
      size={130}
      bgColor="transparent"
      color="#ffffff"
      fgColor="#ffffff"
      className={cn(className, "size-52 self-center")}
    />
  );
};

export default QRCode;
