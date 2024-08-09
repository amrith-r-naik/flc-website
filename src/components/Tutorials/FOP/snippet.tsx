import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

export default function Snippet({ code }: { code?: string }) {
  const [content, setContent] = useState<string | undefined>("");
  const [codeToggle, setCodeToggle] = useState<boolean>(true);

  // Set initial content from the prop
  useEffect(() => {
    setContent(code??"refresh the page");
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
      const heading = document.getElementById("heading");

      const links: Record<string, string> = {
        1: "https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg",
        2: "https://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg",
        3: "https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",
      };

      const cards = Array.from(document.querySelectorAll(".songCard"));

  
          
          const card1 = document.getElementById("1");
          

          if (card1 && heading) {
            const handleClick = () => {
              alert("you clicked on card 1");
              heading.textContent = "Now playing: " + card1.textContent + "...";
            };

            card1.addEventListener("click", handleClick);
          }
        


      if (player && heading) {
        cards.forEach((card) => {
          const cardId = card.id;
          const detail = card.querySelector(".detail")?.textContent;

          const handleClick = () => {
            alert(`you clicked on card ${cardId}`);
            heading.textContent = `Now playing: ${detail}...`;
            player.src = links[cardId]!;
          
          };

          card.addEventListener("click", handleClick);

          // Clean up event listeners on component unmount
          return () => {
            card.removeEventListener("click", handleClick);
          };
        });
      }
    }
  }, [codeToggle]);
  
  
  
  // Re-run the effect when codeToggle changes

  


     

return (
  <div className="relative">
    {codeToggle && (
      <div className="relative z-10">
        <Editor
          height="50vh"
          className="align-center rounded-md sm:w-full md:w-[90%]"
          onChange={handleEditorChange}
          defaultLanguage="html"
          value={content ?? "// codebase is empty"}
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
