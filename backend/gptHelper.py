import openai
from gpt import GPT
from gpt import Example
import pandas as pd
from fuzzywuzzy import fuzz
from fuzzywuzzy import process
import sqlite3 as sq


def loadKey():
  with open('data/API_SECRET_KEY.txt') as f:
      data = f.readline()
  openai.api_key = data


def get_sql_query(prompt):
  response = openai.Completion.create(
    model="davinci:ft-personal-2023-02-14-16-36-05",
    temperature=0,
    prompt=prompt+"->",
    stop=["\n"],
    max_tokens=50)

  return response 


def find_and_replace_closest_matching_location(prompt, sql_query):

  table = pd.read_csv('data/allcrime.csv')
  district_names = table.District.unique().tolist()
  location_found = False

  for word in prompt.split(' '):
    output1 = process.extractOne(word, district_names, scorer=fuzz.ratio, score_cutoff=85)
    # output2 = None # process.extractOne(word, district_names, scorer=fuzz.token_set_ratio, score_cutoff=85)
    if output1 != None: #or output2 != None:
      location_found = True
      break

  if location_found:
    closest_matching_location, _ = output1 # output1 if output1 != None else output2
    
    # closest_matching_location = process.extract(place_entity.cities[0], table.District.unique())[0][0]
    head, splitter, tail = sql_query.partition('District = ')

    words = tail.split(' ')
    words[0] = '\'' + closest_matching_location + '\''
    tail = ' '.join(words)

    final_query = head + splitter + tail

  else:
    final_query = sql_query

  return final_query


def get_answer_from_sql(prompt, conn):
#   print(prompt)
  sql_query = get_sql_query(prompt)['choices'][0]['text']
  print('raw sql', sql_query)

  if sql_query.find('District = ') != -1:
    final_query = find_and_replace_closest_matching_location(prompt, sql_query)

  else:
    final_query = sql_query

  print('query after location change', final_query)
  answer = pd.read_sql(final_query, conn)
  # answer = pd.read_sql("SELECT Year, Cases FROM ipc WHERE District = 'Alwar'", conn)
  print('answer after sql query', answer)

  # if number_of_rows == 1:
  #   final_answer = answer.iloc[0][0]

  # else:
  #   final_answer = answer

  # print('final answer', final_answer)

  return answer



def get_answer(prompt, gpt_answer):
  answer_format = gpt_answer.get_top_reply(prompt)[8:]
  print('answer format', answer_format)

  return answer_format



gpt_answer = GPT(engine="davinci", temperature=0, max_tokens=100)

answer_formats = pd.read_csv('data/gpt answer format.csv')

for (question, answer) in answer_formats.itertuples(name=None, index=False):
  gpt_answer.add_example(Example(question, answer))


def connect_and_get_from_sql(prompt):

  conn = sq.connect('data/inquery.sqlite')
  answer = get_answer_from_sql(prompt, conn)

  answer_format = get_answer(prompt, gpt_answer)

  final_numeric_answer = -1

  lst = list(answer.itertuples(index=False, name=None))
  data = [[lst[j][i] for j in range(len(lst))] for i in range(len(lst[0]))]

  # if answer.shape[0] == 1:
  if '\{\}' in answer_format:
    print("ANSWER IS A SINGLE VALUE ", answer.iloc[0][0])
    final_numeric_answer = answer.iloc[0][0]


  final_answer = answer_format.replace('\{\}', str(final_numeric_answer))

  conn.close()

  return {
    "finalAnswer": final_answer,
    "data": data
  }


# loadKey()
# print(connect_and_get_from_sql("What is the murder count in Mumbai"))