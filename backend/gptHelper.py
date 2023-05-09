import openai
from gpt import GPT
from gpt import Example
import pandas as pd
from fuzzywuzzy import fuzz
from fuzzywuzzy import process
import sqlite3 as sq
from nltk.corpus import stopwords
import enchant
import pandas as pd
import geopandas as gpd
import pandas as pd


fp = "data/states.shp"
map_df = gpd.read_file(fp)
table = pd.read_csv("data/ipc.csv")
district_names = table.District.unique().tolist()
state_names = table.State.unique().tolist()


def allLower(my_list):
    return [x.lower() for x in my_list]


def removeElements(A, B):
    for i in range(len(B) - len(A) + 1):
        for j in range(len(A)):
            if B[i + j] != A[j]:
                break
        else:
            return True
    return False


def loadKey():
    with open("data/API_SECRET_KEY.txt") as f:
        data = f.readline()
    openai.api_key = data


def isValidLocation(input):
    output1 = process.extractOne(
        input, district_names, scorer=fuzz.ratio, score_cutoff=85
    )
    output2 = process.extractOne(input, state_names, scorer=fuzz.ratio, score_cutoff=85)

    print(input, ":\nMatched location with percentage:")
    if output1 is not None:
        print(output1)
    if output2 is not None:
        print(output2)

    if output1 != None or output2 != None:
        return True

    return False


def checkValidPrompt(prompt):
    print("\nChecking for validity of each word of input:\n")

    if prompt.find("jammu") != -1 or prompt.find("Jammu") != -1:
        return True, ""

    # nltk.download("stopwords")
    d = enchant.Dict("en_US")
    keywords = ["india", "cybercrime", "cyber", "crime", "ipc", "women"]

    prompt = prompt.replace("?", "")
    promptSplit = prompt.split(" ")

    index = 0

    while index < len(promptSplit):
        word = promptSplit[index].lower()

        if (
            not d.check(word)
            and word not in stopwords.words("english")
            and not isValidLocation(word)
            and not word.isnumeric()
            and not word in keywords
        ):
            try:
                if not isValidLocation(word + promptSplit[index + 1]):
                    if not isValidLocation(
                        word + promptSplit[index + 1] + promptSplit[index + 2]
                    ):
                        print(word, "\tInvalid")
                        return False, "The question is not valid, please try again"

                    else:
                        print(word, "\tValid")
                        index += 3

                else:
                    print(word, "\tValid")
                    index += 2

            except:
                print(word, "\tInvalid")
                return False, "The question is not valid, please try again"

        print(word, "\tValid")
        index += 1
    # for index, word in enumerate(promptSplit):
    #   word = word.lower()
    #   print(word)

    #   if not skip:
    #     if not d.check(word) and word not in stopwords.words('english') and not isValidLocation(word) and not word.isnumeric() and not word in keywords:
    #       try:
    #         if not isValidLocation(word + promptSplit[index + 1]):
    #           if not isValidLocation(word + promptSplit[index + 1] + promptSplit[index + 2]):
    #             return False, "The question is not valid, please try again"

    #           else:
    #             continue

    #         else:
    #           skip = True
    #           continue

    #       except:
    #         return False, "The question is not valid, please try again"

    #   else:
    #     skip = False
    #     continue
    print(word, "\tValid")
    return True, ""


