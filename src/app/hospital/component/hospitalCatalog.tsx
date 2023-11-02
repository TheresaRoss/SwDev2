import Card from "./card";
import Link from "next/link";

export default async function HospitalCatalog(data: any) {
  const datacome = await data.data;
  //console.log(datacome);
  return (
    <div className="grid grid-cols-3 gap-6 px-10">
      {datacome.data.map((element: any) => {
        return (
          <Link href={`/hospital/+${element.id}`}>
            <Card
              key={element.id}
              hospitalName={element.name}
              hospitalPicUrl={element.picture}
              hospitalDescription={element.postalcode}
              id={element.id}
            />
          </Link>
        );
      })}
    </div>
  );
}
