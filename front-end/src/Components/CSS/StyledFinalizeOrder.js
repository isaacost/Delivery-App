import styled from 'styled-components';

const StyledFinalizeOrder = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #CCCCCC;
  padding: 15px;
  border-radius: 15px;
  color: black;
  gap: 15px;
  margin-top: 15px;
  margin: 15px auto 0;
  width: 40%;
  button {
    font-weight: 900;
  }
  h2 {
    font-size: 1.5em;
    text-align: center;
  }
  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    font-weight: 400;
    text-align: center;
    label {
      display: flex;
      flex-direction: column;
      gap: 8px;
      input {
        min-height: 34px;
        text-align: center;
        height: 3vh;
        outline: none;
        border: none;
        border-radius: 4px;
        &:focus {
          outline: 1px solid #995bd5;
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
  }
`;

export default StyledFinalizeOrder;