def get_sql_query(prompt):
    # table_structure = """
    # \n### Postgres SQL tables, with their properties:\n#\n# ipc(State, District, Year, Cases)\n# murder(State, District, Year, Cases)\n# cybercrime(State, District, Year, Cases)\n# women(State, District, Year, Cases)\n# theft(State, District, Year, Cases)\n# kidnap(State, District, Year, Cases)\n# allcrime(State, District, Year, CrimeType, Cases)\n#\n### The above tables contain the statistical crime data of India. Some of its properties are:\n# The table name ipc contains overall crime cases count.If the user query is about general crime count this table must be used. \n# The table names 'murder', 'cybercrime', 'women', 'theft' and 'kidnap' represent the crime types 'Murder','Cyber Crime','Crime committed against women','Theft and Burglary' and 'Kidnapping and Abduction' respectively\n# The attribute State represent the State in which the crime took place. State can have any one of these values ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal','Andaman and Nicobar','Chandigarh','Dadra and Nagar Haveli','Daman and Diu','Lakshadweep','Delhi','Puducherry']\n# The attribute District represent the District in which the crime took place. It contains different districts of India which belong to a state.\n# The attribute year defines the year in which the crimes were committed\n# The attribute Cases defines the number of cases for the tuple ('State', 'District', 'Year')\n### {}\nSELECT
    # """
    # final_prompt = table_structure.replace('{}', prompt)

    response = openai.Completion.create(
        # model="davinci:ft-personal-2023-02-14-16-36-05",
        # model="davinci:ft-personal-2023-04-10-13-56-18",
        # model="davinci:ft-personal-2023-04-22-14-01-00",
        model="davinci:ft-personal-2023-05-05-10-20-20",
        temperature=0,
        prompt=prompt + "->",
        stop=["\n"],
        max_tokens=500,
    )

    return response


# def find_and_replace_closest_matching_location(prompt, sql_query):

#   table = pd.read_csv('data/ipc.csv')
#   district_names = table.District.unique().tolist()
#   location_found = False

#   for word in prompt.split(' '):
#     output1 = process.extractOne(word, district_names, scorer=fuzz.ratio, score_cutoff=85)
#     # output2 = None # process.extractOne(word, district_names, scorer=fuzz.token_set_ratio, score_cutoff=85)
#     if output1 != None: #or output2 != None:
#       location_found = True
#       break

#   if location_found:

#     district_indices = [i+len('District = ')+1 for i in range(len(sql_query)) if sql_query.startswith('District = ', i)]
#     closest_matching_location, _ = output1 # output1 if output1 != None else output2

#     # closest_matching_location = process.extract(place_entity.cities[0], table.District.unique())[0][0]
#     head, splitter, tail = sql_query.partition('District = ')

#     words = tail.split(' ')
#     words[0] = '\'' + closest_matching_location + '\''
#     tail = ' '.join(words)

#     final_query = head + splitter + tail

#   else:
#     final_query = sql_query

#   return final_query


def find_and_replace_closest_matching_location(sql_query):
    district_indices = [
        i + len("District = ") + 1
        for i in range(len(sql_query))
        if sql_query.startswith("District = ", i)
    ]
    state_indices = [
        i + len("State = ") + 1
        for i in range(len(sql_query))
        if sql_query.startswith("State = ", i)
    ]

    final_query = sql_query

    if len(district_indices) == 0 and len(state_indices) == 0:
        return final_query

    print("\nLocation change using fuzzy matching:")

    if len(district_indices) != 0:
        for index in district_indices:
            end_index = index + sql_query[index:].find("'")
            district = sql_query[index:end_index]

            output = process.extractOne(
                district, district_names, scorer=fuzz.ratio, score_cutoff=85
            )

            print(
                "Location in question-", district, "; Location in dataset-", output[0]
            )

            if output == None:
                continue

            else:
                closest_matching_location, _ = output
                final_query = (
                    final_query.partition(district)[0]
                    + closest_matching_location
                    + final_query.partition(district)[2]
                )

    else:
        for index in state_indices:
            end_index = index + sql_query[index:].find("'")
            state = sql_query[index:end_index]

            output = process.extractOne(
                state, state_names, scorer=fuzz.ratio, score_cutoff=85
            )

            print("Location in question-", state, "; Location in dataset-", output[0])

            if output == None:
                continue

            else:
                closest_matching_location, _ = output
                final_query = (
                    final_query.partition(state)[0]
                    + closest_matching_location
                    + final_query.partition(state)[2]
                )

    return final_query


