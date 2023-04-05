import styled from 'styled-components';

const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25vw;
  min-width: 250px;
  max-width: 300px;
  height: 40vh;
  min-height: 400px;
  background-color: #495057;
  padding: 16px;
  border-radius: 8px;
  gap: 20px;
  font-size: 1.5em;
  img {
    width: 24vh;
    min-width: 160px;
  }
  div {
    display: flex;
    input {
      text-align: center;
      width: 200%;
    }
  }
`;

export default StyledProductCard;
