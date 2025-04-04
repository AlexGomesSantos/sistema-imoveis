import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, ContainerForm, Form, Label } from "./styles";

const Login = () => {
  return (
    <Container>
      <h2>Acesse sua conta</h2>
      <p>Entre com seu email e senha!</p>
      <ContainerForm>
        <Form>
          <Label>E-mail</Label>
          <Input type="text" placeholder="Digite seu email" />
          <Label>Senha</Label>
          <Input type="password" placeholder="Digite sua senha" />
          <Button>Fazer login</Button>
        </Form>
      </ContainerForm>
    </Container>
  );
};

export default Login;
