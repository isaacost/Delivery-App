import styled from 'styled-components';

const StyledTableOrder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  h2 {
    text-align: center;
    font-size: 1.5em;
  }
  table {
    text-align: center;
    border: 1px solid #CCCCCC;
    border-radius: 16px;
  }
  th {
    background-color: darkgreen;
    padding: 15px;
  }
  #excluir {
    background-color: red;
    padding: 15px;
  }
  tr:nth-child(even) {
    background-color: #CCCCCC;
    color: black;
    td {
      border: 1px solid black;
    }
  }
  td,th {
    padding: 15px;
    border: 1px solid #CCCCCC;
  }
`;

export default StyledTableOrder;
