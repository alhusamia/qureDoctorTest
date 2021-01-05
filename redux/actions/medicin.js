import { ADD, DELETE } from "./types";

export const add = (Data) => {
  return {
    type: ADD,
    payload: Data,
  };
};
export const delet = (Data) => {
  return {
    type: DELETE,
    payload: Data,
  };
};
