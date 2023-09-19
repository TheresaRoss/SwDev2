export type State = {
  hospitalRatings: Map<string, number>;
};

export type Action =
  | { type: "ADD_RATING"; payload: { name: string; rating: number } }
  | { type: "REMOVE_HOSPITAL"; payload: { name: string } };
