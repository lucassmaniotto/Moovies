import React, { useState } from 'react';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { MdOutlineLock } from 'react-icons/md';
import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';
import Input from '../../Input';
import Button from '../../Button';
import StyledForm from './styles';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    /*
      const user = {
        name,
        email,
        password,
      };
    */
    const response = {
      // REMOVE THIS LINE LATER
      user: {
        name,
        email,
        password,
      },
      status: 201,
    }; // await registerUser(user.name, user.email, user.password);

    if (response.status === 201) {
      toast.success('Usuário cadastrado com sucesso!');
      setName('');
      setEmail('');
      setPassword('');
      navigate('/login');
    }
    if (response.status === 409) {
      toast.error('E-mail já cadastrado!');
    }
    if (response.status === 400) {
      toast.error('Preencha os campos corretamente!');
    }
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
