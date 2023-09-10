"use client";
import { CardPanelProps } from "../interface";
export default function CardPanel({
  hospitalName,

  state,
  dispatch,
}: CardPanelProps) {
  return (
    <>
      <div>
        {hospitalName.map((element, index) => {
          return (
            <div>
              Hospital Name: {element}, Rating:{" "}
              {state.hospitalRatings.get(element) || 0}
              <div className='mt-2'>
                <button
                  className='bg-orange-400 hover:bg-orange-500 text-white px-3 py-1 rounded-lg mr-2'
                  onClick={() => handleRemoveHospital(element)}
                >
                  Remove
                </button>
                <button
                  className='bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg mr-2'
                  onClick={() => handleIncreaseRating(element)}
                >
                  Increase Rating
                </button>
                <button
                  className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg'
                  onClick={() => handleDecreaseRating(element)}
                >
                  Decrease Rating
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
  function handleRemoveHospital(hospitalName: string) {
    dispatch({ type: "REMOVE_HOSPITAL", payload: { name: hospitalName } });
  }

  // Function to handle increasing the rating of a hospital
  function handleIncreaseRating(hospitalName: string) {
    const currentRating = state.hospitalRatings.get(hospitalName) || 0;
    var newRating = currentRating + 0.5;
    if (newRating > 5) {
      newRating = 5;
    }
    dispatch({
      type: "ADD_RATING",
      payload: { name: hospitalName, rating: newRating },
    });
  }
  function handleDecreaseRating(hospitalName: string) {
    const currentRating = state.hospitalRatings.get(hospitalName) || 0;
    var newRating = currentRating - 0.5;
    if (newRating < 0) {
      newRating = 0;
    }
    dispatch({
      type: "ADD_RATING",
      payload: { name: hospitalName, rating: newRating },
    });
  }
}
