from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('homepage.html')


@app.route('/user')
def user():
    return render_template('user.html')


app.static_folder = 'static'


if __name__ == '__main__':
    app.run(debug=True)