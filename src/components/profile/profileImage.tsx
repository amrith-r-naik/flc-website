import {
  CldUploadWidget,
  type CloudinaryUploadWidgetInfo,
  type CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import Image from "next/image";
import React, { forwardRef } from "react";
import { LuPencil } from "react-icons/lu";
import { toast } from "sonner";

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
    const editUserImage = api.user.editUserImage.useMutation();

    return (
      <div
        ref={ref}
        className="relative size-32 rounded-full border-4 border-white text-foreground drop-shadow-md"
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
              <div className="relative size-32">
                {user.image && (
                  <Image
                    src={user.image}
                    alt={"Profile Image"}
                    className="rounded-full object-cover"
                  />
                )}
              </div>
              <div
                className="absolute left-0 top-0 flex size-full items-center justify-center rounded-full bg-gray-50/10"
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
