import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 0 0 2rem;
  width: 70%;

  div {
    width: 100%;
    margin-top: 0.75rem;
  }

  label {
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.05rem;
  }

  button {
    margin-top: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    width: 90%;

    div {
      width: 100%;
    }

    button {
      width: 100%;
    }
  }
`;

export default StyledForm;
