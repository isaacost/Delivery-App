import styled from 'styled-components';

const ContainerProducts = styled.div`
  margin: 0 auto;
  #products-container {
    display: flex;
    flex-flow: row wrap;
    gap: 24px;
    justify-content: center;
  }
  #button-checkout {
    background-color: #80c423;
    color: black;
    padding: 32px;
    height: 100px;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    position: fixed;
    bottom: 20px;
    right: 20px;
    &:hover {
      opacity: 0.7;
    }
    &:disabled {
      opacity: 0.3;
    }
  }
`;

export default ContainerProducts;
