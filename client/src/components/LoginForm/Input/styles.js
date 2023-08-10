import styled from 'styled-components';
import { greyColor, primaryColor } from '../../UI/variables';

export const Div = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${greyColor};
  padding: 0.5rem;
  margin-bottom: 0.5rem !important;
  width: 100%;

  &:hover {
    color: ${primaryColor} !important;
    border-bottom: 1px solid ${primaryColor};
    transition: border-bottom 0.3s ease-in-out;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  box-sizing: border-box;
  border: none;

  &:focus {
    outline: none;
  }

  &:hover::placeholder {
    color: ${primaryColor};
  }

  &:focus::placeholder,
  &:focus:hover::placeholder {
    color: transparent;
  }
`;
