import React, { useState } from 'react';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { MdOutlineLock } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import axios from '../../../services/axios';

import Input from '../../Input';
import Button from '../../Button';
import StyledForm from './styles';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const validateUserObject = (user) => {
    if (!user.name || !user.email || !user.password) {
      return toast.error('Preencha todos os campos!');
    }
    if (user.name.length < 3) {
      return toast.error('O nome deve conter no mínimo 3 caracteres!');
    }
    if (!user.email.includes('@') || !user.email.includes('.com')) {
      return toast.error('Insira um e-mail válido!');
    }
    if (user.password.length < 6) {
      return toast.error('A senha deve conter no mínimo 6 caracteres!');
    }
    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      name,
      email,
      password,
    };

    validateUserObject(user);

    try {
      await axios.post('/users', user);
    } catch (error) {
      if (error.response) {
        return toast.error(error.response.data.message);
      }
    }
    setName('');
    setEmail('');
    setPassword('');
    toast.success('Usuário cadastrado com sucesso!');
    return navigate('/login');
  };

  const handleNameChange = ({ target }) => {
    setName(target.value);
  };

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome</label>
        <Input
          icon={<AiOutlineUser size={20} />}
          type="text"
          placeholder="Escreva seu nome"
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <Input
          id="email"
          icon={<AiOutlineMail size={20} />}
          type="text"
          placeholder="Escreva seu e-mail"
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="password">Senha</label>
        <Input
          id="password"
          icon={<MdOutlineLock size={20} />}
          type="password"
          placeholder="Escreva sua senha"
          onChange={handlePasswordChange}
        />
      </div>
      <Button type="submit" padding="0.5rem 1.25rem" fontSize="1.1rem">
        Registrar-se
      </Button>
    </StyledForm>
  );
}

export default Form;
