"use client";

import { Rating } from "@mui/material";
import { useState, useEffect } from "react";
import { CardProps } from "../../interface";
import Link from "next/link";
import Image from "next/image";
export default function Card({
  hospitalName,
  hospitalPicUrl,
  hospitalDescription,
  id,
}: CardProps) {
  const navLink = {
    pathname: `/hospital/${id}`,
    query: { id: id, hospitalPic: hospitalPicUrl, name: hospitalName },
  };
  const rating = 0;
  const [brightness, setBrightness] = useState<number>(100);
  const [showDes, setShowDes] = useState<boolean>(false);

  return (
    <>
      <div className="relative shadow-md hover:shadow-2xl hover:border-2 hover:border-neutral-200  transition-all duration-300 flex items-center flex-col justify-start rounded-t-[3rem] overflow-hidden h-[35vh] border-2">
        <div
          data-testid="testdata"
          className="absolute top-0 left-0 w-full h-full"
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
          }`}>
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
          className="text-center flex justify-center items-center px-4 py-2 hover:scale-[102%] bg-blue-700 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300 absolute bottom-4">
          <Rating
            className="mr-3 bg-white bg-opacity-20 rounded-full"
            name="simple-controlled"
            value={rating}
            precision={0.5}
          />
          <Link href={navLink}>{hospitalName} -&gt;</Link>
        </div>
      </div>
    </>
  );
}
