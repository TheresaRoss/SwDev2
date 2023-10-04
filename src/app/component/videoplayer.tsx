"use client";
import { useEffect, useRef, useState } from "react";
export default function VideoPlayer({
  vdoSrc,
  isplaying,
}: {
  vdoSrc: string;
  isplaying: boolean;
}) {
  const vdoRef = useRef<HTMLVideoElement>(null);
  //   const [winwidth, setwinwidth] = useState(0);
  //   useEffect(() => {
  //     const handleWinWidthChange = () => {
  //       setwinwidth(window.innerWidth);
  //       alert("window width = " + window.innerWidth);
  //     };
  //     window.addEventListener("resize", handleWinWidthChange);
  //     return () => {
  //       window.removeEventListener;
  //     };
  //   }, []);
  useEffect(() => {
    if (isplaying) {
      vdoRef.current?.play();
    } else {
      vdoRef.current?.pause();
    }
  }, [isplaying]);

  return (
    <video className="w-[40%]" src={vdoSrc} ref={vdoRef} controls loop muted />
  );
}
