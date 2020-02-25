import React, { useEffect } from "react";
import { connect } from "react-redux";

//Actions
import { getData } from "../redux/Data/actions";

//style
import { Container } from "./style";

const Users = ({ getData }) => {
  const message = "Displaying users";

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <h1>{message}</h1>
    </Container>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(Users);
