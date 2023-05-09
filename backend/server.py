from flask import Flask, Response, request
from flask_cors import CORS
from gptHelper import connect_and_get_from_sql, loadKey, checkValidPrompt
from robertaHelper import get_roberta_answer

app = Flask(__name__)
CORS(app)


@app.route("/question/metric")
def query_metric():
    prompt = request.args.get("prompt")

    print("User input:", prompt)

    isValid, msg = checkValidPrompt(prompt)

    if not isValid:
        return {"finalAnswer": msg, "data": []}

    loadKey()
    finalAnswer = connect_and_get_from_sql(prompt.replace("%20", " "))
    return finalAnswer


@app.route("/question/context")
def query_context():
    prompt = request.args.get("prompt")

    ansObj = get_roberta_answer(prompt)
    print("serverAns: ", ansObj)

    return ansObj
    # return contextAnswer


if __name__ == "__main__":
    app.run()
