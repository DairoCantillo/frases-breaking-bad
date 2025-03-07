import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Frase from "./components/Frase";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;
  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;
const App = () => {
  const [frases, setFrases] = useState({});

  const getFrase = async () => {
    const res = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const frase = await res.json();
    setFrases(frase[0]);
  };
  useEffect(() => {
    getFrase();
  }, []);

  return (
    <Contenedor>
      <Frase frase={frases} />
      <Boton onClick={getFrase}>Obtener Frase</Boton>
    </Contenedor>
  );
};

export default App;
