const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const usersRoutes = require('./routes/users');
const connectDB = require('./db');
const loginRouter = require('./routes/login');
const chatRoutes = require('./routes/chat');
require('dotenv').config();

app.use(express.json());

app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200,
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ? Rutas

app.use('/users', usersRoutes);
app.use('/chat', chatRoutes);
app.use('/login', loginRouter);
app.use('/api/v1', chatRoutes);
app.post('/chat', chatRoutes);


// Iniciar el servidor
app.listen(8000, () => {
  console.log('Servidor en ejecución en http://localhost:8000');
});

// ! Base de datos

connectDB();
