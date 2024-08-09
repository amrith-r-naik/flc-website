import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

export default function Snippet({ code }: { code?: string }) {
  const [content, setContent] = useState<string | undefined>("");
  const [codeToggle, setCodeToggle] = useState<boolean>(true);

  // Set initial content from the prop
  useEffect(() => {
    setContent(code ?? "");
  }, [code]);

  // Function to toggle between code and output view
  function setContentFun() {
    setCodeToggle((prev) => !prev);
  }

  // Handle content change in the editor
  function handleEditorChange(value: string | undefined) {
    setContent(value);
  }

  // Attach event listeners after content is rendered
  useEffect(() => {
    if (!codeToggle) {
      const player = document.getElementById("player") as HTMLAudioElement;
      const card1 = document.getElementById("1");
      const card2 = document.getElementById("2");
      const card3 = document.getElementById("3");
      const heading = document.getElementById("heading");

      const link1 =
        "https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg";
      const link2 =
        "https://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg";
      const link3 =
        "https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg";

      if (card1 && heading && player) {
        const handleClick1 = () => {
          alert("you clicked on card 1");
          heading.textContent = "Now playing: " + card1.textContent + "...";
          player.src = link1;
      
        };

        card1.addEventListener("click", handleClick1);

        // Clean up event listeners on component unmount
        return () => {
          card1.removeEventListener("click", handleClick1);
        };
      }

      if (card2 && heading && player) {
        const handleClick2 = () => {
          alert("you clicked on card 2");
          heading.textContent = "Now playing: " + card2.textContent + "...";
          player.src = link2;
         
        };

        card2.addEventListener("click", handleClick2);

        return () => {
          card2.removeEventListener("click", handleClick2);
        };
      }

      if (card3 && heading && player) {
        const handleClick3 = () => {
          alert("you clicked on card 3");
          heading.textContent = "Now playing: " + card3.textContent + "...";
          player.src = link3;
        
        };

        card3.addEventListener("click", handleClick3);

        return () => {
          card3.removeEventListener("click", handleClick3);
        };
      }
    }
  }, [codeToggle]); // Re-run the effect when codeToggle changes

  return (
    <div className="">
      {codeToggle && (
        <div className="m-auto">
          <Editor
            height="50vh"
            className="align-center rounded-md"
            onChange={handleEditorChange}
            defaultLanguage="html"
            defaultValue={content ?? "// some comment"}
            width="90%"
            theme="vs-dark"
          />
        </div>
      )}

      {!codeToggle && (
        <div
          dangerouslySetInnerHTML={{
            __html: content ?? "write code in the editor to see output",
          }}
          id="display"
          className="h-[50vh] w-[90%] resize overflow-auto rounded-sm border border-4 bg-white p-6"
        ></div>
      )}

      <button className="rounded-md bg-slate-200 p-2" onClick={setContentFun}>
        see {!codeToggle ? "code" : "output"}
      </button>
    </div>
  );
}
