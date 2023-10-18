import { useSession } from "next-auth/react";
import Form from "./component/form";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import getUserData from "@/lib/getUserData";
export default async function Booking() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  const profile = await getUserData(session.user.token);
  const since = new Date(profile.data.createdAt);

  return (
    <div className="flex flex-col  justify-center items-center h-[91vh]">
      <div className="flex flex-col bg-slate-800 p-10 bg-opacity-50 mb-10 items-center justify-center">
        <strong className="text-xl ">Profile</strong>
        <div className=" flex flex-col">
          <span>Name: {profile.data.name}</span>
          <span>Email: {profile.data.email}</span>
          <span>Tel: {profile.data.tel}</span>
          <span>Member Since: {since.toString()} </span>
        </div>
      </div>
      <span className="mb-5 text-3xl">Booking Page Information</span>
      <Form />
    </div>
  );
}
