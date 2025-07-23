import { OpenAI } from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end("Only POST allowed");

  const { phase, diet, allergies } = req.body;

  const prompt = `
Create a 3-day meal prep plan for someone in the "${phase}" phase of their menstrual cycle.
They follow a "${diet}" diet and are allergic to: ${allergies}.
Include meal descriptions and how each meal supports hormonal balance.
  `;

  try {
    const chat = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7
    });

    res.status(200).json({ plan: chat.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong", detail: err.message });
  }
}
