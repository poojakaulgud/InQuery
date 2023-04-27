import openai
from gptHelper import loadKey

loadKey()

response = openai.Completion.create(
    model="davinci:ft-personal-2023-04-22-14-01-00",
    temperature=0,
    prompt="Which state has the highest murder cases in 2016?->",
    stop=["\n"],
    max_tokens=60)

print((response))