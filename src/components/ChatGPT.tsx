import OpenAI from 'openai';

export async function generateBasicCareer(UserAnswers: string[]) {
  
  const ApiKeyValue = localStorage.getItem("MYKEY");
  if (!ApiKeyValue) {
    throw new Error("API Key not found. Please enter your key on the homepage.");
  }
  const apiKey = JSON.parse(ApiKeyValue);

  
  const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true, 
  });

  const questions = [
    "What was your favorite subject in school?",
    "How would you describe your level of talkativeness?",
    "How comfortable are you with public speaking?",
    "What is your preferred way of communicating?",
    "What equipment do you like to work with?",
    "How would you describe yourself when dealing with stress or pressure?",
    "When working in a group, what role do you take?"
  ];

  const QuestionAndAnswer = questions.map((q, idx) => `${q} ${UserAnswers[idx]}`).join('\n');

  const ChatResults = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: 'You are a Career Assessment quiz results generator. Always be helpful and use a friendly, professional tone.'
      },
      {
        role: 'user',
        content: `Given these responses:\n${QuestionAndAnswer}\n\nReturn exactly 3 careers. Format the output as a numbered list, with one career per line. Each line should have the format: "1. Career Name (Salary)". Do not add any extra sentences, introductions, or explanations.`
    }
    ],
  });

  return ChatResults.choices[0].message.content;
}