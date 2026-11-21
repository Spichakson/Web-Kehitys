import json
from flask import Flask, Response

app = Flask(__name__)
@app.route('/number/<int:number>')
def is_prime(number):
    try:
        
        if number < 2:
            response = {
                "message" : "The number is not a prime number",
                "status" : 200
            }
            return response

        i = 2
        while i * i <= number:
            if number % i == 0:
                response = {
                    "message" : "The number is not a prime number",
                    "status" : 200
                }
                return response
                
            i += 1


        response = {
            "message" : "The number is a prime number",
            "status" : 200
            }

        return response
    except ValueError:
        response = {
            "message" : "Invalid number as addend",
            "status" : 400
        }
        json_response = json.dumps(response)
        http_response = Response(response=json_response, status=400, mimetype="application/json")
        return http_response

if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=5000)

    