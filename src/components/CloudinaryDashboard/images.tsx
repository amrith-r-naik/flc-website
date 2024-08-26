import React, { Dispatch, useState } from 'react'
import { type CloudinaryResource } from './folderIcon'
import { SlOptionsVertical } from 'react-icons/sl';
import Image from 'next/image';
import { FaCopy } from "react-icons/fa";


import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogClose,
    DialogDescription,
  } from '~/components/ui/dialog';
import { Button } from '../ui/button';
import { toast } from 'sonner';

export default function Images({image,fetchImagesByPathOfFolder}:{image:CloudinaryResource,fetchImagesByPathOfFolder:(path:string)=>void }) {
    const [options,setOptions] = useState<boolean>(false);

    const handleDelete = async () => {
        try {
          const response = await fetch("/api/cloudinary/deleteWithPublicId", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ public_id: image.public_id }),
          });
    
    
          if (response.ok) {
            toast("deleted succesfully")
          } else {
            
          }
        } catch (error) {
          console.error("Error during fetch:", error);
          toast("couldnt delete")
          
        }
      };

      const handleCopy = async (url:string) => {
        try {
          await navigator.clipboard.writeText(url);
          toast.success('Copied to clipboard!');
        } catch (err) {
          toast.error('Failed to copy!');
          console.error('Failed to copy text: ', err);
        }
      };

  return (
<div className="object-cover w-full h-full flex">
          
        <Image
              // Add the thumbnail transformation to the secure_url
              src={`${image.secure_url.replace('/image/upload/', '/image/upload/c_thumb,w_200,g_face/')}`}
              alt={image.public_id}
              width={200} // Match the width with the thumbnail transformation
              height={Math.floor((200 / image.width) * image.height)} // Adjust height proportionally
              className="object-cover w-full h-full"
            />
            <div className='bg-slate-800 w-fit h-fit relative  top-2 right-10 p-1 rounded-sm'>
            <SlOptionsVertical onClick={() => setOptions(true)} className=' hover:text-slate-400 text-2xl'/>
            </div>


            <Dialog open={options} >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>asset_id: {image.asset_id} </DialogTitle>
              <br />
              <DialogDescription>
                <p>
                Public_Id: {image.public_id}
                </p>
                <br />
                <p className='flex items-center'>
                secure_url: &nbsp; <FaCopy onClick={()=>handleCopy(image.secure_url)} className='hover:text-slate-300 text-2xl' ></FaCopy>
                </p>
                <br />
                <p>
                    Folder: {image.folder??"Root"}
                </p>
                
                <br />

              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="secondary" onClick={() => setOptions(false)}>
                  Cancel
                </Button>
              </DialogClose>
              <Button className='bg-red-500' onClick={()=>{
               if (window.confirm("Are you sure you want to delete this item?")) {
                void handleDelete()
                fetchImagesByPathOfFolder(image.folder);
              } else {
                // Deletion canceled
                
              }
              }} >
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
            
    </div>    
  )
}
