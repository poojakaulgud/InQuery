from gptHelper import checkValidPrompt, isValidLocation
import enchant
from nltk.corpus import words, stopwords, wordnet
# print(d.check("women"))

# print(isValidLocation("is"))

# def checkValidPrompt(prompt):
#   d = enchant.Dict("en_US")
#   keywords = ['india', 'cybercrime', 'cyber', 'crime', 'ipc', 'women']

#   prompt = prompt.replace('?', '')

#   for word in prompt.split(' '):
#     word = word.lower()
#     print(word)

#     if not d.check(word) and word not in stopwords.words('english') and not isValidLocation(word) and not word.isnumeric() and not word in keywords:
#       return False
    
#   return True


# print(checkValidPrompt("what is the murder count in mumbai in 2019?"))

