import styled from 'styled-components';

const ContainerAdmin = styled.div`
  #container-admin {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    form {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 40%;
      margin: 24px auto;
      label {
        display: flex;
        flex-direction: column;
        gap: 8px;
        input {
          height: 3vh;
          color: black;
          background-color: #CCCCCC;
        }
      }
      select {
        min-height: 34px;
        height: 3vh;
        text-align: center;
        border: none;
        border-radius: 4px;
      }
    }
    button {
      font-weight: 600;
    }
  }
`;

export default ContainerAdmin;
