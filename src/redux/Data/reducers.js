import { GET_DATA } from "./constants";

const initialState = [];

const getDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
};

export default getDataReducer;
