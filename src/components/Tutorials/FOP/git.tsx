import React, { useState } from "react";



import TutorialCarasoul from "./carasoul";


export default function Git() {

  const images1 = [
    "/images/tutorial/g1.jpeg",
    "/images/tutorial/g2.jpeg",
    "/images/tutorial/g3.jpeg",
  ];

    const images2 = [
    "/images/tutorial/g4.jpeg",
    "/images/tutorial/g5.jpeg",
    "/images/tutorial/g6.jpeg",
    "/images/tutorial/g7.jpeg",
    "/images/tutorial/g8.jpeg",
  ];
  return (
    <div className="w-full bg-green-200 p-2 text-black">
      <br /> <br />{" "}
      <h2 className="mb-3 flex justify-between">
        <div>3. Git</div>{" "}
      
        <div className="right-0 inline w-fit text-sm">
          {" "}
          <div>time:5-10 mins</div>
          <div>data: few mbs </div>
        </div>
      </h2>
      
      <div className="h-fit w-full bg-slate-200">
        In this section, we will cover the basics of setting up a Git repository
        and uploading your project files.
        {/* Section 1: Cloning a Repository */}
        <div className="section m-3 rounded-md bg-slate-300 p-2 p-3">
          <h3 className="text-lg font-bold">1.Setting up a new Repository</h3>
          <p>
            let us create new repository to store our code, in Git-Hub
            Follow the instructions
          </p>
          
          <p className="ml-12 rounded bg-slate-400 p-2 w-fit">
           <li>open https://github.com/</li>
           
           <li>find &quot;<b> youre repositories</b> &quot; on the RHS</li>
           <li>press on &quot;<b> New</b> &quot; button again on the RHS </li>
           <li>Fill the basic details and ur repo will be ready</li>
          </p>
          <div className="image-placeholder my-3 flex  h-[500px] w-full items-center justify-center bg-slate-400">
            <TutorialCarasoul images={images1}/>
            {/* <img src={image1} alt="" className="w-24 " /> */}
          </div>
        </div>
        {/* Section 2: Making Changes and Committing */}
        <div className="section m-3 rounded-md bg-slate-300 p-2 p-3">
          <h3 className="text-lg font-bold">
            2. Making Changes and Committing - operating from VS Code
          </h3>
          <p>
            IN this section we will be exploring how can we send the code we have in our system to our repository, that we created in the latest step
            
            <li>firstly open terminal, press on the <b> bottom-left</b>  button or &quot;  <b>ctrl+~</b>  &quot; for shortcut</li>
            <li> Select <b>git Bash</b> as termina, Run the following commands <br />
            <div className="ml-12 rounded bg-slate-400 p-2 w-fit">
            <li>git init</li>
            <li>git add .</li>
            <li>git commit -m &quot; first commit&quot; </li>
            <li>git remote add origin &lt;link_of_ur_repository&gt;.git</li>
            <li>git push origin main</li>
            </div>
             </li>
             <br />
            <li>Find the commands used in the following images</li>
            
          </p>
          
          
          
          <div className="image-placeholder my-3 flex h-[500px] w-full items-center justify-center bg-slate-400">
            <TutorialCarasoul images={images2}/>
          </div>
        </div>
        {/* Section 3: Pushing to Remote Repository */}
        <div className="section m-3 rounded-md bg-slate-300 p-2 p-3">
          <h3 className="text-lg font-bold">
            3. Pushing to a Remote Repository
          </h3>
          <p>
            Finally, after pushing the code from the terminal we can see the code in our repo and move ahead for hosting it.
          </p>
          
          
          <div className="image-placeholder my-3 flex h-[500px] w-full items-center justify-center bg-slate-400">
            <img src="/images/tutorial/g9.jpeg" alt=""   className="h-full" />
          </div>

          
        </div>

          <div className="Note p-3">
          <div className="text-red-800  ">Note</div>

          <div className="text ml-3 rounded-md bg-slate-300 p-2 ">
           When it comes to version controls(i.e git hub here) consider the following points <br />
            <div className="ml-6">
              1. All the features that are there through buttons in github are also there as commands to be used through terminal <br />
              2. to start with <i>these 3 commands</i> are sufficient
              <br />
              3. Developers prefer to using most of the features via terminal as their experience grows{" "}
          
            </div>
    
          </div>
        </div>

        
      </div>
    </div>
  );
}