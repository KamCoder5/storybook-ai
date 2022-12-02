import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

async function createStory(userPrompt) {
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: userPrompt,
    max_tokens: 2000,
    n: 1,
    temperature: 0.8,
  })
  //console.log(completion)
  //completion.status(200).json({ result: completion.data.choices[0].text })
}

export default createStory
