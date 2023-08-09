import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import {
  Container,
  H1,
  H2,
} from '../../components/UI/shared/global-components';
import { DivTitle, StyledLink, WrapStyled } from './styles';

export default function Login() {
  const navigate = useNavigate();
  return (
    <Container>
      <WrapStyled>
        <DivTitle>
          <H1>Bem vindo ao Moovies🐮</H1>
          <H2>Entre com sua conta:</H2>
        </DivTitle>
        <Button
          onClick={() => navigate('/private/logged')}
          type="button"
          padding="0.5rem 1.25rem"
          fontSize="1.1rem"
        >
          Login
        </Button>
        <p>Ou registre-se abaixo:</p>
        <StyledLink to="/register">Registre-se</StyledLink>
      </WrapStyled>
    </Container>
  );
}
