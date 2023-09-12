import styled from 'styled-components';
import {
  greyColor,
  primaryDarkColor,
  subtitleFont,
  textFont,
  whiteColor,
} from '../../components/UI/variables';

const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  list-style: none;

  @media screen and (max-width: 1660px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 925px) {
    grid-template-columns: 1fr;
  }
`;

const MovieItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 10px ${primaryDarkColor};
  color: ${whiteColor};
  background-color: ${primaryDarkColor};
  transition: transform 0.2s ease-in-out;

  img {
    width: 100%;
    height: 25rem;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
    background-color: ${greyColor};
  }

  .movie-info__wrapper {
    display: grid;
    grid-template-rows: 1fr 2fr;
    width: 100%;
    min-height: 20rem;
  }

  h2 {
    width: 100%;
    font-size: 1.5rem;
    margin: 0.5rem 0 0;
    padding: 0.5rem;
    text-align: center;
    text-overflow: ellipsis;
    font-family: ${subtitleFont};
    overflow: hidden;
    white-space: nowrap;
  }

  p {
    font-family: ${textFont};
    font-size: 1rem;
    margin: 0 10px;
    text-align: justify;
    padding: 0.5rem;

    max-height: 10rem;
    overflow-y: auto;
    text-overflow: ellipsis;
  }

  &:hover {
    transform: translateY(-5px);
  }

  @media screen and (max-width: 1150px) {
    img {
      height: 20rem;
    }

    .movie-info__wrapper {
      min-height: 15rem;

      h2 {
        font-size: 1.2rem;
      }

      p {
        font-size: 0.8rem;
      }
    }
  }

  @media screen and (max-width: 925px) {
    margin: 0 0 2rem;

    .movie-info__wrapper {
      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }

  @media screen and (max-width: 600px) {
    img {
      height: 15rem;
    }

    .movie-info__wrapper {
      h2 {
        font-size: 1.2rem;
      }

      p {
        font-size: 0.8rem;
      }
    }
  }

  @media screen and (max-width: 440px) {
    img {
      height: 12rem;
    }

    .movie-info__wrapper {
      h2 {
        font-size: 1.1rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;

export { MovieList, MovieItem };
