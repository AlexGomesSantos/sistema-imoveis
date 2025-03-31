import React, { Fragment } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import LogoImg from "../../assets/logo.png";
import { Container, Copy, Item } from "./styles";

const Footer = () => {
  return (
    <Fragment>
      <Container>
        <Item>
          <img src={LogoImg} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quibusdam iusto odio quia, sit provident, eos ullam animi enim nisi
            cumque, voluptatibus cupiditate voluptas dolorum! Natus excepturi
            molestias soluta suscipit!
          </p>
          <nav>
            <li>
              <span>
                <FaFacebook size={32} />
              </span>
            </li>
            <li>
              <span>
                <FaInstagram size={32} />
              </span>
            </li>
            <li>
              <span>
                <FaWhatsapp size={32} />
              </span>
            </li>
          </nav>
        </Item>
        <Item>
          <h3>Our Services</h3>
          <ul>
            <li>
              <span>Comprar</span>
            </li>
            <li>
              <span>Alugar</span>
            </li>
            <li>
              <span>Vender</span>
            </li>
          </ul>
        </Item>
        <Item>
          <h3>Our Services</h3>
          <ul>
            <li>
              <span>Comprar</span>
            </li>
            <li>
              <span>Alugar</span>
            </li>
            <li>
              <span>Vender</span>
            </li>
          </ul>
        </Item>
        <Item>
          <h3>Our Services</h3>
          <ul>
            <li>
              <span>Comprar</span>
            </li>
            <li>
              <span>Alugar</span>
            </li>
            <li>
              <span>Vender</span>
            </li>
          </ul>
        </Item>
      </Container>
      <Copy>
        <p>Copyright © 2020 - Todos os direitos reservados</p>
        <ul>
          <li>
            <span>Termos de Uso</span>
          </li>
          <li>
            <span>Política de privacidade</span>
          </li>
          <li>
            <span>Política de Cookies</span>
          </li>
        </ul>
      </Copy>
    </Fragment>
  );
};

export default Footer;
