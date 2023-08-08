import styled from 'styled-components';
import { primaryColor, primaryDarkColor, whiteColor } from '../../UI/variables';

const Button = styled.button`
  display: inline-block;
  border-radius: 24px;
  padding: 1.25rem 2.5rem;
  font-size: 1.5rem;
  line-height: 1.5rem;
  background-color: transparent;
  border: 3px solid ${primaryDarkColor};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: ${whiteColor};
    background-color: ${primaryColor};
    border: 3px solid ${primaryColor};
    transition: 0.5s;
  }
`;

export default Button;
