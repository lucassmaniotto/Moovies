import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  greyColor,
  primaryColor,
  primaryDarkColor,
  whiteColor,
} from '../../components/UI/variables';

export const WrapStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${greyColor};
  border-radius: 10px;
  background-color: ${whiteColor};
  padding: 2rem;
  width: 50%;
  max-width: 550px;
  margin: 5rem auto 0 auto;

  p {
    font-size: 0.85rem;
    letter-spacing: 0.05rem;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: 975px) {
    width: 80%;
  }

  @media screen and (max-width: 468px) {
    width: 100%;

    p {
      font-size: 0.75rem;
    }
  }
`;

export const DivTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1,
  h2 {
    align-self: flex-start;
  }

  @media screen and (max-width: 583px) {
    width: 100%;
    h1 {
      font-size: 1.9rem;
    }
  }

  @media screen and (max-width: 468px) {
    h1,
    h2 {
      height: 10%;
    }

    h1 {
      font-size: 1.75rem;
    }

    h2 {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 346px) {
    width: 100%;
    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 0.85rem;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${primaryColor};
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  transition: color 0.3s ease-in-out;
  margin: 1rem 0 2rem 0;
  transition: text-shadow 0.3s ease-in-out;

  &:hover {
    text-shadow: 0px 1px 1px ${primaryDarkColor};
  }
`;
