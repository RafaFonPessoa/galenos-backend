require('dotenv').config()

const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// Rotas
const medicationRoutes = require('./routes/medicationRoutes')
app.use('/api/medications', medicationRoutes)

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/pages', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});