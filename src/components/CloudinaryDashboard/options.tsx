import React, { useState } from 'react';
import { MdOutlineCreateNewFolder } from 'react-icons/md';
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

export default function Options({ rootPath }: { rootPath: string }) {
  const [newFolderName, setNewFolderName] = useState<string>('');

  const createFolder = async () => {
    try {
      const folderName = newFolderName.trim();
      if (!folderName) {
        alert('Folder name cannot be empty');
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
        alert('Folder created successfully');
      }

      
      
      
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to create folder');
    }
  };

  return (
    <div className="w-full bg-red-200 text-center text-black flex justify-between p-4 pr-6">
      Manage Cloudinary
      <div className="flex gap-6">
        <UploadDashBoard folderPath={rootPath} />

        <Dialog>
          <DialogTrigger asChild>
            <MdOutlineCreateNewFolder className="text-3xl text-green-500 hover:text-green-400" title="Create a new folder" />
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
              <Button onClick={createFolder}>Create</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
