import { Configuration, OpenAIApi } from "openai-edge"
import { OpenAIStream, StreamingTextResponse } from "ai"

export const runtime = 'edge' 

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config);

export async function POST(request: Request){
    const{ messages } = await request.json()

    console.log(messages);
    const response = await openai.createChatCompletion({

        model: 'gpt-3.5-turbo',
        stream: true,
        messages: [
        {role:"system", content: 'You are an AI Counselor for admission company named Impact, which gives full maintenance for their students. You need to advise clients and help them with basic questions about admissions in top universities. Try to advertise the courses and free consulting appointments of the website.'},
            ...messages
        ],
        max_tokens: 512,
    })
    const stream = await OpenAIStream(response);
    return new StreamingTextResponse(stream);
}