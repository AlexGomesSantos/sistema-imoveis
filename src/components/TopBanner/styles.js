import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 150px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

export const Text = styled.div`
  width: 55%;
  position: relative;
  z-index: 1;
  h2 {
    color: var(--white);
    font-size: 3.875rem;
    margin-bottom: 25px;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.92);
  }
  p {
    color: var(--white);
    margin-bottom: 25px;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.92);
  }
`;
