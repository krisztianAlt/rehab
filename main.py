from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def windmill_game():
    return render_template('windmill_resize_test.html')

if __name__ == '__main__':
    app.run(debug=True)