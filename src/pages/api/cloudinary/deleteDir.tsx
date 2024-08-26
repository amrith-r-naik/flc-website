import { v2 as cloudinary } from "cloudinary";
import type { NextApiRequest, NextApiResponse } from "next";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { path } = req.body as { path: string };

  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const folders = await cloudinary.api.delete_folder(path); // Correct usage
    res
      .status(200)
      .json(
        folders as {
          folders: { name: string; path: string; external_id: string };
        },
      );
  } catch (error) {
    console.error("Error deleting folder:", error); // Added logging for debugging
    res.status(500).json({ error: JSON.stringify(error) });
  }
}
