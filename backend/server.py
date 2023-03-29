from flask import Flask, request
from gptHelper import connect_and_get_from_sql, loadKey

app = Flask(__name__)

@app.route("/question/metric")
def query_metric():
    prompt = request.args.get("prompt")
    loadKey()
    finalAnswer = connect_and_get_from_sql(prompt)
    return finalAnswer


@app.route("/question/context")
def query_metric():
    prompt = request.args.get("prompt")

    # TODO: Roberta logic
    
    return ""

if __name__ == "__main__":
    app.run()