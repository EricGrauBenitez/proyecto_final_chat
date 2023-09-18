# Chat OpenAI API

This API corresponds to a larger project.

Related repositories:
- [chat-backend](https://github.com/EricGrauBenitez/chat-backend.git)
- [chat-frontend](https://github.com/EricGrauBenitez/chat-frontend.git)

This is the part of the project responsible for handling calls to the OpenAI API to retrieve responses to your ChatGPT questions. It's developed in TypeScript to take advantage of its type system, which allows us to be more precise.

## Getting Started

1. Clone this repository into the root of your project:

 
   git clone https://github.com/EricGrauBenitez/chat-openai.git
   cd chat-openai
   npm install

If you don't have TypeScript globally installed, install it locally as a development dependency:

npm install typescript --save-dev

### To use this API, you'll need two API keys provided by OpenAI.

## Obtaining Your OpenAI API Keys
- Step 1: Register with OpenAI
Register at https://openai.com/.

- Step 2: Obtain Your API Keys
Once registered, go to https://platform.openai.com/ and visit the "Personal" tab under the "View API Keys" section.

- Step 3: Generate a New Secret Key
Click the "Create new secret key" button to obtain your OPENAI_API_KEY. Finally, in the "ORGANIZATION" section on the left, click on "Settings" and retrieve your OPENAI_ORGANIZATION, which follows the format "org-ewfubffie73t3q."

You should create a .env file to manage environment variables and add the following:


- BASE_URL=http://localhost:4000
- OPENAI_API_KEY=your_openai_key_here
- OPENAI_ORGANIZATION=your_organization_key_here
  
### To start the server, open the terminal from this folder and run the following command:

npm run dev

ENDPOINT: http://localhost:4000/api/v1/gpt
POST with format:
json
{
  "query": "how are the machines doing?"
}
