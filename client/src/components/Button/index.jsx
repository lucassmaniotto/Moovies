import React from 'react';
import ButtonStyled from './styles';

function Button({ children, padding, fontSize }) {
  return <ButtonStyled style={{ padding, fontSize }}>{children}</ButtonStyled>;
}

export default Button;
