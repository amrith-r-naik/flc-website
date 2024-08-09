import React from "react";
import Snippet from "./snippet";
import { start, card, cards, player, style1, style2, responsive, responsive2, final, semiFinal1Card } from "./constants";

export default function Project() {
  return (
    <div className="w-full bg-green-200 p-2 text-black ">
      <br /> <br />
      <h2 className="mb-3 flex justify-between">
        <div>2. Project</div>{" "}
        <div className="right-0 inline  w-fit text-sm">
          {" "}
          <div>time:30-40 mins</div>
          {/* <div>data: 300mbs </div> */}
        </div>
      </h2>
      <div className="h-fit w-full bg-slate-200">
        In this section we will be seting up Tools which will come in handy to
        finish the Projects.
        <div className="List text m-3 rounded-md bg-slate-300  p-3 ">
          <div>
            <ul className="ml-3 list-disc">
              <li>Page Skeleton -HTML</li>
              <li>Page Styling - CSS</li>
              <li>Audio player logic - JS</li>
            </ul>
          </div>
        </div>
        {/* html */}
        <div className="html text m-3 rounded-md bg-slate-300 p-3 ">
          <div>1. Page skeleton</div>

          <div className="flex-col gap-y-4 md:ml-12">
            <p>
              Create an index.html page in new folder
              <div className="Image"></div>
            </p>

            <div>
              <p> write boilerplate html in the file</p>
              <div className="inline">
                <button className="ml-12 inline">copy</button> or{" "}
                <div className="inline">shift+! and enter</div>{" "}
              </div>
              <div className="m-auto sm:w-[100%] md:w-[80%]">
                <Snippet code={start}></Snippet>
              </div>
            </div>

            <p>
              Open the file in browser - drag and drop the html file in ur
              browser
              <div className="Image"></div>
            </p>
            <br />
            <br />

            <p>
              Writing content for our empty page
              <div className="Image">
                {" "}
                <div className="m-auto sm:w-[100%] md:w-[80%]">
                  <Snippet code={card}></Snippet>
                </div>
              </div>
              <br />
              Repeat the no of cards with your liking
            </p>
            <div className="m-auto sm:w-[100%] md:w-[80%]">
              <Snippet code={cards}></Snippet>
            </div>
            <p>
              Creating Player
              <div className="Image">
                <div className="m-auto sm:w-[100%] md:w-[80%]">
                  <Snippet code={player}></Snippet>
                </div>
              </div>
            </p>
          </div>
        </div>
        {/* css */}
        <div className="css text m-3 rounded-md bg-slate-300 p-2 p-3 ">
          <div>2.Styling</div>

          <div className="md:ml-12">
            Lets use{" "}
            <b>
              {" "}
              {"<"}style{">"}
              {"</"}style{">"}
            </b>{" "}
            tag to give some styling to our music player
            <p>
              set width,height and background color to each music cards we write
              the style tag inside the{" "}
              <b>
                {" "}
                {"<"}head{">"}
                {"</"}head{">"}
              </b>{" "}
              tag ends
              <div className="m-auto sm:w-[100%] md:w-[80%]">
                <Snippet code={style1}></Snippet>
              </div>
            </p>
            <p>
              set a background image to the page, font colors, and card layot as
              flex
              <div className="m-auto sm:w-[100%] md:w-[80%]">
                <Snippet code={style2}></Snippet>
              </div>
            </p>
            <p>
              Make the page responsive, i.e suitable both for laptop screens and
              mobile screens as well
              <div className="m-auto sm:w-[100%] md:w-[80%]">
                <Snippet code={responsive}></Snippet>
              </div>
            </p>
            <p>
              Make the page responsive, i.e suitable both for laptop screens and
              mobile screens as well
              <div className="m-auto sm:w-[100%] md:w-[80%]">
                <Snippet code={responsive2}></Snippet>
              </div>
            </p>
            <br />
          </div>
        </div>
        {/* JS */}
        <div className="css text m-3 rounded-md bg-slate-300 p-2 p-3 ">
          <div>
            3.Logic with javascript{" "}
            <p>
              thers always more than 1 way to build any feature, hovever lets go
              with logic of changing the source of audio on clicking respective
              cards to play prefered music
            </p>
          </div>

          <div className="md:ml-12">
            Lets use{" "}
            <b>
              {" "}
              {"<"}script {">"}
              {"</"}script{">"}
            </b>{" "}
            tag to establish our logic
            <p>lets listen to clicking on our cards</p>
            <p>
              using id,col to identify tags
              <div className="m-auto sm:w-[100%] md:w-[80%]">
                <Snippet code={semiFinal1Card}></Snippet>
              </div>
            </p>
            <p>
              accesing and manipulating html element&apos;s property and
              behaviour
              <div className="m-auto sm:w-[100%] md:w-[80%]">
                <Snippet code={final}></Snippet>
              </div>
            </p>
            <br />
          </div>
        </div>
        <div className="Note p-3">
          <div className="text-red-800  ">Note</div>

          <div className="text ml-3 rounded-md bg-slate-300 p-2 ">
            1. When it comes to styling it is possible to write styling in
            external file and import in our html page, lookup{" "}
            <i> external css</i> <br />
            2. Same is true with JS
            <br />
            {/* 3. after installation put the installation-path in{" "} */}
            {/* <div className="m-3 text-center text-sm">
              Will come in handy if u want to practice C/C++, Java Or Python in
              future :){" "}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
