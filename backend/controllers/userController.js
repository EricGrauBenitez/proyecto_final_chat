const User = require('../models/User');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const userController = {
  // Crear un usuario
  createUser: async (req, res) => {
    try {
      const { name, lastName, city, country, email, password, chats } = req.body;

      // Validar la contraseña
      // if (contraseña.length < 8) {
      //   return res.status(400).json({ mensaje: 'La contraseña debe tener al menos 8 caracteres' });
      // }

      // Generar el hash de la contraseña
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log(hashedPassword);
      console.log(password);

      const newUser = new User({
        name,
        lastName,
        city,
        country,
        email,
        password: hashedPassword,
        role: 'user',
        chats: [
          {
            _id: uuidv4(),
            conversation: [],
            title: "New chat",
            createdAt: new Date().getTime()
          }
        ]
      });

      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await User.findOne({ email });

      if (oldUser) {
        return res.status(409).json({ error: "El usuario ya existe. Por favor, inicie sesión o utilice otro correo electrónico." });
      }

      await newUser.save();

      res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al registrar el usuario' });
    }
  },

  // Controlador getAllUsers para un futuro admin
  getAllUsers: async (req, res) => {
    try {
      if (req.body.role !== 'admin') {
        return res.status(403).json({ mensaje: 'Acceso denegado. Solo los administradores pueden ver todos los usuarios.' });
      }

      const users = await User.find();

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener los usuarios' });
    }
  },


  // Obtener un usuario por su ID
  getUserById: async (req, res) => {

    try {
      const { id } = req.params;
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener el usuario' });
    }
  },

  // Actualizar un usuario
  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, lastName, city, country, email, password, role, chats } = req.body;

      // Validar la contraseña
      if (password && password.length < 8) {
        return res.status(400).json({ mensaje: 'La contraseña debe tener al menos 8 caracteres' });
      }

      // Generar el hash de la nueva contraseña (si se proporciona)
      let hashedPassword;
      if (password) {
        hashedPassword = await bcrypt.hash(password, 10);
      }

      const updatedUser = await User.findByIdAndUpdate(
        id,
        { name, lastName, city, country, email, password: hashedPassword, role, chats },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al actualizar el usuario' });
    }
  },

  // Eliminar un usuario
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
      res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar el usuario' });
    }
  },

  getUserByEmail: async (req, res) => {
    const userEmail = req.body.email;

    try {
      // Buscar un usuario en la base de datos por correo electrónico
      const user = await User.findOne({ email: userEmail });

      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      // Responder con los datos del usuario encontrado
      res.json({ userId: user._id });
    } catch (error) {
      console.error('Error al buscar usuario por correo electrónico:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  },


};


module.exports = userController;
