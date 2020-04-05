import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

//Actions
import { getData } from "../redux/Data/actions";

//style
import { Container } from "./style";

const Users = ({ getData }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData().then(({ payload }) => {
      console.log(payload);
      setUsers(payload);
      setLoading(true);
    });
  }, []);

  return (
    <Container>
      {loading ? (
        <ul>
          {users.map(({ name }) => (
            <li>{name}</li>
          ))}
        </ul>
      ) : (
        <span>...</span>
      )}
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.getExampleReducer,
    ...ownProps,
  };
};

const mapDispatchToProps = {
  getData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
