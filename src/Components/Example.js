import React, { useEffect } from "react";

//style
import { Container } from "./style";

const Example = () => {
  const message = "Hello world!";

  useEffect(() => {
    console.log("hello world");
  }, []);

  return (
    <Container>
      <h1>{message}</h1>
    </Container>
  );
};

export default Example;
