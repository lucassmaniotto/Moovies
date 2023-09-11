import React from 'react';
import { Div, StyledInput } from './styles';

function Input({ id, icon, type, placeholder, onChange }) {
  return (
    <Div>
      {icon}
      <StyledInput
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="off"
      />
    </Div>
  );
}

export default Input;
