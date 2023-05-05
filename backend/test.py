import openai
from gptHelper import loadKey

loadKey()

response = openai.Completion.create(
    model="davinci:ft-personal-2023-04-22-14-01-00",
    temperature=0,
    prompt="What was the count of kidnappings in Maharashtra in 2019?->",
    stop=["\n"],
    max_tokens=60)

print((response))