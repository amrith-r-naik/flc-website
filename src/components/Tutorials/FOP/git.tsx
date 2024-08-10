import React, { useState } from "react";

export default function Git() {
  const [guiMode, setGuiMode] = useState<boolean>(true);

  return (
    <div className="w-full bg-green-200 p-2 text-black">
      <br /> <br />{" "}
      <h2 className="mb-3 flex justify-between">
        <div>3. Git</div>{" "}
        <div
          onClick={() => setGuiMode((prev) => !prev)}
          className={`h-fit cursor-pointer rounded-md p-2 text-sm text-white ${
            guiMode ? "bg-green-500" : "bg-black"
          }`}
        >
          {guiMode ? "use GUI" : "use CLI (from terminal)"}
        </div>
        <div className="right-0 inline w-fit text-sm">
          {" "}
          <div>time:5-10 mins</div>
          <div>data: few mbs </div>
        </div>
      </h2>
      {!guiMode && (
        <iframe
          src="https://scribehow.com/embed/Search_for_potato_image_on_Google___aqFBaY9TZClvyVasLOv1g"
          width="100%"
          height="640"
          allowFullScreen
        ></iframe>
      )}
      <div className="h-fit w-full bg-slate-200">
        In this section, we will cover the basics of setting up a Git repository
        and uploading your project files.
        {/* Section 1: Cloning a Repository */}
        <div className="section m-3 rounded-md bg-slate-300 p-2 p-3">
          <h3 className="text-lg font-bold">1. Cloning a Repository</h3>
          <p>
            To get started with Git, the first step is often to clone an
            existing repository. You can do this using the command:
          </p>
          <code className="block rounded bg-slate-400 p-2">
            git clone &lt;repository_url&gt;
          </code>
          <p>
            This command will create a local copy of the repository on your
            machine. You should see the files and folders listed in your file
            explorer.
          </p>
          <div className="image-placeholder my-3 flex h-40 w-full items-center justify-center bg-slate-400">
            <span>Image Placeholder for cloning process</span>
          </div>
        </div>
        {/* Section 2: Making Changes and Committing */}
        <div className="section m-3 rounded-md bg-slate-300 p-2 p-3">
          <h3 className="text-lg font-bold">
            2. Making Changes and Committing
          </h3>
          <p>
            After making changes to the files, you’ll need to stage and commit
            them to your local repository. This process is done with the
            following commands:
          </p>
          <code className="block rounded bg-slate-400 p-2">git add .</code>
          <code className="block rounded bg-slate-400 p-2">
            git commit -m &quot;Your commit message&quot;
          </code>
          <p>
            The <b>git add</b> command stages your changes, and the{" "}
            <b>git commit</b> command saves them with a message describing what
            you&apos;ve changed.
          </p>
          <div className="image-placeholder my-3 flex h-40 w-full items-center justify-center bg-slate-400">
            <span>Image Placeholder for committing changes</span>
          </div>
        </div>
        {/* Section 3: Pushing to Remote Repository */}
        <div className="section m-3 rounded-md bg-slate-300 p-2 p-3">
          <h3 className="text-lg font-bold">
            3. Pushing to a Remote Repository
          </h3>
          <p>
            Finally, you’ll want to push your committed changes to the remote
            repository. Use the following command:
          </p>
          <code className="block rounded bg-slate-400 p-2">
            git push origin main
          </code>
          <p>
            Replace <b>main</b> with your branch name if you&apos;re using a
            different branch. This will upload your changes to the remote
            repository, making them available to others.
          </p>
          <div className="image-placeholder my-3 flex h-40 w-full items-center justify-center bg-slate-400">
            <span>Image Placeholder for pushing changes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
