import React, { useEffect } from "react";
import { connect } from "react-redux";
//Actions
import { getData } from "../redux/Data/actions";

const Example = ({ getData }) => {
  const name = "aziz";

  useEffect(() => {
    getData();
  }, []);

  return <h1>{name}</h1>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.getExampleReducer,
    ...ownProps
  };
};

const mapDispatchToProps = {
  getData
};

export default connect(mapStateToProps, mapDispatchToProps)(Example);
