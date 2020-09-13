from flask import Flask
app = Flask(__name__)
from test import tst

@app.route('/')
def home():
    return "test"+tst

