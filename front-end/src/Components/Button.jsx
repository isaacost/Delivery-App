import PropTypes from 'prop-types';
import StyledButton from './CSS/StyledButton';

function Button({
  onClick,
  text,
  dataTestId,
  disabled,
  nameButton = 'button',
  textColor,
  backgroundColor,
  border,
}) {
  return (
    <StyledButton
      type="button"
      onClick={ onClick }
      data-testid={ dataTestId }
      disabled={ disabled }
      name={ nameButton }
      style={ { color: textColor, backgroundColor, border } }
    >
      {text}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  border: PropTypes.string,
}.isRequired;

export default Button;
