import React from "react";
import styled from "@emotion/styled";

const ContenedorFaase = styled.div`
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 900px;
  @media (min-width: 900px) {
    margin-top: 10rem;
  }
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;
    font-size: 2rem;
    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;
const Frase = ({ frase }) => {
  return (
    <ContenedorFaase>
      <h1>{frase.quote}</h1>
      <p>- {frase.author}</p>
    </ContenedorFaase>
  );
};

export default Frase;
