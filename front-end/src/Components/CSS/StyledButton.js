import styled from 'styled-components';

const StyledButton = styled.button`
    width: 100%;
    border-radius: 0.4em;
    height: 3em;
    &:hover {
      opacity: 0.7;
    }
    &:disabled {
      opacity: 0.3;
    }
  `;

export default StyledButton;
