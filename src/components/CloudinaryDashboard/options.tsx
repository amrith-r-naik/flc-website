import React, { useState } from 'react';
import { MdOutlineCreateNewFolder, MdRefresh } from 'react-icons/md';
import UploadDashBoard from './upload';
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
import { Input } from '~/components/ui/input';
import { toast } from 'sonner';

export default function Options({ rootPath ,setRootPath,handleRefresh ,fetchImagesByPathOfFolder}: { rootPath: string, setRootPath: React.Dispatch<React.SetStateAction<string>>,handleRefresh:()=>void , fetchImagesByPathOfFolder:(path:string)=>void }) {
  const [newFolderName, setNewFolderName] = useState<string>('');

  const createFolder = async () => {
    try {
      const folderName = newFolderName.trim();
      if (!folderName) {
        toast.error('Folder name cannot be empty');
        return;
      }

      const fullPath = rootPath === '/' ? folderName : `${rootPath}/${folderName}`;

      const response = await fetch('/api/cloudinary/createDir', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rootPath: fullPath }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      if (response.ok) {
        console.log('Data received:');
        toast.success('Folder created successfully');
      }

      
      
      
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to create folder');
    }
  };

  return (
    <div className="w-full bg-red-200 text-center text-black flex justify-between p-4 pr-6">
      Manage Cloudinary
      <div className="flex gap-6">
        <MdRefresh className='text-3xl hover:text-slate-300"' title='refresh page' onClick={handleRefresh} /> 
        <UploadDashBoard folderPath={rootPath} fetchImagesByPathOfFolder={fetchImagesByPathOfFolder}  />

        <Dialog>
          <DialogTrigger asChild>
            <MdOutlineCreateNewFolder className="text-3xl text-black-500 hover:text-slate-700" title="Create a new folder" />
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>New Folder</DialogTitle>
              <DialogDescription>Enter the name of the new folder:</DialogDescription>
            </DialogHeader>

            <div className="content">
              <Input
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
                placeholder="Folder name"
              />
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="secondary">Cancel</Button>
              </DialogClose>
              <Button onClick={()=>{void createFolder()
              setRootPath(prev=>prev)
                
              }}>Create</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
