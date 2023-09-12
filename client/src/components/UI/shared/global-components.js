import styled from 'styled-components';
import {
  greyColor,
  primaryDarkColor,
  subtitleFont,
  textFont,
  titleFont,
} from '../variables';

const Container = styled.section`
  width: 100%;
  margin-top: 5rem;
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 100;
  font-family: ${titleFont};
  line-height: 1.5;
`;

const H2 = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  font-family: ${subtitleFont};
`;

const LoadingSpinner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;

  .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid ${greyColor};
    border-top-color: ${primaryDarkColor};
    border-radius: 50%;
    animation: spin 1s infinite linear;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

const RequestError = styled.p`
  color: ${greyColor};
  font-size: 2rem;
  font-weight: 600;
  font-family: ${textFont};
  text-align: center;
  text-shadow: 1px 1px 1px ${primaryDarkColor};
  align-self: center;
`;

export { Container, H1, H2, LoadingSpinner, RequestError };
