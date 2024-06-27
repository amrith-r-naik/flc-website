import Image from "next/image";
import React from "react";
import { ChevronDown } from "lucide-react";
import ImageCarousel from "~/components/imageCarousel";

const Profile = () => {
  const images: string[] = [
    "/poster1.webp",
    "/poster2.webp",
    "/poster3.webp",
    "/poster4.webp",
    "/poster5.webp",
  ];

  return (
    <main className="border-red min-h-screen border-red-500 bg-background">
      {/* The background design */}
      <div className="absolute z-0 h-[40dvh] w-full">
        <iframe
          className=" hover:cursor-pointer"
          src="https://my.spline.design/waves-154a3cc8dbc6ed08cdd227da718b6aed/"
          width="100%"
          height="100%"
        ></iframe>
      </div>

      <div className="z-10 flex h-screen flex-col gap-2 bg-background px-4 pb-4 pt-[20dvh]">
        {/* Top card */}
        <div className="w-full rounded-lg border-2 border-white border-opacity-50 bg-gray-600 bg-opacity-20 text-white-200 backdrop-blur-[32px] backdrop-filter">
          {/* Profile Photo holder */}
          <div className="absolute left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white border-opacity-70 drop-shadow-md">
            <Image
              src="/My_photo_suit.jpg"
              alt="Profile Image"
              fill
              className="rounded-full object-cover"
            />
          </div>
          {/* Card Body */}
          <div className="mb-8 mt-16 flex w-full flex-col gap-3 overflow-hidden p-4">
            {/* Name and Position Div */}
            <div className="flex w-full flex-col items-center">
              <p className="text-2xl font-bold text-white">Jackie Chan</p>
              <p className="text-sm text-primary contrast-[0.55]">Member</p>
            </div>
            {/* Phone & Email div */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <p className="text-sm text-white-200">Phone</p>
                <p className="text-white">9876543210</p>
              </div>
              <div>
                <p className="text-sm text-white-200">Email</p>
                <p className="text-white">nnm22gg070@nmamit.in</p>
              </div>
            </div>
            {/* See more */}
            <div className="absolute bottom-1 left-1/2 flex -translate-x-1/2 items-center justify-center gap-1 text-sm text-card-foreground">
              <p>See more</p>
              <ChevronDown size={16} className="translate-y-[1px]" />
            </div>
          </div>
        </div>

        {/* Bottom Events Card */}
        <p className="-mb-1 ml-2 text-sm font-medium text-white-200">
          My Events
        </p>
        <div className="flex h-full w-full rounded-lg border-2 border-white border-opacity-50 bg-gray-600 bg-opacity-20 p-2 pr-0 text-white-200 backdrop-blur-[32px] backdrop-filter">
          <ImageCarousel images={images} className="" />
        </div>
      </div>
    </main>
  );
};

export default Profile;
