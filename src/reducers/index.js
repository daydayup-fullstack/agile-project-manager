import { loadInitialData } from "../data/database";

const initialState = loadInitialData("user-scott");

export const app = (state = initialState, action) => {
  return {
    ...state,
  };
};
