import json
from flask import Flask, Response, jsonify
with open("Python Flask/2/dictionary.json", encoding="utf-8") as file:
        words = json.load(file)


app = Flask(__name__)
@app.route('/translate/<word>')
def translate(word):
    word = word.strip().lower()
   
    if word in words:
        translation = words[word]
        return jsonify({
            "English" : word,
            "Finnish" : translation
        })
    else:
        response = {
            "error" : "word not found",
            "status" : 404
        }

        return response


@app.route('/words')
def english_words_list():
    eng_words = list(words.keys())
    return jsonify({
         "English" : eng_words
    })



if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=5000)
