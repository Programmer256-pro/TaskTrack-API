const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let tasks = [
  { id: 1, title: 'Complete OS Lab Assignment #2', completed: false },
  { id: 2, title: 'Push repository to GitHub', completed: false }
];

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date() });
});

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`TaskTrack-API running on port ${PORT}`);
});