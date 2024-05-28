import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #EBF5FB;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  color: #333;
`;

const FilterForm = styled.form`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  width: 100%;
  max-width: 400px;
  text-align: center;
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
  &:hover {
    background-color: #1B2631;
  }
`;

const ActivityList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-width: 600px;
`;

const ActivityItem = styled.li`
  background: white;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ConsultActivities = () => {
  // Simulación de datos de actividades
  const activities = [
    { id: 1, name: 'Reunión de equipo', time: '2024-06-01T10:00', description: 'Reunión semanal del equipo de desarrollo.' },
    { id: 2, name: 'Desarrollo de funcionalidades', time: '2024-06-02T14:00', description: 'Desarrollo de nuevas funcionalidades para el sistema.' },
    // Añade más actividades aquí según sea necesario
  ];

  const { register, handleSubmit } = useForm();
  const [filteredActivities, setFilteredActivities] = useState(activities);

  const onFilter = (data) => {
    const { name, startDate, endDate } = data;
    const filtered = activities.filter(activity => {
      const activityTime = new Date(activity.time);
      const isNameMatch = name ? activity.name.toLowerCase().includes(name.toLowerCase()) : true;
      const isStartDateMatch = startDate ? activityTime >= new Date(startDate) : true;
      const isEndDateMatch = endDate ? activityTime <= new Date(endDate) : true;
      return isNameMatch && isStartDateMatch && isEndDateMatch;
    });
    setFilteredActivities(filtered);
  };

  return (
    <Container>
      <Title>Consultas de Actividades</Title>
      <FilterForm onSubmit={handleSubmit(onFilter)}>
        <Input 
          type="text" 
          placeholder="Nombre de la Actividad" 
          {...register('name')}
        />
        <Input 
          type="date" 
          {...register('startDate')}
        />
        <Input 
          type="date" 
          {...register('endDate')}
        />
        <Button type="submit">Filtrar</Button>
      </FilterForm>
      <ActivityList>
        {filteredActivities.map(activity => (
          <ActivityItem key={activity.id}>
            <h3>{activity.name}</h3>
            <p>{new Date(activity.time).toLocaleString()}</p>
            <p>{activity.description}</p>
          </ActivityItem>
        ))}
      </ActivityList>
    </Container>
  );
};

export default ConsultActivities;
