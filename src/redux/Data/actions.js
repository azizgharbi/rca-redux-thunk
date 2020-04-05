import { GET_DATA } from "./constants";

export const getData = () => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(
          dispatch({
            type: GET_DATA,
            payload: [
              {
                name: "foo",
              },
              { name: "bar" },
            ],
          })
        );
      }, 1000);
    });
  };
};
