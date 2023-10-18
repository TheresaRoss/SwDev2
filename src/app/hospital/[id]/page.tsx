import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import { getHospital } from "@/lib/getHospitals";

export default async function DetailPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getHospital(params.id);
  return (
    <div className="min-h-screen py-10">
      <div className="max-w-lg mx-auto p-6 rounded-lg shadow-md">
        <div className="flex  flex-row ">
          <div className="mb-4 w-[60%]">
            <Image
              src={data.data.picture}
              alt="Hospital"
              height={600}
              width={600}
            />
          </div>
          <div className="ml-4 w-[40%]">
            <div className="mb-2">
              <strong>Hospital Name:</strong> {data.data.name}
            </div>
            <div className="mb-2">
              <strong>Address:</strong> {data.data.address}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
