import React, { Fragment } from "react";
import TopBanner from "../../components/TopBanner";
/* import Input from "../../components/Input";
import TextArea from "../../components/TextArea"; */
import {
  Container,
  Left,
  Right,
  Thumb,
  Description,
  Profile,
  ProfileDescription,
  ProfileImg,
  ProfileContact,
  ProfileFormContact,
} from "./styles";

const Imobi = () => {
  return (
    <Fragment>
      <TopBanner />
      <Container>
        <Left>
          <Thumb>
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </Thumb>
          <Description>
            <h2>Apartamento/Alugar</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              aliquam, mollitia quisquam cupiditate facilis quia quis impedit
              libero debitis omnis laborum quae possimus natus veritatis
              molestias quibusdam nam nemo odio!
            </p>
          </Description>
        </Left>
        <Right>
          <Profile>
            <ProfileImg>
              <img
                src="https://media.istockphoto.com/id/1300845620/pt/vetorial/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=LkYph5lGSQQjIjx0YyV3yoPKw7w5Q5kuW_yCfTRYQZs="
                alt=""
              />
            </ProfileImg>
            <ProfileDescription>
              <h3>Jhon Due</h3>
              <p>Descrição do usuário</p>
            </ProfileDescription>
          </Profile>
          <ProfileContact>
            <h3>Informações para contato:</h3>
            <p>(11) 111-1111</p>
            <p>teste@teste.com</p>
          </ProfileContact>
          <ProfileFormContact>
            <h3>Contate o anunciante</h3>
            <form>
              <input type="text" placeholder="Nome:" />
              <input type="text" placeholder="Email:" />
              <textarea placeholder="Mensagem:"></textarea>
              <button>Enviar mensagem</button>
            </form>
          </ProfileFormContact>
        </Right>
      </Container>
    </Fragment>
  );
};

export default Imobi;
