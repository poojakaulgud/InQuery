from transformers import AutoModelForQuestionAnswering, AutoTokenizer, pipeline
import pandas as pd
import ast

modelname = 'poojakaulgud/fine-tuned-roberta'
model = AutoModelForQuestionAnswering.from_pretrained(modelname)
tokenizer = AutoTokenizer.from_pretrained(modelname)
nlp = pipeline('question-answering', model=model, tokenizer=tokenizer)

def get_ques_list(ques):
    q=ques.lower()
    # print(q)
    punc = '!,.?'
    ques_words = ['what', 'where', 'who', 'how', 'when', 'why']
    for ele in q:
        if ele in punc:
            q = q.replace(ele, "") 
    # print(q)
    ques_list = q.split()
    for ele in ques_list:        
        if ele in ques_words:
            ques_list.remove(ele) 
    print(ques_list)

    return ques_list

def select_context(ques):
    ques_list = get_ques_list(ques)
    data = pd.read_csv("data/Scraper1500.csv", engine='python', error_bad_lines=False)
    kw_list = data['spacy_keywords'].tolist()
    articles = data['text'].tolist()
    links = data['link'].tolist()
    titles = data['title'].tolist()
    score = []
    flag = False
    # print(kw_list[0])
    print(type(kw_list[0]))
    for i in range(len(kw_list)):
        kw_list[i] = ast.literal_eval(kw_list[i])
        count = 0
        for word in ques_list:
            if word in kw_list[i]:
                # print(i+1,word)
                count += 1
        score.append(count)

    # print('score',score)
    print('maxscore',max(score))
    # print(type(kw_list[10]))
    if max(score) != 0:
        flag = True
        context = articles[score.index(max(score))]
        print(context)
        link = links[score.index(max(score))]
        title = titles[score.index(max(score))]
    else:
        context = ''
        print(context)
        link = ''
        title = ''
        flag = False
    print('flag', flag)
    return context, link, title, flag


def get_roberta_answer(question):
    context, link, title, flag = select_context(question)
    
    if flag:
        result = nlp({
        'question': question,
        'context': context
        })
        ansObj = {
            'answer': result['answer'],
            'link': link,
            'title': title,
            'contextFound': True
        }
    else:
        ansObj = {
            'answer': 'Related article not available in dataset.',
            'contextFound': False
        }
    # print('answer: ',result['answer'])
    return ansObj