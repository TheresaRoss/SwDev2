"use client";
import { useState, useEffect } from "react";
import CardProps from "../interface";
import Image from "next/image";
export default function Card({
  hospitalName,
  hospitalPicUrl,
  hospitalDescription,
}: CardProps) {
  // const originalText: String = hospitalName;

  // const initialTypingDelay: number = 10;
  // const typingSpeed: number = 60;
  // const [typedText, setTypedText] = useState<string>("");

  // const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [brightness, setBrightness] = useState<number>(100);
  const [showDes, setShowDes] = useState<boolean>(false);

  // useEffect(() => {
  //   let timeout: NodeJS.Timeout;

  //   // const startTyping = () => {
  //   //   if (currentIndex <= originalText.length) {
  //   //     setTypedText(originalText.slice(0, currentIndex));
  //   //     setCurrentIndex((prevIndex) => prevIndex + 1);
  //   //     timeout = setTimeout(startTyping, typingSpeed + Math.random() * 20);
  //   //   }
  //   // };

  //   timeout = setTimeout(startTyping, initialTypingDelay);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [currentIndex, initialTypingDelay, typingSpeed]);

  return (
    <>
      <div className='relative border-gray-400 transition-all duration-300 flex items-center flex-col justify-start rounded-t-[3rem] overflow-hidden h-[35vh] border-2'>
        <div
          className='absolute top-0 left-0 w-full h-full'
          style={{
            backgroundImage: `url(${hospitalPicUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            filter: `brightness(${brightness}%)`,
            zIndex: -10,
            transition: "filter 0.3s ease-in-out",
          }}
        />
        <div
          className={`transition-opacity duration-500 pt-8 px-3 ${
            showDes ? "opacity-100" : "opacity-0 "
          }`}
        >
          {hospitalDescription}
        </div>
        <div
          onMouseEnter={() => {
            setBrightness(40);
            setShowDes(true);
          }}
          onMouseLeave={() => {
            setBrightness(100);
            setShowDes(false);
          }}
          className='text-center px-4 py-2 hover:scale-[102%] bg-blue-700 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300 absolute bottom-4'
        >
          <span>{hospitalName} -&gt;</span>
        </div>
      </div>
    </>
  );
}
