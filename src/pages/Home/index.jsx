import React, { Fragment } from "react";
import { Cards } from "../../components/Cards";
import { Header, Wrapper } from "./styles";

const Home = () => {
  return (
    <Fragment>
      <Header>
        <h2>Find the property of your Dream</h2>
      </Header>
      <Wrapper>
        <Cards />
      </Wrapper>
    </Fragment>
  );
};

export default Home;
