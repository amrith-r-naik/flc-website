/* eslint-disable @typescript-eslint/no-misused-promises */

import type { NextApiRequest, NextApiResponse } from "next";
import { v2 as cloudinary, } from "cloudinary";
import { IncomingForm } from "formidable";


cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});


export const config = {
  api: {
    bodyParser: false, // Disable the default body parser
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const form = new IncomingForm();
  
  // Parse the incoming form data
  form.parse(req, async (err, _fields, files) => {
    if (err) {
      console.error("Error parsing the form:", err);
      return res.status(500).json({ error: "Error parsing the file" });
    }

    const file = files.file?.[0] ; // Extract the file from the parsed data

    if (!file) {
      console.error("No file uploaded");
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Read the file to confirm it was received (optional)
    try {
      
      const folder = req.query.folder as string | undefined;
  
      if(file){
        console.log("recieved")
      }
      
    

      const uploadResult = await cloudinary.uploader.upload(file.filepath, {
        folder: folder!="/"?folder:"", 
        public_id: file.originalFilename as unknown as string, 
      });
      res.status(200).json({ url: uploadResult.secure_url });
     
    } catch (readError) {
      console.error("Error reading the file:", readError);
      res.status(500).json({ error: "Error reading the file" });
    }
  });
}


