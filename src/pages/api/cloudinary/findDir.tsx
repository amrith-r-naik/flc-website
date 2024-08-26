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
    const {folders} = await cloudinary.api.sub_folders(path) as {folders:{name:string,path:"string",external_id:"string"}};;
    console.log(folders);
    res.status(200).json({ folders });
  } catch (error) {
    console.error("Error fetching folders:", error);
    res.status(500).json({ error: "Failed to fetch folders" });
  }
}
// https://res.cloudinary.com/dh0sqelog/image/upload/c_thumb,w_200,g_face/v1708877807/samples/woman-on-a-football-field.jpg
//https://res.cloudinary.com/dh0sqelog/image/upload/v1708877807/samples/woman-on-a-football-field.jpg