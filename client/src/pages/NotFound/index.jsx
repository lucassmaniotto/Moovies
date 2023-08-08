import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/UI/shared/global-components';
import {
  ButtonContainer,
  Content,
  Image,
  Text,
  TextError404,
  Title,
} from './styles';

import error404 from '../../assets/error_404.png';
import LargeButton from '../../components/Button/LargeButton';

export default function NotFound() {
  const navegate = useNavigate();
  return (
    <Container>
      <Content>
        <TextError404>404</TextError404>
        <Title>Oh não! A vaca foi pro brejo!</Title>
        <Text>
          Tem certeza de que era isso que você estava procurando? Aguarde uns
          instantes e recarregue a página ou volte para a página inicial.
        </Text>
        <ButtonContainer onClick={() => navegate(-1)}>
          <LargeButton>Voltar</LargeButton>
        </ButtonContainer>
      </Content>
      <Image src={error404} alt="Cow" />
    </Container>
  );
}
