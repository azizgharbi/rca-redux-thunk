import { GET_DATA } from "./constants";

export const getData = () => {
  return dispatch => {
    return dispatch({
      type: GET_DATA,
      payload: [
        {
          name: "foo"
        },
        { name: "bar" }
      ]
    });
  };
};
