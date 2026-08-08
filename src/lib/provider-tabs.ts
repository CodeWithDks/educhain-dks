const CHAIN = `prompt = PromptTemplate(
    template="Explain {topic} in simple words.",
    input_variables=["topic"]
)
parser = StringOutputParser()

chain = prompt | model | parser
response = chain.invoke({"topic": "Artificial Intelligence"})
print(response)`;

export const providerTabs = [
  {
    label: "OpenAI",
    code: `from educhain.prompts import PromptTemplate
from educhain.models import ChatModel
from educhain.output_parsers import StringOutputParser

model = ChatModel()  # defaults to ChatOpenAI under the hood

${CHAIN}`,
  },
  {
    label: "Groq",
    code: `import os
from langchain_groq import ChatGroq
from educhain.prompts import PromptTemplate
from educhain.models import ChatModel
from educhain.output_parsers import StringOutputParser

groq_model = ChatGroq(
    model="llama-3.3-70b-versatile",
    api_key=os.getenv("GROQ_API_KEY"),
    max_tokens=300,
)
model = ChatModel(model=groq_model)

${CHAIN}`,
  },
  {
    label: "Gemini",
    code: `import os
from langchain_google_genai import ChatGoogleGenerativeAI
from educhain.prompts import PromptTemplate
from educhain.models import ChatModel
from educhain.output_parsers import StringOutputParser

gemini_model = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    api_key=os.getenv("GOOGLE_API_KEY"),
)
model = ChatModel(model=gemini_model)

${CHAIN}`,
  },
  {
    label: "Anthropic",
    code: `import os
from langchain_anthropic import ChatAnthropic
from educhain.prompts import PromptTemplate
from educhain.models import ChatModel
from educhain.output_parsers import StringOutputParser

anthropic_model = ChatAnthropic(
    model="claude-sonnet-4-5",
    api_key=os.getenv("ANTHROPIC_API_KEY"),
)
model = ChatModel(model=anthropic_model)

${CHAIN}`,
  },
];
