import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 1.5;
  word-wrap: break-word;
`;

const H2 = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
`;

export { Container, H1, H2 };
