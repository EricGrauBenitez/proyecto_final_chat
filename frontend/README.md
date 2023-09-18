# Chat with ChatGPT Project

Hello World! I'm Eric Grau, and this is my final project for the IT Codespace Full Stack Web Development course. I've chosen to create a chat using ChatGPT's AI, as its functionality has become increasingly relevant during the course, and it's changing the world. Therefore, it's important to understand how to apply it.

This project consists of several parts:

- [chat-backend](https://github.com/EricGrauBenitez/chat-backend.git)
- [chat-openai](https://github.com/EricGrauBenitez/chat-openai.git)

## Front-end Part

### Getting Started ▶️

Requirements:
- You must have NPM and NodeJS installed.
- Apache2 is also required.

React Installation:
git clone https://github.com/EricGrauBenitez/chat-frontend.git

Once, the project has been created. We have to install some dependencies:

npm install

## Adding tools
Now we have to install redux, axios and router-dom

npm install react-redux @reduxjs/toolkit axios react-router-dom

## To activate the project, open the terminal from the folder and run:

npm start


### Structure

The application itself is a chat with different conversations. There is also a user page to manage user information.

### Breakpoints

To ensure a responsive mobile experience, the following breakpoints have been defined:

- Up to 767px: Mobile
- Between 768px and 1023px: Tablet
- 1024px or larger: Screen

### Login and Registration

For login and registration, I've chosen to use localStorage to manage different IDs and tokens. To handle user information, I've also used userSlice.

### Folder Architecture

We have directories for layout, CSS, components, pages, and more.

