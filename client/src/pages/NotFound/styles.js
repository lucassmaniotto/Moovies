import styled from 'styled-components';
import {
  primaryDarkColor,
  subtitleFont,
  titleFont,
} from '../../components/UI/variables';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 1rem;

  @media screen and (max-width: 1550px) {
    margin: 0 5rem;
  }

  @media screen and (max-width: 980px) {
    margin: 0 2rem;
  }
`;

const TextError404 = styled.span`
  display: block;
  color: ${primaryDarkColor};
  font-size: 6rem;
  font-weight: 700;
  font-family: ${titleFont};
  margin-bottom: 2rem;

  @media screen and (max-width: 580px) {
    font-size: 4rem;
  }
`;

const Title = styled.h1`
  font-family: ${primaryDarkColor};
  font-family: ${subtitleFont};
  font-size: 3rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 580px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 400px) {
    line-height: 1.5rem;
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
  line-height: 1.75rem;
  width: 50%;

  @media screen and (max-width: 1550px) {
    width: 70%;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.25rem;
  }

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 3rem;
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Image = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;

  @media screen and (max-width: 980px) {
    width: 50%;
  }

  @media screen and (max-width: 580px) {
    width: 70%;
  }
`;

export {
  Content,
  TextError404,
  Title,
  Text,
  ButtonContainer,
  Image,
  ImageContainer,
};
