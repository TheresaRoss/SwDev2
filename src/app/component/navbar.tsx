import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className='bg-white bg-opacity-[30%] border-b-1 border-black w-100% h-[9vh] rounded-b-xl flex items-center justify-between'>
      <div className='text-white text-xl hover:scale-[102%] font-medium px-4 py-2 rounded-md ml-4'>
        <Link href='/'>My-Vaccine-App</Link>
      </div>
      <div className='flex items-center'>
        <div className='text-white text-xl hover:scale-[102%] font-medium px-4 py-2 rounded-md'>
          <Link href='/booking'>Booking</Link>
        </div>
        <div className='relative px-4 py-2'>
          <Image
            src={"/vaccinelogo.png"} // Assuming the image file is named "vaccinelogo.png"
            alt='Vaccine Logo'
            width={45}
            height={45}
          />
        </div>
      </div>
    </div>
  );
}
