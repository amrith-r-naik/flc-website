//use This to upload Images in any form
// HOW TO USE - 1.refer eg. pages/coudinary/index.tsx
//            - 2. look into prps of this component
import {
  CldUploadWidget,
  type CloudinaryUploadWidgetInfo,
  type CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import React, { useState } from "react";

import { api } from "~/utils/api";

export enum uploadTypeEnum {
  userLink = "userLink",
  userPicture = "userProfile",
  eventPicture = "eventPicture",
}

type BaseProps = {
  uploadName: string;
  type: uploadTypeEnum;
};

type PropsWithEvent = BaseProps & {
  userId?: never;
  eventId: number;
};

type PropsWithUser = BaseProps & {
  userId: number;
  eventId?: never;
};

export type CloudinaryProp = PropsWithEvent | PropsWithUser;

export default function CloudinaryUpload({
  uploadName,
  userId,
  eventId,
  type,
}: CloudinaryProp) {
  const [url, setUrl] = useState<string | null>(null);

  const addImageToUserLink = api.userLink.createUserLink.useMutation();
  const addImageToEvent = api.event.updateEvent.useMutation();
  // const addImageToUser = api.user.update.useMutaion();

  async function addImageToDB(secure_url: string) {
    if (type == uploadTypeEnum.userLink && userId) {
      addImageToUserLink.mutate({
        userId: userId, //from the auth
        url: secure_url,
        linkName: "Test Images", //from prop
      });
    } else if (type == uploadTypeEnum.userPicture) {
      // addImageToUser.mutate({
      //   userId: userId ?? "clxikjroh00003bzlqsg5znhd", //from the auth
      //   image: secure_url,
      // });
    } else if (type == uploadTypeEnum.eventPicture && eventId) {
      addImageToEvent.mutate({
        id: eventId, //from the auth
        imgSrc: secure_url,
      });
    }
  }

  const handleSuccess = async (result: CloudinaryUploadWidgetResults) => {
    const { info } = result;
    const { secure_url } = info as CloudinaryUploadWidgetInfo;
    setUrl(secure_url);
    await addImageToDB(secure_url);
  };

  return (
    <div>
      <div className="m-auto my-12 w-fit rounded-md bg-slate-200 p-3 text-black">
        <CldUploadWidget
          signatureEndpoint="/api/cloudinary/sign"
          onSuccess={(result) => {
            void handleSuccess(result);
          }}
        >
          {({ open }) => {
            return <button onClick={() => open()}>{uploadName}</button>;
          }}
        </CldUploadWidget>
      </div>

      {url && (
        <div className="mt-26 text-center">
          {url} <p className="m-12 text-blue-700">refresh the page</p>{" "}
        </div>
      )}
    </div>
  );
}
