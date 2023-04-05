import styled from 'styled-components';

const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 8px;
  img {
    width: 22vw;
    min-width: 200px
  };
  form {
    min-width: 220px;
    min-height: 220px;
    width: 20vw;
    height: 22vh;
    background-color: #495057;
    border-radius: 4px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  p {
    color: white;
  }
`;

export default ContainerLogin;
