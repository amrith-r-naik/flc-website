import { type SignApiOptions } from "cloudinary";
import type { NextApiRequest, NextApiResponse } from "next";
import {CLOUDINARY} from "./constant"
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { paramsToSign } = req.body as SignApiOptions;

  const signature = CLOUDINARY.utils.api_sign_request(
    paramsToSign as SignApiOptions,
    process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET!,
  );

  res.status(200).json({ signature });
}
