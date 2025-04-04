import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, ContainerForm, Form, Label } from "./styles";

const Cadastro = () => {
  return (
    <Container>
      <h2>Crie sua conta</h2>
      <p>Cadastre-se para acessar a plataforma!</p>
      <ContainerForm>
        <Form>
          <Label>Nome</Label>
          <Input type="text" placeholder="Digite seu nome" />
          <Label>E-mail</Label>
          <Input type="text" placeholder="Digite seu email" />
          <Label>Senha</Label>
          <Input type="text" placeholder="Digite sua senha" />
          <Button>Fazer login</Button>
        </Form>
      </ContainerForm>
    </Container>
  );
};

export default Cadastro;
