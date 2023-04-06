import styled from 'styled-components';

const StyledOrderCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  a {
    display: flex;
    text-decoration: none;
    background-color: #CCCCCC;
    color: black;
    align-items: center;
    justify-content: space-between;
    width: 20vw;
    padding: 15px;
    min-height: 50px;
    min-width: 200px;
    height: 10vh;
    border-radius: 4px;
    span {
      padding: 15px;
    }
    #data-and-total {
      display: flex;
      flex-direction: column;
      gap: 5px;
      text-align: center;
    }
  }
`;

export default StyledOrderCard;
