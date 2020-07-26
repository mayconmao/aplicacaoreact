import React from 'react';
import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';  
import { FiLogIn } from 'react-icons/fi';
// import { Form, Input } from '@rocketseat/unform';
import { Form } from '@unform/web';
import Input from '../../components/Input';

import logo from '../../assets/user.svg';
import { signInRequest } from '../../store/modules/auth/actions';

import { Container, Content } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password ));
  }

  return(
    <Container>
      <Content>
        <img src={logo} alt="User"/>
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input name="email" type="email" placeholder="Email"/>
          <Input name="password" type="password" placeholder="Senha"/>
          <button type="submit">Entrar</button>
        </Form>
        <a href="/signup"><FiLogIn />Criar Conta</a>
      </Content>
    </Container>
  )
};
