import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import UserLogo from './user-logo.png'; // Asegúrate de tener esta imagen en tu proyecto

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #EBF5FB 0%, #D6EAF8 50%, #A9CCE3 100%); 
  font-family: Arial, sans-serif;
`;

const LeftPanel = styled.div`
  text-align: center; /* Cambia la alineación del texto a center */
  width: 35%; /* Reduce el ancho para centrar mejor el formulario */
  padding: 2rem;
  margin-right: 2rem; /* Añade margen a la derecha para separar del formulario */
`;

const Slogan = styled.h1`
  font-size: 2.5rem; /* Reduce el tamaño de la fuente */
  color: #2E4053;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateX(20px);
  }
`;

const ProjectTitle = styled.h2`
  font-size: 1.8rem; /* Reduce el tamaño de la fuente */
  color: #2E4053;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateX(10px);
`;

const FormWrapper = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
  margin: 0 auto; /* Centra el formulario */
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    border-color: #2E4053;
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(46, 64, 83, 0.25);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  background-color: #2E4053;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
  &:hover {
    background-color: #1B2631;
  }
`;

const Link = styled.a`
  display: block;
  margin-bottom: 1rem;
  color: #2E4053;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  font-size: 0.8rem;
  color: #777;
`;

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <LeftPanel>
        <Slogan>Bienvenid@s Constructora As</Slogan>
        <ProjectTitle>Tu proyecto, nuestra pasión</ProjectTitle>
      </LeftPanel>
      <FormWrapper>
        <Logo src={UserLogo} alt="User Logo" />
        <Title>Iniciar Sesión</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input 
            type="text" 
            placeholder="Usuario o correo" 
            {...register('username', { required: 'Usuario o correo es requerido' })}
          />
          {errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}
          <Input 
            type="password" 
            placeholder="Contraseña" 
            {...register('password', { required: 'Contraseña es requerida' })}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
          <Button type="submit">Iniciar Sesión</Button>
        </form>
        <Link href="#">¿Olvidaste tu clave?</Link>
        <Link href="#">Crear cuenta o registrarse</Link>
        <Footer>
          <p>© 2024 Todos los derechos reservados.</p>
        </Footer>
      </FormWrapper>
    </Container>
  );
};

export default Login;
