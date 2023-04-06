import styled from 'styled-components';

const ContainerOrdersDetails = styled.div`
  #order-details {
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 16px;
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    button {
      width: 35%;
      margin: 0 auto;
    }
  }
`;

export default ContainerOrdersDetails;
