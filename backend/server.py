from flask import Flask, Response, request
from flask_cors import CORS
from gptHelper import connect_and_get_from_sql, loadKey, checkValidPrompt

app = Flask(__name__)
CORS(app)

@app.route("/question/metric")
def query_metric():
    prompt = request.args.get("prompt")

    if not checkValidPrompt(prompt):
        return Response(status=404)

    loadKey()
    finalAnswer = connect_and_get_from_sql(prompt.replace('%20', ' '))
    return finalAnswer


@app.route("/question/context")
def query_context():
    prompt = request.args.get("prompt")

    # TODO: Roberta logic
    
    return ""

if __name__ == "__main__":
    app.run()