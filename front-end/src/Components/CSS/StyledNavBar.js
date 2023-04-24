import styled from 'styled-components';

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  background-color: #000;
  font-size: 1.4em;
  font-weight: 900;
  padding: 0 15px;
  div {
    display: flex;
    height: 100%;
  }
  a {
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    color: white;
    height: 100%;
    &:hover {
      opacity: 0.6;
    }
  }
`;

export default StyledNavBar;
