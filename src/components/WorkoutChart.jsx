import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WorkoutChart = ({ workouts }) => {
  const data = {
    labels: workouts.map((workout) => workout.date),
    datasets: [
      {
        label: 'Workout Duration (minutes)',
        data: workouts.map((workout) => workout.duration),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
      },
    ],
  };

  return <Line data={data} />;
};

export default WorkoutChart;
