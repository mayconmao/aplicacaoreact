import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { FiLogOut } from 'react-icons/fi';
import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/user.svg';
import { signUpRequest } from '../../store/modules/auth/actions';
import { Container, Content } from './styles';

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signUpRequest(email, password));
  }

return (
  <Container>
    <Content>
      <img src={logo} alt="User"/>
      <Form onSubmit={handleSubmit}>
        <h1>Faça seu cadastro</h1>
        <Input name="email" placeholder="Email"/>
        <Input name="password" type="password" placeholder="Senha"/>
        <button type="submit">Cadastrar</button>
      </Form>
      <Link to="/"><FiLogOut />Voltar Logon</Link>
    </Content>
  </Container>
)};

