import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const WorkoutForm = ({ addWorkout }) => {
  const [workout, setWorkout] = useState({
    date: '',
    type: '',
    duration: '',
  });

  const handleChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addWorkout(workout);
    setWorkout({ date: '', type: '', duration: '' });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      <TextField
        name="date"
        label="Date"
        type="date"
        value={workout.date}
        onChange={handleChange}
        fullWidth
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        name="type"
        label="Workout Type"
        value={workout.type}
        onChange={handleChange}
        fullWidth
        sx={{ mt: 2 }}
      />
      <TextField
        name="duration"
        label="Duration (minutes)"
        type="number"
        value={workout.duration}
        onChange={handleChange}
        fullWidth
        sx={{ mt: 2 }}
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Add Workout
      </Button>
    </Box>
  );
};

export default WorkoutForm;
