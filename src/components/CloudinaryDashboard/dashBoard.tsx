import React, { useState, useEffect } from 'react';
import FolderIcon, { type CloudinaryResource, type CloudinaryResponse, createPathArray } from './folderIcon';
import Options from './options';
import Images from "./images"
export default function Dashboard() {
  const [folders, setFolders] = useState<{ name: string; path: string; external_id: string }[]>([]);
  const [rootPath,setRootPath]=useState<string>("/");
  const [pathArray,setPathArray]=useState<string[]>(["Home"])
  const [images, setImages] = useState<CloudinaryResource[]>([]);

  useEffect(() => {
    const endpoint = rootPath === "/" ? '/api/cloudinary/listDir' : '/api/cloudinary/findDir';
    

    fetch(endpoint, {
      method: "POST", // Use POST method
      headers: {
        "Content-Type": "application/json", // Specify that you're sending JSON
      },
      body: JSON.stringify({ path: rootPath }), // Send the pathname as part of the request body
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received:", data);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        setFolders(data.folders as { name: string; path: string; external_id: string }[]); // Assuming `data.folders` is an array of folder objects
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });

      
  }, [rootPath]);

  const fetchImagesByPathOfFolder = async (path:string) => {
    try {
      const response = await fetch('/api/cloudinary/getImages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ path }), // Send path in the request body
      });
  
      if (!response.ok) {
        // Handle non-OK responses
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json() as CloudinaryResponse;
  
      // Check if resources are present and set the images state
      if (data.resources && data.resources.length > 0) {
        setImages(data.resources);
        
      } else {
        // If no resources are found, set images to an empty array
        setImages([]);
        
      }
  
    } catch (error) {
      // Handle errors
      console.error('There was a problem with the fetch operation:', error);
      // Set images to an empty array in case of error
      setImages([]);
      
    }
  };
  



  return (
    <div className='relative md:top-[-80px] z-50 sm:top-[0px]'> 
      
      <Options  rootPath={rootPath}/>

      <p className='my-6 mx-4 '> 
        <p className={`inline cursor-pointer text-blue-600 hover:underline `} onClick={() => {
        setRootPath("/");
        setPathArray([""]);
        setImages([]);
        void fetchImagesByPathOfFolder("/")
      }}><b>Home</b> &nbsp;</p>
      {pathArray?.map((each, index) => (
  <div key={each} className="inline-flex items-center">
    <p
      className={`inline cursor-pointer text-blue-600 hover:underline ${
        index === pathArray.length - 1 ? 'font-bold' : ''
      }`}
      onClick={() => {
        setRootPath(prev => {
          const match = prev.match(new RegExp(`^(.*${each})`));
          const newPath = match ? match[0] : prev;
          setPathArray(createPathArray(newPath));
          return newPath;
        });
      }}
    >
      / {each}
    </p>
    {index < pathArray.length - 1 && (
      <span className="mx-2 text-gray-500">&nbsp;</span>
    )}
  </div>
))}

</p>


      <div>

        {folders?.map((each,index)=>(<div key={index}>
            <FolderIcon setRootPath={setRootPath} setPathArray={setPathArray} fetchImagesByPathOfFolder={fetchImagesByPathOfFolder} name={each.name} path={each.path}  />
           
        </div>))}
        {/* {JSON.stringify(images)} */}
        <ul className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5">
        {images?.map(image => (
          <li key={image.public_id} className="overflow-hidden">
            
            <Images image={image} fetchImagesByPathOfFolder={fetchImagesByPathOfFolder}></Images>
            {/* <Image
              // Add the thumbnail transformation to the secure_url
              src={`${image.secure_url.replace('/image/upload/', '/image/upload/c_thumb,w_200,g_face/')}`}
              alt={image.public_id}
              width={200} // Match the width with the thumbnail transformation
              height={Math.floor((200 / image.width) * image.height)} // Adjust height proportionally
              className="object-cover w-full h-full"
            /> */}
          </li>
        ))}
    </ul>

    {images.length==0&&(<div className='text-center m-auto mt-28'>No images here</div>)}       
       
      </div>
    </div>
  );
}
