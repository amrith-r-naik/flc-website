import React, { useEffect, useRef, useState } from 'react'
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

export default function Snippet({code}:{code?:string}) {
  const [content,setContent]= useState<string>("");     
  const [codeToggle,setCodeToggle]= useState<boolean>(true);
  useEffect(()=>setContent(code as unknown as string),[])

  function setContentFun(){
    setCodeToggle((prev)=>!prev)
    // alert(code)
  }   

    function handleEditorChange(value: string, event: unknown) {
      setContent(value);
      console.log(value)
    //   alert(value)
    }

     
  return (
    <div className="">
      {codeToggle && (
        <div className="m-auto  ">
          <Editor
            height="50vh"
            className="rounded-md align-center "
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
          dangerouslySetInnerHTML={{ __html: content }}
          id="display"
          className="p-6  w-[90%]  h-[50vh] resize  overflow-auto rounded-sm border border-4 bg-white "
        ></div>
      )}

      <button className="rounded-md bg-slate-200 p-2" onClick={setContentFun}>
        see {!codeToggle ? "code" : "output"}
      </button>
    </div>
  );
}
