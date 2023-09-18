# Chat Application with ChatGPT's AI

Hello World! I'm Eric Grau, and this is my final project for the Full Stack Web Development course at IT Codespace school. I've decided to create a chat application with ChatGPT's AI, as its functionality has exploded during the course, and the world is changing thanks to it. Because of this, it's essential to know how to apply it.

## Getting Started

### Requirements

Before you begin, make sure to have the following tools and software installed:

- Visual Studio Code or any text and code editing tool
- Node.js and NPM

### Install Node.js

To download Node.js, follow these steps:

1. Open your terminal or BASH terminal.

2. Run the following commands to install and set up Node.js:

   ```bash
   sudo npm install -g n
   sudo n latest


Verify the Node.js installation by checking the version:
node -v

### Install MongoDB

To download MongoDB, follow these steps:

1. Open your terminal or BASH terminal.

2. Run the following commands to install and set up Node.js:

   ```bash
   echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
  sudo apt-get install -y mongodb-org
  
 3. Run MongoDB:

   sudo systemctl start mongod


Clone the repository
git clone https://github.com/EricGrauBenitez/chat-backend.git

In your directory:
npm install

## BACK-END EXPLANATION
I chose Node.js and MongoDB because they share the same programming language and are very versatile. Moreover, the database system was not very complex and can be easily managed with these technologies.

User
User example:
{
"name": "User's Name",
"lastName": "User's Last Name",
"city": "City (optional)",
"country": "Country (optional)",
"email": "email@example.com",
"password": "secure_password",
"chats": [
{
"_id": "ID_OF_CHAT_1",
"conversation": [],
"title": "Chat Title 1",
"createdAt": 1631295667000
}
]
}


| Table with user endpoints: |
| URL                                      | TYPE  | DESCRIPTION                               |
|------------------------------------------|-------|-------------------------------------------|
| http://localhost:8000/users/:id          | GET   | get user data by id                       |
| http://localhost:8000/users/register     | POST  | create of an user                         |
| http://localhost:8000/users/email        | POST  | change with the email (forgot the password)|
| http://localhost:8000/users/:id          | PUT   | update an user by id                      |
| http://localhost:8000/users/:id          | DELETE| delete an user by id                      |
| http://localhost:8000/login              | POST  | create a token for the auth               |

| Table with chat-related endpoints: |
| URL                                      | TYPE  | DESCRIPTION                               |
|------------------------------------------|-------|-------------------------------------------|
| http://localhost:8000/chat/:userId/:chatId | GET  | get user chat by id                       |
| http://localhost:8000/chat/:userId/      | POST  | create a chat                              |
| http://localhost:8000/chat/conversation/:userId/:chatId | PUT | clean a conversation                |
| http://localhost:8000/chat/:userId/:chatId | DELETE| delete a chat by id                      |

MongoDB route: mongodb://localhost:27017

In your .env file, add this field for login:
JWT_SECRET="Insert_your_secret_key_here"
