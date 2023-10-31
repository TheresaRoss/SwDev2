import { BookingItem } from "@/app/interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type BookingState = {
  bookItems: BookingItem;
};
const initialState: BookingState = {
  bookItems: {
    name: "",
    lastname: "",
    nationalID: "",
    hospital: "",
    date: "",
  },
};
export const bookSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<BookingItem>) => {
      state.bookItems = action.payload;
    },
    removeReservation: (state) => {
      state.bookItems = {
        name: "",
        lastname: "",
        nationalID: "",
        hospital: "",
        date: "",
      };
    },
  },
});
export const { addReservation, removeReservation } = bookSlice.actions;
export default bookSlice.reducer;