def get_answer_from_sql(prompt, conn):
    words = ["nearby", "around", "touching"]

    if any([x in prompt for x in words]):
        question = prompt
        question = question.replace("?", "")
        state_name = "-"
        print(question)
        question_list = question.split()
        print(question_list)

        for i in range(0, len(state_names)):
            check = removeElements(
                allLower(state_names[i].split()), allLower(question_list)
            )
            if check:
                state_name = state_names[i]
                break

            # print("State: " + state_name)

        g = map_df[map_df.st_nm == state_name]["geometry"].values[0]
        neighbors = map_df[map_df.geometry.touches(g)].st_nm.tolist()

        for i in range(0, len(words)):
            if words[i] in allLower(question_list):
                position = allLower(question_list).index(words[i])
                question_list.pop(position)
                break

        for i in range(0, len(neighbors)):
            if i == len(neighbors) - 1:
                question_list.insert(position + i, neighbors[i])
            else:
                question_list.insert(position + i, neighbors[i] + ",")

        output_question = " ".join([str(elem) for elem in question_list])
        print("output", output_question)
        state_name_list = state_name.split()
        state_name_list = allLower(state_name_list)

        check = removeElements(state_name_list, allLower(output_question.split()))

        if check:
            prompt=output_question.replace(state_name, "")
            # for i in range(0, len(state_name_list)):
            #     lowerlist = allLower(output_question.split())
            #     position = (lowerlist).index(state_name_list[i])
            #     changequestion = output_question.split()
            #     changequestion.pop(position)
            #     prompt = " ".join([str(elem) for elem in changequestion])

        print(prompt)

    #   print(prompt)
    sql_query = "SELECT " + get_sql_query(prompt)["choices"][0]["text"]
    print("\nRaw SQL generated by GPT-3 model:\n", sql_query)

    if sql_query.find("District = ") != -1 or sql_query.find("State = ") != -1:
        final_query = find_and_replace_closest_matching_location(sql_query)

    else:
        final_query = sql_query

    print("\nQuery after location change:\n", final_query)

    try:
        answer = pd.read_sql(final_query, conn)
        print("\nAnswer after SQL query: \n", answer)
        # answer = pd.read_sql("SELECT Year, Cases FROM ipc WHERE District = 'Alwar'", conn)
        if answer.empty or answer.iloc[:, 0][0] == None:
            answer = "We do not have data for the question, please try again"
            isValid = False

        else:
            isValid = True

    except:
        answer = "Query to dataset failed, please try again"
        isValid = False
    # if number_of_rows == 1:
    #   final_answer = answer.iloc[0][0]

    # else:
    #   final_answer = answer

    # print('final answer', final_answer)

    return answer, isValid, prompt


def get_answer(prompt, gpt_answer):
    answer_format = gpt_answer.get_top_reply(prompt)[8:]
    print("\nAnswer format:\n", answer_format)

    return answer_format


gpt_answer = GPT(engine="davinci", temperature=0, max_tokens=100)

answer_formats = pd.read_csv("data/gpt answer format copy.csv")

for question, answer in answer_formats.itertuples(name=None, index=False):
    gpt_answer.add_example(Example(question, answer))


def connect_and_get_from_sql(prompt):
    conn = sq.connect("data/inquery.sqlite")
    answer, validSql, changed_prompt = get_answer_from_sql(prompt, conn)

    if validSql:
        if changed_prompt==prompt:

            answer_format = get_answer(prompt, gpt_answer)
        else:
            answer_format="The visualization is as follows: "
        final_numeric_answer = -1

        lst = list(answer.itertuples(index=False, name=None))

        # print('LIST', lst)

        if len(lst[0]) == 1:
            data = [lst[0][0]]

        else:
            # data = [[lst[j][i] for j in range(len(lst))] for i in range(len(lst[0]))][::-1]
            x, y = [[lst[j][i] for j in range(len(lst))] for i in range(len(lst[0]))][
                0
            ], [[lst[j][i] for j in range(len(lst))] for i in range(len(lst[0]))][1]

            if any(type(item) == int for item in x):
                if any(2016 <= item <= 2020 for item in x):
                    data = [x, y]

                else:
                    data = [y, x]

            else:
                data = [x, y]

        # if answer.shape[0] == 1:
        if "{}" in answer_format:
            final_numeric_answer = answer.iloc[0][0]

        final_answer = answer_format.replace("{}", str(final_numeric_answer))

        conn.close()

        return {"finalAnswer": final_answer, "data": data}

    else:
        return {"finalAnswer": answer, "data": []}


# loadKey()
# print(connect_and_get_from_sql("What is the murder count in Mumbai"))
