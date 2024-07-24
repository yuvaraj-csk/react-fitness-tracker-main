import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const WorkoutList = ({ workouts }) => {
  return (
    <List>
      {workouts.map((workout, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={`${workout.date} - ${workout.type}`}
            secondary={`Duration: ${workout.duration} minutes`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default WorkoutList;
