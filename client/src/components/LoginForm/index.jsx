import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { AiOutlineMail } from 'react-icons/ai';
import { MdOutlineLock } from 'react-icons/md';

import Button from '../Button';
import StyledForm from './styles';
import Input from './Input';

function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');

    if (!document.getElementById('email').value) {
      return toast.error('E-mail é obrigatório');
    }
    if (!document.getElementById('password').value) {
      return toast.error('Senha é obrigatória');
    }
    if (token) {
      dispatch({ type: 'LOGIN' });
      return navigate('/private/logged');
    }
    return toast.error('Verifique suas credenciais');
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
