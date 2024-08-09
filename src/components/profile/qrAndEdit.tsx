import * as Dialog from "@radix-ui/react-dialog";
import { Pencil, X } from "lucide-react";
import {
  CldUploadWidget,
  type CloudinaryUploadWidgetInfo,
  type CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

import { deleteFromCloudinary } from "~/components/cloudinary/cloudinaryDelete";
import { api } from "~/utils/api";

const QrAndEdit = ({ classname }: { classname: string }) => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [phone, setPhone] = useState("");

  const router = useRouter();

  const { data: user } = api.user.getUser.useQuery();
  const updateProfile = api.user.editUser.useMutation();
  const editUser = api.user.editUser.useMutation({
    onSuccess: async () => {
      router.refresh();
      toast.dismiss();
      toast.success("Profile changed successfully");
    },
    onError: ({ message }) => {
      toast.dismiss();
      toast.error(message);
    },
  });

  return (
    <div className={`left-0  flex justify-between ${classname}`}>
      <Dialog.Root>
        <Dialog.Trigger className="rounded-sm border border-white border-opacity-10 bg-white bg-opacity-5 px-2 text-xs">
          Show QR
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black bg-opacity-90" />
          <Dialog.Content className="fixed left-[50%] top-[50%] flex h-fit max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] flex-col gap-2 rounded-[6px] border-2 border-border bg-background p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]">
            <Dialog.Title className="text-center">Your QR</Dialog.Title>
            <Image
              src={"/poster1.webp"}
              alt="QR Image"
              height={450}
              width={450}
              objectFit="cover"
            />
            <Dialog.Close className="absolute right-2 top-2">
              <X className="text-white opacity-30" />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <Dialog.Root>
        <Dialog.Trigger className="flex items-center gap-1 rounded-sm border border-white border-opacity-10 bg-white bg-opacity-5 px-2 text-xs">
          Edit<Pencil className="w-3"></Pencil>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black bg-opacity-90" />
          <Dialog.Content className="fixed left-[50%] top-[50%] mt-8 flex h-fit max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] flex-col gap-2 rounded-[6px] border-2 border-border bg-background p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]">
            <Dialog.Title className=" m-0 text-[17px] font-medium text-white">
              Edit Profile
            </Dialog.Title>
            <Dialog.Description className="mb-5 mt-[10px] text-sm leading-normal text-white opacity-50">
              Make changes to your profile here. Click save when you&apos;re
              done.
            </Dialog.Description>
            {/* CLOUDINARY */}
            <fieldset className="mb-[15px] flex items-center self-center text-foreground">
              <CldUploadWidget
                signatureEndpoint="/api/cloudinary/sign"
                onSuccess={(result: CloudinaryUploadWidgetResults) => {
                  const { info } = result;
                  const { secure_url: imageUrl } =
                    info as CloudinaryUploadWidgetInfo;

                  console.log(imageUrl);
                  alert(imageUrl);

                  // deleting from cloudinary server
                  void deleteFromCloudinary(
                    user?.userProfile.image as unknown as string,
                  );

                  if (imageUrl && user) {
                    // update our db with result
                    void updateProfile.mutateAsync({
                      id: user.userProfile.id,
                      image: imageUrl,
                    });
                  }
                }}
              >
                {({ open }) => (
                  <>
                    <Image
                      src={user?.userProfile.image as unknown as string}
                      alt={"ur profile picture"}
                      width={100}
                      height={100}
                      className=" h-[100px] border-spacing-10 overflow-hidden rounded-full border-4 border-primary object-cover"
                    ></Image>
                    <div
                      className="absolute h-[100px] w-[100px] rounded-full bg-black/80"
                      onClick={() => open()}
                    ></div>
                    <Pencil
                      className="absolute left-1/2 -translate-x-[14px]"
                      width={28}
                      onClick={() => open()}
                    />
                  </>
                )}
              </CldUploadWidget>
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="w-[90px] text-right text-[15px] text-primary"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className=" inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] bg-black bg-opacity-10 px-[10px] text-xs leading-none text-primary shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                defaultValue={user?.userProfile.name}
              />
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="w-[90px] text-right text-[15px] text-primary"
                htmlFor="name"
              >
                Phone
              </label>
              <input
                className="shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] bg-black bg-opacity-10 px-[10px] text-xs leading-none text-primary shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                defaultValue={user?.userProfile.phone}
              />
            </fieldset>
            {/*  <fieldset className="mb-[15px] flex items-center gap-5">
                    <label
                      className="w-[90px] text-right text-[15px] text-primary"
                      htmlFor="name"
                    >
                      Bio
                    </label>
                    <input
                      className="shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] bg-black bg-opacity-10 px-[10px] text-xs leading-none text-primary shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                      id="bio"
                      defaultValue={user?.userProfile.bio || ""}
                      value={bio}
                      onChange={(e) => {setBio(e.target.value)}}
                    />
                  </fieldset> */}
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="w-[90px] text-right text-[15px] text-primary"
                htmlFor="name"
              >
                Bio
              </label>
              <textarea
                className="shadow-violet7 focus:shadow-violet8 inline-flex h-[70px] w-full flex-1 items-center justify-center rounded-[4px] bg-black bg-opacity-10 px-[10px] text-xs leading-none text-primary shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="bio"
                defaultValue={user?.userProfile.bio ?? ""}
                value={bio}
                onChange={(e) => {
                  setBio(e.target.value);
                }}
              />
            </fieldset>
            <Dialog.Close asChild>
              <button
                onClick={async () => {
                  editUser.mutate({
                    id: user ? user.userProfile.id : "error",
                    name,
                    phone,
                    bio,
                  });
                }}
                className="inline-flex h-[35px] max-w-[200px] items-center justify-center self-end rounded-[4px] bg-green-600 bg-opacity-90 px-[15px] font-medium leading-none text-white hover:bg-green-500 focus:shadow-[0_0_0_2px] focus:shadow-green-700 focus:outline-none"
              >
                Save changes
              </button>
            </Dialog.Close>
            <Dialog.Close asChild className="absolute right-2 top-2">
              <X className="w-4 text-white opacity-30" />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default QrAndEdit;
