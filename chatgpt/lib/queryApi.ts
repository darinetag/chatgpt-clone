// import openai from "./chatgpt";

// const query = async (prompt: string, chatId: string, model: string) => {
    
//   const res = await (openai as any)
//     .createCompletion({
//       model,
//       prompt,
//       temperature: 0.9,
//       top_p: 1,
//       max_tokens: 1000,
//       frequency_penalty: 0,
//       presence_penalty: 0,
//     })
//     .then(
//       (res: { data: { choices: { text: any }[] } }) => res.data.choices[0].text
//     )
//     .catch(
//       (err: { message: any }) =>
//         `ChatGPT was unable to find an answer for that! (Error: ${err.message})`
//     );
//   return res;
// };
// // function then(arg0: (res: { data: { choices: { text: any }[] } }) => any) {
// //     throw new Error("Function not implemented.");
// //   }
// export default query;

import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  const res = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.9,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) =>
        `ChatGPT was unable to find an answer for that! (Error: ${err.message})`
    );

  return res;
};

export default query;
