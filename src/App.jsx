import React, { useState } from 'react';
import { Container, CssBaseline, Box, Typography } from '@mui/material';
import GoalSetter from './components/GoalSetter';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';
import WorkoutChart from './components/WorkoutChart';

const App = () => {
  const [workouts, setWorkouts] = useState([]);
  const [goal, setGoal] = useState('');

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <Container component="main">
      <CssBaseline />
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Fitness Tracker
        </Typography>
        <GoalSetter setGoal={setGoal} />
        <WorkoutForm addWorkout={addWorkout} />
        <WorkoutList workouts={workouts} />
        <WorkoutChart workouts={workouts} />
      </Box>
    </Container>
  );
};

export default App;
