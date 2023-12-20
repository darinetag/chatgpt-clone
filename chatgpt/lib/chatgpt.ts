import Configuration, { ClientOptions } from "openai";
import OpenAIApi from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration as unknown as ClientOptions);

export default openai;

//import Configuration from "openai";
// import OpenAIApi from "openai";

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// export default openai;
