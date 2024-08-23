import { ImageResponse } from "@vercel/og";
import type { NextApiRequest } from "next";

import { env } from "~/env";

export const config = {
  runtime: "edge",
};

export default function handler(req: NextApiRequest) {
  if (!req.url) return;
  const { searchParams } = new URL(req.url);

  const page = searchParams.has("page") ? searchParams.get("page")! : null;
  const image = searchParams.has("image") ? searchParams.get("image")! : null;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          padding: "2rem 3rem",
          color: "#fff",
          background:
            "radial-gradient(circle, rgba(66,57,102,1) 0%, rgba(33,19,55,1) 50%, rgba(16,0,32,1) 100%)",
          fontFamily: "monospace",
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        <div
          style={{
            width: "50%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "radial-gradient(circle, rgba(131,58,180,1) 0%, rgba(252,176,69,1) 100%)",
            borderRadius: "10px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            style={{
              height: "100%",
            }}
            height={0}
            src={
              image ??
              `${env.NEXT_PUBLIC_CANONICAL_URL}assets/images/flc_logo_crop.png`
            }
            alt="Banner"
          />
        </div>
        <div
          style={{
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              style={{
                height: "120px",
              }}
              height={0}
              src={
                image ??
                `${env.NEXT_PUBLIC_CANONICAL_URL}assets/images/flc_logo_crop.png`
              }
              alt="Finite Loop Club"
            />
            <div
              style={{
                fontSize: 40,
                fontWeight: 900,
              }}
            >
              Finite Loop Club
            </div>
          </div>
          <div>{page ?? ""}</div>
          <div>www.finiteloop.co.in</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
