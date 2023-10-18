import React, { useState, useEffect } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

import Image from "next/image";
export default async function Navbar() {
  const session = await getServerSession(authOptions);
  return (
    <div className="bg-white bg-opacity-[30%] border-b-1 border-black w-100% h-[9vh] flex items-center justify-between">
      <div className="text-white text-xl hover:scale-[102%] font-medium px-4 py-2 rounded-md ml-4">
        <Link href="/">My-Vaccine-App</Link>
      </div>
      <div className="flex items-center">
        {session ? (
          <Link href="/api/auth/signout" className="mx-2 text-xl">
            {" "}
            Sign-Out of {session.user?.name}
          </Link>
        ) : (
          <Link href="/api/auth/signin" className="mx-2 text-xl">
            {" "}
            Sign In{" "}
          </Link>
        )}
        <div className="text-white text-xl hover:scale-[102%] font-medium px-4 py-2 rounded-md">
          <Link href="/booking">Booking</Link>
        </div>
        <div className="relative px-4 py-2">
          <Image
            src={"/vaccinelogo.png"} // Assuming the image file is named "vaccinelogo.png"
            alt="Vaccine Logo"
            width={45}
            height={45}
          />
        </div>
      </div>
    </div>
  );
}
