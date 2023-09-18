import { Request, Response } from "express";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORGANIZATION,
});

const options = {
  model: "gpt-3.5-turbo",
  temperature: 0,
  max_tokens: 250,
  top_p: 1,
};

export const handleGptAnswer = async (req: Request, res: Response) => {
  const { query } = req.body;

  const openai = new OpenAIApi(configuration);

  try {
    const response = await openai.createChatCompletion({
      ...options,
      messages: [
        {
          role: "user",
          content: query,
        },
      ],
    });

    const { choices } = response.data;

    const answer = choices[0].message?.content;

    res.send(answer).status(200);
  } catch (error) {
    console.log("Error when calling OpenAI API: ", error);
    res.send(error).status(500);
  }
};
