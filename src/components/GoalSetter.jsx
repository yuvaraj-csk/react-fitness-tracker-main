import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const GoalSetter = ({ setGoal }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setGoal(input);
    setInput('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      <TextField
        label="Set your goal"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Set Goal
      </Button>
    </Box>
  );
};

export default GoalSetter;
