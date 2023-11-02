import { resolve } from "path";

export async function getAllHospital() {
  // console.log("dssssssssssssss");
  await new Promise((resolve) => setTimeout(resolve, 500));
  //console.log("dsdsssdsdsdssdsdsdsdsds");
  const res = await fetch("http://localhost:5001/api/v1/hospitals", {
    next: { tags: ["hospitals"] },
  });
  if (!res.ok) {
    throw new Error("Cannot fetch");
  }

  return await res.json();
}
export async function getHospital(id: any) {
  let res;
  await new Promise((resolve) => setTimeout(resolve, 5000));
  try {
    res = await fetch(`http://localhost:5001/api/v1/hospitals/${id}`, {
      cache: "no-store",
    });
  } catch (error) {
    console.log(error);
  }

  return await res?.json();
}
