import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  greyColor,
  primaryColor,
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

  @media screen and (max-width: 1225px) {
    width: 100%;

    h1 {
      font-size: 1.75rem;
    }
  }

  @media screen and (max-width: 975px) {
    h1,
    h2 {
      align-self: center;
    }
  }

  @media screen and (max-width: 611px) {
    width: 110%;

    h1,
    h2 {
      height: 20%;
    }

    h1 {
      font-size: 1.75rem;
    }

    h2 {
      font-size: 1.15rem;
      height: 1%;
    }
  }

  @media screen and (max-width: 501px) {
    h1,
    h2 {
      height: 15%;
    }

    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 468px) {
    text-align: center;
    h1 {
      font-size: 1.75rem;
    }

    h2 {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 447px) {
    h1 {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 396px) {
    h1 {
      font-size: 1.5rem;
      padding: 0 2.2rem;
    }

    h2 {
      display: none;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${primaryColor};
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
  transition: color 0.3s ease-in-out;
  margin: 1rem 0 2rem 0;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-right: 0.5rem;
  }

  @media screen and (max-width: 468px) {
    font-size: 1rem;
    text-align: center;
  }
`;
