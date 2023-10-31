"use client";
import { useAppSelector } from "@/redux/store";
import Form from "../booking/component/form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { removeReservation } from "@/redux/features/bookSlice";

export default function MyBooking() {
  const dispatch = useDispatch<AppDispatch>();
  const bookitem = useAppSelector((state) => state.bookSlice.bookItems);
  return (
    <div>
      <Form />
      <div className="mt-5 flex flex-col justify-center text-lg rounded border-red-300 border-[1px] p-5 items-center">
        <h2 className="text-2xl mb-3">Booking Details</h2>
        {bookitem.name == "" ? (
          <div>NO BOOKING DATA</div>
        ) : (
          <div>
            <div>Name: {bookitem.name}</div>
            <div>Surname: {bookitem.lastname}</div>
            <div>National ID: {bookitem.nationalID}</div>
            <div>Hospital: {bookitem.hospital}</div>
            <div>Date: {bookitem.date}</div>
          </div>
        )}
        <button
          onClick={() => {
            dispatch(removeReservation());
          }}
          className="bg-red-500 mt-5 rounded px-4 py-2 text-white">
          Remove Booking Reservation
        </button>
      </div>
    </div>
  );
}
