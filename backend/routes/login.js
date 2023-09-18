const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

// Ruta para inicio de sesión
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).json({ mensaje: 'Email y contraseña son requeridos' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ mensaje: 'Credenciales inválidas' });
    }

    const passwordValidated = await bcrypt.compare(password, user.password);

    if (!passwordValidated) {
      return res.status(401).json({ mensaje: 'Credenciales inválidas' });
    }

    const chatId = user.chats.length > 0 ? user.chats[0]._id : null;
    const role = user.role;

    const token = jwt.sign({ email, userId: user._id, chatId }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token, userId: user._id, chatId, role });
  } catch (error) {
    console.error('Error en el inicio de sesión', error);
    res.status(500).json({ mensaje: 'Error en el inicio de sesión' });
  }
});

module.exports = router;
