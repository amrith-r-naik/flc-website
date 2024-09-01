import Image from "next/image";
import { useState } from "react";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

// Dummy images array
const initialImages = [
  { src: "/img5.jpeg", title: "FareWell 2024" },
  { src: "/img6.jpeg", title: "FareWell 2024" },
  { src: "/img7.jpeg", title: "FareWell 2024" },
  { src: "/img9.jpeg", title: "FareWell 2024" },
  { src: "/img8.jpeg", title: "Image 8" },
  { src: "/img10.jpeg", title: "Image 10" },
];

export default function AddGallery() {
  const [images, setImages] = useState(initialImages);
  const [title, setTitle] = useState("");

  const handleDeleteImage = (index: number) =>
    setImages(images.filter((_, i) => i !== index));

  return (
    <div>
      <div className="mb-4 mt-14 flex items-center justify-between md:mt-4">
        <h2 className="text-lg font-medium">Images</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Upload New Image</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Upload Image</DialogTitle>
              <DialogDescription>
                Add a title and upload an image. Click publish when you&#39;re
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="image" className="text-right">
                  Image
                </Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  // onChange={handleImageUpload}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button">Publish</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <table className="min-w-full border ">
        <thead>
          <tr>
            <th className="border px-4 py-2">No</th>
            <th className="border px-4 py-2">Image</th>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {images.map((image, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 text-center align-middle">
                {index + 1}
              </td>
              <td className="border px-4 py-2 text-center">
                <div className="relative mx-auto h-16 w-16 md:h-24 md:w-24">
                  <Image
                    src={image.src}
                    alt={image.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </td>
              <td className="border px-4 py-2 text-center align-middle">
                {image.title}
              </td>
              <td className="border px-4 py-2 text-center">
                <Button
                  variant="destructive"
                  onClick={() => handleDeleteImage(index)}
                  className="mx-auto"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
