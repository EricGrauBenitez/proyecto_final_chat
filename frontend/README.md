chat-frontend 💻

Hola Mundo! Soy Eric Grau y este es mi proyecto final del curso Full Stack web development de la escuela IT Codespace. He decidido crear un chat con la IA de ChatGPT, ya que durante el curso explotó su funcionalidad y el mundo está cambiando gracias a él. Debido a esto, hay que saber entender cómo aplicarla .

Este proyecto está formado por otras partes:

https://github.com/EricGrauBenitez/chat-backend.git
https://github.com/EricGrauBenitez/chat-openai.git

Esta es la parte del Front-end:

Get Start ▶️
:

1. Requirements
   Debes de tener NPM, NodeJS y apache2 instalados.

Install
React
We are going to clone the repository

git clone https://github.com/EricGrauBenitez/chat-frontend.git
Once, the project has been created. We have to install some dependencies:

npm install

Adding tools
Now we have to install redux, axios and router-dom

npm install react-redux @reduxjs/toolkit axios react-router-dom

Vamos a activarlo: abre la terminal desde la carpeta

npm start

3. Estructura
   La App en sí es el Chat con diferentes conversaciones. Hay una página de user para poder gestionar la información del usuario.

Breakpoints
Por la premisa mobile responsive:

A table with most commons breakpoints:
SIZE DEVICE
under 767px Mobile
between 768px and 1023px Tablet
min 1024 Screen

Login y Registro
Sobre el login y el register he optado por usar la localStorage para gestionar los diferentes ids así como el token. Para poder gestionar información del usuario también he usado el userSlice.

Arquitectura de carpetas:
Tenemos directorios con el layout, una solo de los .css, componentes, páginas...
