import styled from 'styled-components';
import { primaryColor, primaryDarkColor, whiteColor } from '../UI/variables';

const ButtonStyled = styled.button`
  display: inline-block;
  border-radius: 24px;
  line-height: 1.5rem;
  background-color: transparent;
  border: 1.5px solid ${primaryDarkColor};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: ${whiteColor};
    background-color: ${primaryColor};
    border: 1.5px solid ${primaryColor};
    transition: 0.5s;
    box-shadow: 0 0 20px 0.25rem ${primaryDarkColor};
  }

  @media screen and (max-width: 500px) {
    padding: 0.5rem 1.25rem;
    font-size: 0.9rem;
    border: 1.5px solid ${primaryDarkColor};

    &:hover {
      border: 1.5px solid ${primaryColor};
    }
  }
`;

export default ButtonStyled;
