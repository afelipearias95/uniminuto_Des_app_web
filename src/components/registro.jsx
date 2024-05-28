import React from 'react';
import { useForm } from 'react-hook-form';
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

const FormWrapper = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
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

const Textarea = styled.textarea`
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
  &:hover {
    background-color: #1B2631;
  }
`;

const RegisterActivity = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Registro de Actividad</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input 
            type="text" 
            placeholder="Nombre de la Actividad" 
            {...register('activityName', { required: 'Nombre de la actividad es requerido' })}
          />
          {errors.activityName && <p style={{ color: 'red' }}>{errors.activityName.message}</p>}
          <Input 
            type="datetime-local" 
            {...register('activityTime', { required: 'La hora es requerida' })}
          />
          {errors.activityTime && <p style={{ color: 'red' }}>{errors.activityTime.message}</p>}
          <Textarea 
            placeholder="Descripción" 
            rows="5"
            {...register('description', { required: 'La descripción es requerida' })}
          />
          {errors.description && <p style={{ color: 'red' }}>{errors.description.message}</p>}
          <Button type="submit">Registrar Actividad</Button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default RegisterActivity;
