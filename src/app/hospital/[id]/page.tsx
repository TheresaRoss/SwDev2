"use client";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";

export default function DetailPage() {
  const path = usePathname();
  const parts = path.split("/");
  const id = parts[parts.length - 1];
  const searchParam = useSearchParams();
  const imageURL: any = searchParam.get("hospitalPic");

  return (
    <div className='min-h-screen py-10'>
      <div className='max-w-lg mx-auto p-6 rounded-lg shadow-md'>
        <h1 className='text-2xl font-semibold mb-4 flex justify-center items-center'>
          Hospital ID - {id}
        </h1>
        <div className='mb-4'>
          <Image src={imageURL} alt='Hospital' height={500} width={500} />
        </div>
        <div className='mb-2'>
          <strong>Hospital ID:</strong> {searchParam.get("id")}
        </div>
        <div className='mb-2'>
          <strong>Hospital Name:</strong> {searchParam.get("name")}
        </div>
      </div>
    </div>
  );
}
