import { type UploadApiResponse } from "cloudinary";
import Image from "next/image";
import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";
import { toast } from "sonner";
import { useRefetchContext } from "~/context/refetchContext";
import { LuPencil } from "react-icons/lu";
import { Button } from "~/components/ui/button";
import { VscLoading } from "react-icons/vsc";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogClose,
} from "~/components/ui/dialog";
import { api } from "~/utils/api";

interface UploadFormProps {
  oldImage:string;
}

export default function UploadForm({oldImage}: UploadFormProps) {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [preview, setPreview] = useState<string|null>(null);
  const { executeRefetch } = useRefetchContext("user");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const editUserImage = api.user.editUserImage.useMutation();

  const handleChange= async (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    for (const entry of formData.entries()) {
      const [,value] = entry;
      if (value instanceof File) {
        const previewUrl = URL.createObjectURL(value);
        setPreview(previewUrl)
        console.log(preview)
      } 
    }
  }
  const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    preview?URL.revokeObjectURL(preview):""  // free up memory 
    setPreview(null)
    setIsLoading(true);
   
    // Append folderPath as a query parameter
    const queryString = new URLSearchParams({ folder: "UserProfiles" }).toString();

    try {
      const response = await fetch(`/api/cloudinary/upload?${queryString}`, {
        method: "POST",
        body: formData,
      });


      const data = (await response.json()) as UploadApiResponse;
      if (response.ok) {
        toast.success("uploaded succesfully");
        setImageUrl(data.url); // Set the URL to state for displaying
        editUserImage.mutate(
          {
            image: data.url,
          },
          {
            onSuccess: () => {
              void handleDelete()
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
        
      } else {
        toast.error(`Upload failed: ${data.error}`);
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Upload error");
    }finally{
      setIsLoading(false);
    }
  };

  const handleCopy = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy!");
      console.error("Failed to copy text: ", err);
    }
  };


  const handleDelete = async () => {
    try {
      const response = await fetch("/api/cloudinary/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url:oldImage  }),
      });

      if (response.ok) {
        // toast("deleted succesfully");
      } else {
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      // toast("couldnt delete");
    }
  };
  return (
    <div className="relative bottom-[-100px] right-2">
      <Dialog>
        <DialogTrigger asChild>
          <div className="bg-slate-700  hover:text-slate-300 w-fit p-1 text-sm rounded-md border-1 border-white">
            <LuPencil
            className="text-sm hover:text-slate-700 inline"
            title="Upload Image"
          /> Edit</div>
          
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Image Here</DialogTitle>
          </DialogHeader>

          <div className="content">
            <form
              onChange={(e)=>handleChange(e)}
              onSubmit={(e) => {
                void handleUpload(e);
                

              }}
            >
              <input type="file" name="file" accept="image/*" required  />
              {preview && (
                <div className="m-auto mt-6">
                  <h2>Preview Image:</h2>
                  <Image
                    src={preview}
                    className="m-auto"
                    alt="Uploaded"
                    width={500}
                    height={500}
                    style={{ maxWidth: "400px" }}
                  />
                </div>
              )}
              {imageUrl && (
                <div className="m-auto mt-6">
                  <h2>Uploaded Image:</h2>
                  <Image
                    src={imageUrl}
                    className="m-auto"
                    alt="Uploaded"
                    width={500}
                    height={500}
                    style={{ maxWidth: "400px" }}
                  />
                  <p className="mt-6 flex items-center">
                    {" "}
                    URL: &nbsp; &nbsp;
                    <FaCopy
                      onClick={() => handleCopy(imageUrl)}
                      className="text-2xl hover:text-slate-300"
                    ></FaCopy>
                  </p>
                </div>
              )}

              <DialogFooter className="mt-12">
                <DialogClose asChild>
                  <Button onClick={() => {
                    setImageUrl("")
                    preview?URL.revokeObjectURL(preview):"" // free up memory
                    setPreview(null)
                  }} >
                    Cancel
                  </Button>
                </DialogClose>

                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <div className="flex items-center">
                      <VscLoading className="animate-spin mr-2" />
                      Uploading...
                    </div>
                  ) : (
                    "Upload"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
