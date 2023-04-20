import openai
from gpt import GPT
from gpt import Example
import pandas as pd
from fuzzywuzzy import fuzz
from fuzzywuzzy import process
import sqlite3 as sq
import nltk
from nltk.corpus import words, stopwords, wordnet
import regex as re
import enchant

table = pd.read_csv('data/allcrime.csv')
district_names = table.District.unique().tolist()
state_names = table.State.unique().tolist()

def loadKey():
  with open('data/API_SECRET_KEY.txt') as f:
      data = f.readline()
  openai.api_key = data


def isValidLocation(input):  
  output1 = process.extractOne(input, district_names, scorer=fuzz.ratio, score_cutoff=85)
  output2 = process.extractOne(input, state_names, scorer=fuzz.ratio, score_cutoff=85)
  
  if output1 != None or output2 != None:
    return True
  
  return False



def checkValidPrompt(prompt):
  d = enchant.Dict("en_US")
  keywords = ['india', 'cybercrime', 'cyber', 'crime', 'ipc', 'women']

  prompt = prompt.replace('?', '')

  for word in prompt.split(' '):
    word = word.lower()
    print(word)

    if not d.check(word) and word not in stopwords.words('english') and not isValidLocation(word) and not word.isnumeric() and not word in keywords:
      return False
    
  return True



def get_sql_query(prompt):
  response = openai.Completion.create(
    #model="davinci:ft-personal-2023-02-14-16-36-05",
    # model="davinci:ft-personal-2023-04-10-13-56-18",
    model="davinci:ft-personal-2023-04-10-16-35-44",
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
  print('Raw SQL:\n', sql_query)

  if sql_query.find('District = ') != -1:
    final_query = find_and_replace_closest_matching_location(prompt, sql_query)

  else:
    final_query = sql_query

  print('\nQuery after location change:\n', final_query)
  answer = pd.read_sql(final_query, conn)
  # answer = pd.read_sql("SELECT Year, Cases FROM ipc WHERE District = 'Alwar'", conn)
  print('\nAnswer after SQL query \n', answer)

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

  print('LIST', lst)

  if len(lst[0]) == 1:
    data = [lst[0][0]]

  else:
    # data = [[lst[j][i] for j in range(len(lst))] for i in range(len(lst[0]))][::-1]
    x, y = [[lst[j][i] for j in range(len(lst))] for i in range(len(lst[0]))][0], [[lst[j][i] for j in range(len(lst))] for i in range(len(lst[0]))][1]

    if any(type(item) == int for item in x):
      if any(2016<=item<=2020 for item in x):
        data = [x, y]

      else:
        data = [y, x]

    else:
      data = [x, y]

  

  # if answer.shape[0] == 1:
  if '{}' in answer_format:
    print("ANSWER IS A SINGLE VALUE ", answer.iloc[0][0])
    final_numeric_answer = answer.iloc[0][0]


  final_answer = answer_format.replace('{}', str(final_numeric_answer))

  conn.close()

  return {
    "finalAnswer": final_answer,
    "data": data
  }


# loadKey()
# print(connect_and_get_from_sql("What is the murder count in Mumbai"))