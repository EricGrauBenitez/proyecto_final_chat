Esta api corresponde a un proyecto más grande.

https://github.com/EricGrauBenitez/chat-backend.git
https://github.com/EricGrauBenitez/chat-frontend.git

Esta es la parte del proyecto que gestiona la llamada a la api de OpenAi para recoger la respuesta a tu pregunta de ChatGPT.
Está hecho con Typescript porque el tipado que nos proporciona nos permite ser más precisos.

Primero, clona el repositorio en la raiz de tu proyecto:

git clone https://github.com/EricGrauBenitez/chat-openai.git

cd chat-openai
npm install

si no tienes typescript de manera global:
npm install typescript --save-dev

Para poder usarla, necesitarás 2 api keys que proporciona openai a sus usuarios.

Paso 1- Regístrate a:
https://openai.com/

Paso 2- Una vez registrado ves a:
https://platform.openai.com/
y vas a la pestaña "Personal", sección "View API Keys".

Paso 3- Pulsas el botón "Create new secret key" y te dará tu: OPENAI_API_KEY.
Por último, a la sección "ORGANIZATION" de la izquierda, clicas en Settings y recoges el: OPENAI_ORGANIZATION que tiene un formato "org-ewfubffie73t3q"

Debes crear un archivo .env para poder gestionar las variables de entorno y añadir:

BASE_URL=http://localhost:4000
OPENAI_API_KEY=aqui_tu_openai_key
OPENAI_ORGANIZATION=aqui_tu_organization_key

para activar el servidor, abre la terminal desde esta carpeta y escribe el comando:

npm run dev

ENDPOINT:
http://localhost:4000/api/v1/gpt POST con formato:
{
"query": "cómo están los máquinas?"
}
