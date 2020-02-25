import styled from "styled-components";

export const NavWrapper = styled.nav`
  background: #ebc733;
  height: 40px;
  ul {
    list-style-type: none;
    margin: 0 40;
    padding: 0;
    display: flex;
  }

  ul li {
    margin: 10px 10px;
  }

  ul li a {
    text-decoration: none;
    font-weight: bold;
    color: #5363eb;
  }
`;
