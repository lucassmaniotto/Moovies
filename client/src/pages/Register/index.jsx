import React from 'react';
import { BsArrowLeftCircle } from 'react-icons/bs';

import {
  Container,
  H1,
  H2,
} from '../../components/UI/shared/global-components';
import { DivTitle, StyledLink, WrapStyled } from './styles';
import Form from '../../components/Form/RegisterForm';

export default function Register() {
  return (
    <Container>
      <WrapStyled>
        <DivTitle>
          <H1>Divulgue seus filmes no Moovies🐮</H1>
          <H2>Registre-se nos campos do formulário abaixo:</H2>
        </DivTitle>
        <Form />
        <StyledLink to="/login">
          <BsArrowLeftCircle />
          Já tem uma conta? Faça login
        </StyledLink>
      </WrapStyled>
    </Container>
  );
}
