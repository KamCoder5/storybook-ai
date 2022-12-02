import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

async function createIllustration(prompt) {
  const response = await openai.createImage({
    prompt: prompt,
    n: 1,
    size: '1024x1024',
  })
  const imageURL = response.data.data[0].url
  return imageURL
}

export default createIllustration
