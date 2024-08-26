import React, { useState } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogClose,
} from '~/components/ui/dialog';
import { type UploadApiResponse } from 'cloudinary';
import { Button } from '~/components/ui/button';
import { MdCloudUpload } from 'react-icons/md';
import Image from 'next/image';
import { toast } from 'sonner';

interface UploadFormProps {
  folderPath: string;
  fetchImagesByPathOfFolder:(path:string)=>void
}

export default function UploadForm({ folderPath,fetchImagesByPathOfFolder }: UploadFormProps) {
  const [imageUrl, setImageUrl] = useState<string>('');

  const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    // Append folderPath as a query parameter
    const queryString = new URLSearchParams({ folder: folderPath }).toString();

    try {
      const response = await fetch(`/api/cloudinary/upload?${queryString}`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json() as UploadApiResponse;
      if (response.ok) {
        toast.success("uploaded succesfully")
        setImageUrl(data.url); // Set the URL to state for displaying
      } else {
        toast.error(`Upload failed: ${data.error}`);
      }
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Upload error');
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <MdCloudUpload className="text-3xl hover:text-slate-700" title="Upload Image" />
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Image Here</DialogTitle>
            
          </DialogHeader>

          <div className="content">
            <form onSubmit={(e)=>{ 
              void handleUpload(e)
              fetchImagesByPathOfFolder(folderPath)
            }}>
              <input
                type="file"
                name="file"
                accept="image/*"
                required
              />
              {imageUrl && (
                <div>
                  <h2>Uploaded Image:</h2>
                  <Image
                    src={imageUrl}
                    alt="Uploaded"
                    width={500}
                    height={500}
                    style={{ maxWidth: '500px' }}
                  />
                </div>
              )}

              <DialogFooter className='mt-12'>
                <DialogClose asChild>
                  <Button onClick={() => setImageUrl('')} variant="secondary">Cancel</Button>
                </DialogClose>
                <Button type="submit">Upload</Button>
              </DialogFooter>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
