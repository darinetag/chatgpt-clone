import  Configuration from "openai";
import OpenAIAPI  from "openai";


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIAPI(configuration);

export default openai;
