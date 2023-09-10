import React from "react";
export interface CardProps {
  hospitalName: string;
  hospitalPicUrl: string;
  hospitalDescription: string;
  state: State;
}
export interface CardPanelProps {
  hospitalName: string[];

  state: State;
  dispatch: React.Dispatch<Action>;
}
export type State = {
  hospitalRatings: Map<string, number>;
};

export type Action =
  | { type: "ADD_RATING"; payload: { name: string; rating: number } }
  | { type: "REMOVE_HOSPITAL"; payload: { name: string } };
