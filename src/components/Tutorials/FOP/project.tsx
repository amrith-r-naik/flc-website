import React from "react";

import {
  start,
  card,
  cards,
  player,
  style1,
  style2,
  responsive,
  responsive2,
  final,
  semiFinal1Card,
} from "./constants";
import Snippet from "./snippet";

export default function Project() {
  return (
    <div className="w-full bg-green-200 p-2 text-black">
      <br />
      <br />
      <h2 className="mb-3 flex justify-between">
        <div>2. Project</div>
        <div className="right-0 inline w-fit text-sm">
          <div>Time: 30-40 mins</div>
        </div>
      </h2>

      <div className="h-fit w-full bg-slate-200">
        In this section, we will be setting up tools that will be essential for
        completing the project.
        <div className="List text m-3 rounded-md bg-slate-300 p-3">
          <div>
            <ul className="ml-3 list-disc">
              <li>Page Skeleton - HTML</li>
              <li>Page Styling - CSS</li>
              <li>Audio Player Logic - JavaScript</li>
            </ul>
          </div>
        </div>
        {/* HTML Section */}
        <div className="html text m-3 rounded-md bg-slate-300 p-3">
          <div>1. Page Skeleton - HTML</div>

          <div className="flex-col gap-y-4 md:ml-12">
            <p>
              Start by creating a new folder for your project. Inside this
              folder, create an `index.html` file. This file will serve as the
              main structure of our webpage.
            </p>

            <div>
              <p>
                Open the `index.html` file and write the basic HTML boilerplate.
                You can either write it manually or use a shortcut like
                `shift+!` followed by `enter` to generate it quickly.
              </p>
              <div className="m-auto sm:w-[100%] md:w-[80%]">
                <Snippet code={start} />
              </div>
            </div>

            <p>
              To view your page, open the `index.html` file in a browser by
              dragging and dropping it into the browser window.
            </p>
            <br />
            <br />

            <p>
              Let&apos;s start adding content to the page by creating a card
              element that will represent a music track. This card will contain
              information such as the song title and an image.
            </p>

            <div className="Image">
              <div className="m-auto sm:w-[100%] md:w-[80%]">
                <Snippet code={card} />
              </div>
            </div>

            <p>
              You can duplicate this card element to create multiple cards,
              allowing you to represent multiple music tracks.
            </p>

            <div className="m-auto sm:w-[100%] md:w-[80%]">
              <Snippet code={cards} />
            </div>

            <p>
              Next, let&apos;s create an audio player that will play the
              selected music track when a card is clicked.
            </p>

            <div className="Image">
              <div className="m-auto sm:w-[100%] md:w-[80%]">
                <Snippet code={player} />
              </div>
            </div>
          </div>
        </div>
        {/* CSS Section */}
        <div className="css text m-3 rounded-md bg-slate-300 p-3">
          <div>2. Page Styling - CSS</div>

          <div className="md:ml-12">
            <p>
              To style our music player, we&apos;ll use a &lt;style&gt; tag
              within the &lt;head&gt; section of the HTML file. We&apos;ll start
              by setting the width, height, and background color for each music
              card.
            </p>

            <div className="m-auto sm:w-[100%] md:w-[80%]">
              <Snippet code={style1} />
            </div>

            <p>
              Now, we&apos;ll add a background image to the page, set the font
              colors, and arrange the cards using Flexbox for a clean layout.
            </p>

            <div className="m-auto sm:w-[100%] md:w-[80%]">
              <Snippet code={style2} />
            </div>

            <p>
              Finally, we&apos;ll ensure that the page is responsive, meaning it
              looks good on both laptop screens and mobile devices. We&apos;ll
              do this by writing media queries and adjusting the layout based on
              the screen size.
            </p>

            <div className="m-auto sm:w-[100%] md:w-[80%]">
              <Snippet code={responsive} />
            </div>

            <p>
              We&apos;ll make further adjustments to fully optimize the
              page&apos;s responsiveness.
            </p>

            <div className="m-auto sm:w-[100%] md:w-[80%]">
              <Snippet code={responsive2} />
            </div>
            <br />
          </div>
        </div>
        {/* JavaScript Section */}
        <div className="js text m-3 rounded-md bg-slate-300 p-3">
          <div>
            3. Adding Logic with JavaScript
            <p>
              There are multiple ways to implement features, but we&apos;ll go
              with a simple approach where clicking on a music card changes the
              audio source, allowing the player to play the selected track.
            </p>
          </div>

          <div className="md:ml-12">
            <p>
              We&apos;ll use the &lt; script &gt;tag to add our JavaScript
              logic. The first step is to listen for click events on the music
              cards.
            </p>

            <p>
              We&apos;ll use IDs and class names to identify and manipulate the
              necessary HTML elements.
            </p>

            <div className="m-auto sm:w-[100%] md:w-[80%]">
              <Snippet code={semiFinal1Card} />
            </div>

            <p>
              Finally, we&apos;ll write the logic to change the audio source
              when a card is clicked, allowing users to play different tracks by
              selecting different cards.
            </p>

            <div className="m-auto sm:w-[100%] md:w-[80%]">
              <Snippet code={final} />
            </div>
            <br />
          </div>
        </div>
        <div className="Note p-3">
          <div className="text-red-800">Note</div>

          <div className="text ml-3 rounded-md bg-slate-300 p-2">
            1. For styling, it&apos;s possible to write CSS in an external file
            and link it to your HTML page. This method is called external CSS.
            <br />
            2. The same concept applies to JavaScript, where you can write
            scripts in an external JS file and link it to your HTML page.
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
