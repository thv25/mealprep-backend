# Meal Prep Planner API for Vercel

This is a simple Vercel-compatible serverless API that uses OpenAI GPT to generate meal prep plans based on menstrual cycle phase, diet, and allergies.

## Setup

1. Deploy to [Vercel](https://vercel.com)
2. Add environment variable:

```
OPENAI_API_KEY=your-openai-key
```

3. POST request to `/api/generate` with JSON:

```json
{
  "phase": "Follicular",
  "diet": "Vegan",
  "allergies": "nuts"
}
```
