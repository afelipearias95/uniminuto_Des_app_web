import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #EBF5FB;
  font-family: Arial, sans-serif;
`;

const MenuButton = styled(Link)`
  background: #2E4053;
  color: white;
  padding: 1rem 2rem;
  margin: 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    background: #1B2631;
  }
`;

const HomePage = () => {
  return (
    <Container>
      <h1>Menú Principal</h1>
      <MenuButton to="/register-activity">Registro</MenuButton>
      <MenuButton to="/consult-activities">Consultar</MenuButton>
      <MenuButton to="/">Cerrar Sesión</MenuButton>
    </Container>
  );
};

export default HomePage;
