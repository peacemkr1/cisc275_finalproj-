// ChatGPT.tsx: Contains backend logic to generate basic and detailed career recommendations using OpenAI's API
import OpenAI from 'openai';

// Generates basic career suggestions based on short multiple-choice answers
export async function generateBasicCareer(UserAnswers: string[]) {
  
  // Retrieve stored API key from localStorage
  const ApiKeyValue = localStorage.getItem("MYKEY");
  // Validate that an API key exists before continuing
  if (!ApiKeyValue) {
    throw new Error("API Key not found. Please enter your key on the homepage.");
  }
  const apiKey = JSON.parse(ApiKeyValue);

  
  // Create a new OpenAI instance configured for browser use
  const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true, 
  });

  // Define the list of questions used in the quiz
  const questions = [
    "What was your favorite subject in school?",
    "How do you prefer your workday to be structured?",
    "How comfortable are you with public speaking?",
    "What is your preferred way of communicating?",
    "Which type of equipment do you most enjoy using in a work setting?",
    "Which type of decision-making environment do you prefer?",
    "When working in a group, what role do you take?",
    "Which work environment do you prefer?",
    "What motivates you most when choosing a career?",
    "Which career field are you most drawn to?"
  ];

  // Format the user responses into a single prompt string for the language model
  const QuestionAndAnswer = questions.map((q, idx) => `${q} ${UserAnswers[idx]}`).join('\n');

  // Make a request to OpenAI's GPT model with system and user prompt
  const ChatResults = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: 'You are a Career Assessment quiz results generator. Always be helpful and use a friendly, professional tone.'
      },
      {
        role: 'user',
        content: `Given these responses:
${QuestionAndAnswer}

Please return a JSON array of exactly 5 objects. Each object must have the keys "career", "education", "jobGrowth", "salary", and "match". Do not include any extra text, comments, or ellipses—output only valid JSON. Example format:

[
  {
    "career": "Software Engineer",
    "education": "Bachelor's in Computer Science",
    "jobGrowth": "25%",
    "salary": "$100,000/year",
    "match": "85%"
  },
  {
    "career": "Data Analyst",
    "education": "Bachelor's in Statistics",
    "jobGrowth": "15%",
    "salary": "$70,000/year",
    "match": "80%"
  },
  {
    "career": "Project Manager",
    "education": "Bachelor's in Business Administration",
    "jobGrowth": "30%",
    "salary": "$90,000/year",
    "match": "78%"
  },
  {
    "career": "UX Designer",
    "education": "Bachelor's in Design",
    "jobGrowth": "50%",
    "salary": "$85,000/year",
    "match": "75%"
  },
  {
    "career": "Marketing Coordinator",
    "education": "Bachelor's in Marketing",
    "jobGrowth": "22%",
    "salary": "$65,000/year",
    "match": "72%"
  }
]`
      }
    ],
  });

  // Return only the assistant's reply (JSON array) from the model response
  return ChatResults.choices[0].message.content;
}

// Generates detailed career suggestions based on free-text written responses
export async function generateDetailedCareer(UserAnswers: string[]) {

  // Retrieve stored API key from localStorage
  const ApiKeyValue = localStorage.getItem("MYKEY");

  // Validate that an API key exists before continuing
  if (!ApiKeyValue) {
    throw new Error("API Key not found. Please enter your key on the homepage.");
  }
  const apiKey = JSON.parse(ApiKeyValue);

  // Create a new OpenAI instance configured for browser use
  const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
  });

  // Define the list of questions used in the quiz
  const questions = [
    "Describe a time when you solved a problem creatively.",
    "What motivates you more: recognition, salary, growth opportunities, or making a difference?",
    "If you had complete freedom to design your ideal 9-to-5 workday, how would you structure it?",
    "Describe a time you felt deeply accomplished after completing a task. What were you doing, and why did it feel meaningful to you?",
    "When facing a high-pressure situation, do you prefer to lead a team, work independently, or support someone else's leadership? Why?",
    "What kind of long-term impact do you want your career to have—on people, society, technology, or something else? Why is that important to you?",
    "Which subjects or topics have consistently caught your interest over the years?",
    "Describe a collaboration experience you had to meet a goal.",
    "Describe your ideal team dynamic.",
    "Describe an experience where you felt highly engaged and motivated."
  ];

  // Format the user responses into a single prompt string for the language model
  const QuestionAndAnswer = questions.map((q, idx) => `${q} ${UserAnswers[idx]}`).join('\n');

  // Make a request to OpenAI's GPT model with system and user prompt
  const ChatResults = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: 'You are a Career Assessment quiz results generator. Always be helpful and use a friendly, professional tone.'
      },
      {
        role: 'user',
        content: `Given these responses:
${QuestionAndAnswer}

Please return a JSON array of exactly 5 objects. Each object must have the keys "career", "education", "jobGrowth", "salary", and "match".

[
  {
    "career": "Software Engineer",
    "education": "Bachelor's in Computer Science",
    "jobGrowth": "25%",
    "salary": "$100,000/year",
    "match": "85%"
  },
  {
    "career": "Data Analyst",
    "education": "Bachelor's in Statistics",
    "jobGrowth": "15%",
    "salary": "$70,000/year",
    "match": "80%"
  },
  {
    "career": "Project Manager",
    "education": "Bachelor's in Business Administration",
    "jobGrowth": "30%",
    "salary": "$90,000/year",
    "match": "78%"
  },
  {
    "career": "UX Designer",
    "education": "Bachelor's in Design",
    "jobGrowth": "50%",
    "salary": "$85,000/year",
    "match": "75%"
  },
  {
    "career": "Marketing Coordinator",
    "education": "Bachelor's in Marketing",
    "jobGrowth": "22%",
    "salary": "$65,000/year",
    "match": "72%"
  }
]`
      }
    ],
  });

  // Return only the assistant's reply (JSON array) from the model response
  return ChatResults.choices[0].message.content;
}