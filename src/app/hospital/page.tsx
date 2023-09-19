"use client";
import CardPanel from "./component/cardPanel";
import Card from "./component/card";
import { useState, useReducer } from "react";
import { State, Action } from "../interface";

const Data = [
  {
    name: "Chula Hospital",
    description:
      "King Chulalongkorn Memorial Hospital is a public general and tertiary referral hospital in Bangkok, Thailand. It is operated by the Thai Red Cross Society, and serves as the teaching hospital for the Faculty of Medicine, Chulalongkorn University and Srisavarindhira Thai Red Cross Institute of Nursing",
    id: 1,
    hospitalPic: "/chula.jpg",
  },
  {
    name: "Rajavithi Hospital",
    description:
      "Rajavithi Hospital is a large public hospital located in Ratchathewi District, Bangkok, Thailand. It was founded in 1951 as the Women's Hospital, and is operated by the Ministry of Public Health's Department of Medical Services. With an inpatient capacity of 1,200 beds, it is one of the largest hospitals in Thailand. It serves as a teaching hospital for the College of Medicine, Rangsit University.",
    id: 2,
    hospitalPic: "/rajavithi.jpg",
  },
  {
    name: "Thammasat Hospital",
    description:
      "Thammasat University is a public research university in Thailand with campuses in Tha Phra Chan, Rangsit, Pattaya and Lampang Province. As of 2019, Thammasat University has over 33,000 students enrolled in 33 faculties, colleges, institutes and 2,700 academic staff. Thammasat is Thailand's second oldest university.",
    id: 3,
    hospitalPic: "/thammasat.jpg",
  },
];

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_RATING":
      const newRatings = new Map(state.hospitalRatings);
      newRatings.set(action.payload.name, action.payload.rating);
      return { ...state, hospitalRatings: newRatings };
    case "REMOVE_HOSPITAL":
      const updatedRatings = new Map(state.hospitalRatings);
      updatedRatings.delete(action.payload.name);
      return { ...state, hospitalRatings: updatedRatings };
    default:
      return state;
  }
};

const initialState: State = {
  hospitalRatings: new Map(),
};
export default function Hospital() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div className='grid grid-cols-3 gap-6 px-10'>
        {Data.map((element) => {
          return (
            <Card
              key={element.id}
              hospitalName={element.name}
              hospitalPicUrl={element.hospitalPic}
              hospitalDescription={element.description}
              id={element.id}
              state={state}
            />
          );
        })}
      </div>
      <div className='mt-10 p-5 bg-white bg-opacity-10 flex mx-10'>
        <CardPanel
          hospitalName={[
            "Chulalongkorn Hospital",
            "Rajavithi Hospital",
            "Thammasat University Hospital",
          ]}
          state={state}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
}
