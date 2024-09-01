import {
  CldUploadWidget,
  type CloudinaryUploadWidgetInfo,
  type CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import UploadForm from "../cloudinary/upload";
import Image from "next/image";
import React, { forwardRef } from "react";
import { LuPencil } from "react-icons/lu";
import { toast } from "sonner";

import { useRefetchContext } from "~/context/refetchContext";
import { cn } from "~/lib/utils";
import { type User, useUser } from "~/store";
import { api } from "~/utils/api";
import { deleteFromCloudinary } from "~/utils/cloudinary";

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
>(({ user, notMine }, ref) => {
  const { executeRefetch } = useRefetchContext("user");
  const editUserImage = api.user.editUserImage.useMutation();

  return (
    <div
      ref={ref}
      className="relative size-36 min-h-36 min-w-36 rounded-full border-4 border-white text-foreground drop-shadow-md"
    >

      
    
     {user?.image &&( <div >
      
      < Image
                  src={user.image}
                  alt={"Profile Image"}
                  fill
                  className="rounded-full object-fill object-center"
                />
                <UploadForm oldImage={user.image??""} ></UploadForm>
                </div>)}
    </div>
  );
});
InnerProfileImage.displayName = "InnerProfileImage";

export default ProfileImage;
