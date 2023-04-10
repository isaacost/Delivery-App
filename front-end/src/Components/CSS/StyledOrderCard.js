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
    justify-content: space-around;
    width: 20vw;
    padding: 15px;
    min-height: 50px;
    min-width: 200px;
    height: 10vh;
    border-radius: 4px;
    gap: 5px;
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
  .status {
    height: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
    
  }

  .emTransito {
    background-color: yellow;
  }

  .pendente {
    background-color: lightcoral;
  }

  .entregue {
    background-color: green;
  }

  .preparando {
    background-color: orange;
  }

  .adress {
    border-left: 1px solid;
    height: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
  }
`;

export default StyledOrderCard;
