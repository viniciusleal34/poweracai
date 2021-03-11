/* eslint-disable  */
import react, { useCallback, useRef } from 'react';
import { Container, Content, Background } from './styles';
// @ts-ignore
import logo from '../../../assets/logo.png';
import Input from '../../../components/Input';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiMail, FiLock } from 'react-icons/fi';
import Button from '../../../components/Button';

interface SignInFormData {
  email: string;
  senha: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: SignInFormData) => {
    console.log(data);
  }, []);
  return (
    <Container>
      <Content>
        <img src={logo} />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input icon={FiMail} name="test" placeholder="E-mail" />
          <Input icon={FiLock} name="test" placeholder="Senha" />

          <Button>Entrar</Button>
          <a href="forgot">Esqueci minha senha?</a>
        </Form>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
