import Image from "next/image";
import React, { forwardRef } from "react";

import { type User, useUser } from "~/store";

import UploadForm from "../cloudinary/upload";

const ProfileImage = forwardRef<HTMLDivElement, { notMine: boolean }>(
  ({ notMine }, ref) => {
    const { user } = useUser();
    if (!user) return null;
    return <InnerProfileImage ref={ref} user={user} notMine={notMine} />;
  },
);
ProfileImage.displayName = "ProfileImage";

const InnerProfileImage = forwardRef<
  HTMLDivElement,
  { user: User; notMine: boolean }
>(({ user }, ref) => {
  return (
    <div
      ref={ref}
      className="relative size-36 min-h-36 min-w-36 rounded-full border-4 border-white text-foreground drop-shadow-md"
    >
      {user?.image && (
        <div>
          <Image
            src={user.image}
            alt={"Profile Image"}
            fill
            className="rounded-full object-fill object-center"
          />
          <UploadForm oldImage={user.image ?? ""}></UploadForm>{" "}
          {/* mutation, uploading, deletion of image is taken care of here*/}
        </div>
      )}
    </div>
  );
});
InnerProfileImage.displayName = "InnerProfileImage";

export default ProfileImage;
