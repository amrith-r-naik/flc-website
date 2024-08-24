import {
  CldUploadWidget,
  type CloudinaryUploadWidgetInfo,
  type CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import Image from "next/image";
import React, { forwardRef } from "react";
import { LuPencil } from "react-icons/lu";
import { toast } from "sonner";

import { useRefetchContext } from "~/context/refetchContext";
import { cn } from "~/lib/utils";
import { type User, useUser } from "~/store";
import { api } from "~/utils/api";
import { deleteFromCloudinary } from "~/utils/cloudinary";

const ProfileImage = forwardRef<HTMLDivElement>((_, ref) => {
  const { user } = useUser();
  if (!user) return null;
  return <InnerProfileImage ref={ref} user={user} />;
});
ProfileImage.displayName = "ProfileImage";

const InnerProfileImage = forwardRef<HTMLDivElement, { user: User }>(
  ({ user }, ref) => {
    const { executeRefetch } = useRefetchContext("user");
    const editUserImage = api.user.editUserImage.useMutation();

    return (
      <div
        ref={ref}
        className="relative size-36 min-h-36 min-w-36 rounded-full border-4 border-white text-foreground drop-shadow-md"
      >
        <CldUploadWidget
          signatureEndpoint="/api/cloudinary/sign"
          onSuccess={async (result: CloudinaryUploadWidgetResults) => {
            const { secure_url: imageUrl } =
              result.info as CloudinaryUploadWidgetInfo;
            if (user.image) await deleteFromCloudinary(user.image);
            toast.loading("Changing profile picture");
            editUserImage.mutate(
              {
                image: imageUrl,
              },
              {
                onSuccess: () => {
                  executeRefetch();
                  toast.dismiss();
                  toast.success("Profile picture changed");
                },
                onError: () => {
                  toast.dismiss();
                  toast.error("Cloudn't change profile picture");
                },
              },
            );
          }}
        >
          {({ open }) => (
            <>
              <div className="relative size-full">
                {user.image && (
                  <Image
                    src={user.image}
                    alt={"Profile Image"}
                    fill
                    className="rounded-full object-fill object-center"
                  />
                )}
              </div>
              <div
                className={cn(
                  user.image
                    ? "bg-none hover:bg-gray-50/5"
                    : "bg-gray-50/10 hover:bg-gray-50/15",
                  "absolute left-0 top-0 flex size-full items-center justify-center rounded-full",
                )}
                onClick={() => open()}
              >
                <LuPencil className="size-5" />
              </div>
            </>
          )}
        </CldUploadWidget>
      </div>
    );
  },
);
InnerProfileImage.displayName = "InnerProfileImage";

export default ProfileImage;
