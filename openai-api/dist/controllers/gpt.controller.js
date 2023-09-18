"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGptAnswer = void 0;
const openai_1 = require("openai");
const configuration = new openai_1.Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_ORGANIZATION,
});
const options = {
    model: "gpt-3.5-turbo",
    temperature: 0,
    max_tokens: 250,
    top_p: 1,
};
const handleGptAnswer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { query } = req.body;
    const openai = new openai_1.OpenAIApi(configuration);
    try {
        const response = yield openai.createChatCompletion(Object.assign(Object.assign({}, options), { messages: [
                {
                    role: "user",
                    content: query,
                },
            ] }));
        const { choices } = response.data;
        const answer = (_a = choices[0].message) === null || _a === void 0 ? void 0 : _a.content;
        res.send(answer).status(200);
    }
    catch (error) {
        console.log("Error when calling OpenAI API: ", error);
        res.send(error).status(500);
    }
});
exports.handleGptAnswer = handleGptAnswer;
