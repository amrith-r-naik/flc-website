import React, { useState } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '~/components/ui/dialog';
import { Button } from '~/components/ui/button';
import { MdCloudUpload } from "react-icons/md";

export default function UploadForm({ folderPath }: { folderPath: string }) {
  const [imageUrl, setImageUrl] = useState('');

  const handleUpload = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    // Append folderPath as a query parameter
    const queryString = new URLSearchParams({ folder: folderPath }).toString();

    try {
      const response = await fetch(`/api/cloudinary/upload?${queryString}`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setImageUrl(data.url); // Set the URL to state for displaying
      } else {
        alert(`Upload failed: ${data.error}`);
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload error');
    }
  };

  return (
    <div>

<Dialog>
          <DialogTrigger asChild>
            <MdCloudUpload className="text-3xl  hover:text-slate-300" title="Create a new folder" />
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Image Here</DialogTitle>
              {/* <DialogDescription>Choose image:</DialogDescription> */}

            </DialogHeader>

            <div className="content">
            <form onSubmit={handleUpload}>
        <input
          type="file"
          name="file"
          accept="image/*"
          required
        />
        
      
            {imageUrl && (
        <div>
          <h2>Uploaded Image:</h2>
          <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '500px' }} />
        </div>
      )}


            <DialogFooter className='mt-12'>
              
              <DialogClose asChild>
                <Button onClick={()=>setImageUrl("")} variant="secondary">Cancel</Button>
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
