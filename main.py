from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def windmill_game():
    return render_template('windmill.html')

# if __name__ == '__main__':
#     app.run(debug=True)