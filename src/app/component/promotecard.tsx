"use client";
import { useState, useRef, useEffect } from "react";
import VideoPlayer from "./videoplayer";
import useWindowListener from "../asset/usewindowlistener";
export default function PromoteCard() {
  const [playing, setPlaying] = useState<boolean>(true);

  const cardRef = useRef(null); // Create a ref for the card component

  const handleContextMenu = (e: Event) => {
    e.preventDefault(); // Prevent the default context menu
    console.log("to");
  };

  // Use the custom hook to listen for the 'contextmenu' event on the card element
  useWindowListener("contextmenu", handleContextMenu, cardRef.current);
  useEffect(() => {
    // Log the current value of cardRef.current when the component mounts
    console.log("cardRef.current:", cardRef.current);
  }, []);

  return (
    <div
      ref={cardRef}
      className="mt-8 p-5 rounded-3xl  bg-gradient-to-r from-[rgba(0,0,255,0.2)] via-[rgba(75,0,130,0.2)] to-[rgba(128,0,128,0.2)] justify-center mx-20 w-[65%] flex flex-row">
      <VideoPlayer vdoSrc="/getvaccine.mp4" isplaying={playing} />
      <div className="ml-5 flex flex-col py-5 justify-between">
        <h1 className="text-2xl font-semibold">Get Your Vaccine Today</h1>
        <div>
          <button
            id="clicktopause"
            onClick={() => {
              setPlaying(!playing);
            }}
            className="px-5 py-2 bg-blue-700 rounded-2xl">
            {playing ? "Pause" : "Play"}{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
