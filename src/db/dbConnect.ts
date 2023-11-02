import { error } from "console";
import mongoose from "mongoose";

let isConnected = false;
export const dbConnect = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) return;

  const MONGO_URI = process.env.MONGO_URI;
  if (!MONGO_URI) throw new Error("please define uri");

  try {
    await mongoose.connect(MONGO_URI, { bufferCommands: false });
    isConnected = true;
    console.log("connected");
  } catch (err) {
    console.log(err);
  }
};
