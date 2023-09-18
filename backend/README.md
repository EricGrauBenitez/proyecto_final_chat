Hola Mundo! Soy Eric Grau y este es mi proyecto final del curso Full Stack web development de la escuela IT Codespace. He decidido crear un chat con la IA de ChatGPT, ya que durante el curso explotó su funcionalidad y el mundo está cambiando gracias a él. Debido a esto, hay que saber entender cómo aplicarla .

Este proyecto está formado por otras partes:
https://github.com/EricGrauBenitez/chat-frontend.git
https://github.com/EricGrauBenitez/chat-openai.git

Esta es la parte del Back-end:

GET START

1. Requirements
   Asegúrate de tener una herramienta de edición de texto y código como Visual Studio Code e instalar el NPM, apache2 y que funcione.

2. Install
   Node.js

- Para poder descargar Node.js desde la terminal BASH:
  sudo npm install -g n
  sudo n latest

- Revisa la versión de node con:
  node -v

  -MongoDB
  echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
  sudo apt-get install -y mongodb-org

  -Inicia MongoDB:
  sudo systemctl start mongod

3. Clona el repositorio

git clone https://github.com/EricGrauBenitez/chat-backend.git

- En tu directorio:
  npm install

EXPLICACIÓN DEL BACK-END
Escogí NodeJs y MongoDb porque comparten el mismo lenguaje de programación y son muy versátiles. Además, el sistema de la base de datos no era muy compleja y se puede gestionar fácilmente con estas tecnologías.

1. User
   Ejemplo de user:
   {
   "name": "Nombre del Usuario",
   "lastName": "Apellido del Usuario",
   "city": "Ciudad (opcional)",
   "country": "País (opcional)",
   "email": "correo@ejemplo.com",
   "password": "contraseña_segura",
   "chats": [
   {
   "\_id": "ID_DEL_CHAT_1",
   "conversation": [],
   "title": "Título del Chat 1",
   "createdAt": 1631295667000
   }]}

   Tabla con los endpoints de user:
   URL TYPE DESCRIPTION
   http://localhost:8000/users/:id GET get user data by id
   http://localhost:8000/users/register POST create of an user
   http://localhost:8000/users/email POST change with the email (forgot the password)
   http://localhost:8000/users/:id PUT update an user by id
   http://localhost:8000/users/:id DELETE delete an user by id
   http://localhost:8000/login POST create a token for the auth

   Tabla con los endpoint relacionado con los chats:
   URL TYPE DESCRIPTION
   http://localhost:8000/chat/:userId/:chatId GET get user chat by id
   http://localhost:8000/chat/:userId/ POST create a chat
   http://localhost:8000/chat/:userId/:chatId
   http://localhost:8000/chat/conversation/:userId/:chatId PUT clean a conversation
   http://localhost:8000/chat/:userId/:chatId DELETE delete a chat by id

Ruta de mongoDB: mongodb://localhost:27017

En tu archivo .env, añade este campo para el login:
JWT_SECRET="Introduce_aquí_tu_clave_secreta"

Una vez está todo hecho, escribe en tu terminal BASH desde el directorio raíz del backend:
nodemon app.js
