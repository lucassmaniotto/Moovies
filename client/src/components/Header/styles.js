import styled from 'styled-components';
import { primaryColor, primaryDarkColor, whiteColor } from '../UI/variables';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  background-color: ${primaryDarkColor};
  color: ${whiteColor};

  a {
    display: flex;
    color: ${whiteColor};
    text-decoration: none;
    font-size: 1.25rem;
    margin: 1.5rem 1rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${primaryColor};
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
  }

  @media screen and (max-width: 375px) {
    position: relative;
  }

  @media screen and (max-height: 781px) {
    position: relative;
  }
`;

export default HeaderWrapper;
