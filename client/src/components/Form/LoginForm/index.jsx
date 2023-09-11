import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { AiOutlineMail } from 'react-icons/ai';
import { MdOutlineLock } from 'react-icons/md';

import { loginRequest } from '../../../store/modules/auth/actions';

import Input from '../../Input';
import Button from '../../Button';
import StyledForm from './styles';

function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dispatchLogin = async () => {
    try {
      dispatch(loginRequest());
      toast.success('Login efetuado com sucesso!');
      return navigate('/private/logged');
    } catch (err) {
      toast.error('Falha na autenticação, verifique seus dados');
      throw new Error('Authentication failed');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!document.getElementById('email').value) {
      return toast.error('E-mail é obrigatório');
    }
    if (!document.getElementById('password').value) {
      return toast.error('Senha é obrigatória');
    }

    return dispatchLogin();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E-mail</label>
        <Input
          id="email"
          icon={<AiOutlineMail size={20} />}
          type="email"
          placeholder="Escreva seu e-mail"
        />
      </div>
      <div>
        <label htmlFor="password">Senha</label>
        <Input
          id="password"
          icon={<MdOutlineLock size={20} />}
          type="password"
          placeholder="Escreva sua senha"
        />
      </div>
      <Button type="submit" padding="0.5rem 1.25rem" fontSize="1.1rem">
        Entrar
      </Button>
    </StyledForm>
  );
}

export default Form;
