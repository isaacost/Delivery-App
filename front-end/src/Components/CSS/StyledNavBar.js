import styled from 'styled-components';

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  a {
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    color: white;
    weight: bold;
    background-color: #995bd5;
    height: 100%;
  }
  margin-bottom: 15px;
`;

export default StyledNavBar;
