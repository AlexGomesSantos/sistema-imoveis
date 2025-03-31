import React from "react";
import { Container, Description, Img, Itens } from "./styles";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const Card = () => {
  return (
    <Container>
      <Img>
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </Img>
      <Description>
        <h4>Apartmento</h4>
        <Itens>
          <span>
            <FaMapMarkerAlt />
            Vila Buarque - SP
          </span>
          <span>R$ 2.400,00 / mês</span>
        </Itens>
        <a href="a">
          Detalhes <FaArrowRight />
        </a>
      </Description>
    </Container>
  );
};

export default Card;
