import dynamic from "next/dynamic";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";



import { api } from "~/utils/api";
import { type createEventZ } from "~/zod/eventZ";



import { modules, devices } from "./constants";


const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

export default function Editor({
  eventId,
  id,
  value,
  FUNC,
}: {
  eventId?: number;
  id?: string;
  value?: string;
  FUNC?: (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | React.FormEvent<HTMLButtonElement>,
  ) => void;
}) {
  const [text, setText] = useState("");
  const [displayWidth, setDisplayWidth] = useState(360);
  const [displayHeight, setDisplayHeight] = useState(740);
  const [preview, setPreview] = useState(false);

    const onChange = (text: string) => {
      setText(text);
      if (FUNC) {
        const event = {
          target: {
            id,
            value: text,
            type: "text",
          },
        } as React.ChangeEvent<HTMLInputElement>;
        FUNC(event);
      }
      console.log(text);
    };

  // storing content in db
  const onConfirmEdit = async () => {
    try {

      console.log("Event description updated successfully!");
      alert(
        `Event description updated successfully! \n id :${eventId ?? "cly358cjt0000whuimrz5so25"}`,
      );
    } catch (error) {
      console.error("Error updating event description:", error);
    }
  };

  // setting size of display when its changed with mouse
  const setSizeOfDisplay = () => {
    const displayElement = document.getElementById("display");
    if (displayElement) {
      const { width, height } = displayElement.getBoundingClientRect();
      console.log(width, height);
      setDisplayWidth(width);
      setDisplayHeight(height);
    }
  };

  // setting size of display based on device selected
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDevice = event.target.value;
    console.log(`Selected device: ${selectedDevice}`);

    devices.forEach((device) => {
      if (device[0] === selectedDevice) {
        setDisplayWidth(device[1] as number);
        setDisplayHeight(device[2] as number);    
      }
    });
  };

  const handleToggle = () => {
    setPreview(!preview);
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.core.css"
        />
      </Head>

      <div className="mt-12   ">
        <div className="bg-white p-1 rounded-md">
        <ReactQuill
          theme="snow"
          placeholder="Type here"
          value={text}
          id={id}
          style={{ borderRadius: "0px", border: "none" }}  
          onChange={onChange}
          modules={modules}
          className="m-3 border-hidden  m-auto bg-white text-black sm:m-auto sm:mx-3 sm:w-full md:m-auto   md:w-full lg:w-full"
        />
        </div>
        <div className="md:2/3 mx-3 flex w-full flex-col justify-between sm:w-[90%] md:m-auto md:w-[90%] md:flex-row lg:m-auto lg:w-1/2">
          <div className="md m-3 ml-0  flex-1 rounded-md bg-slate-700 p-3 text-white">
            <label htmlFor="toggle">Preview content on other devices</label>
            <input
              type="checkbox"
              name="toggle"
              onClick={handleToggle}
              id="toggle"
              className="m-2 bg-slate-600"
            />
          </div>

          {/* <button
            onClick={onConfirmEdit}
            className="m-3 mr-0 flex-1 content-center rounded-md bg-slate-700 p-3 text-white"
          >
            Confirm Edit
          </button> */}
        </div>
      </div>

      {/* Choose device for preview */}
      {preview && (
        <div className="m-auto mb-6 flex h-fit w-fit justify-center rounded-md bg-slate-700 p-4 text-white">
          <div>
            <select
              name="device"
              id="device"
              onChange={handleChange}
              className="bg-slate-600 text-white"
            >
              {devices.map((device, index) => (
                <option value={device[0]} key={index}>
                  {device[0]}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p className="ms-6">
              w*h = {displayWidth} * {displayHeight}
            </p>
          </div>
        </div>
      )}

      {/* Device Preview */}
      {preview && (
        <div
          className="ql-container quill sm:mx-3 md:m-auto lg:m-auto"
          data-gramm="false"
        >
          <div
            dangerouslySetInnerHTML={{ __html: text }}
            id="display"
            className="ql-editor  m-auto mb-16 h-screen  resize overflow-auto rounded-sm border border-4 bg-white  text-black"
            onMouseDown={setSizeOfDisplay}
            style={{width:displayWidth,height:displayHeight}}
          ></div>
        </div>
      )}
    </>
  );
}