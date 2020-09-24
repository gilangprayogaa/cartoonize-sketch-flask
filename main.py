import os
from flask import Flask, flash, request, redirect, url_for, render_template
from werkzeug.utils import secure_filename
import cv2
import numpy as np
from cartoonize import cartoon
from sketch import sketch

app = Flask(__name__)
# img =''
global filename
filename = ''
# basedir = os.path.abspath(os.path.dirname(__file__))

UPLOAD_FOLDER = 'static/uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

app.secret_key = "secret key"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/')
def home():
    return render_template("home.html")


@app.route('/img', methods=['POST'])
def upload_image():
	global filename
	if 'file' not in request.files:
		# flash('No file selected')
		return redirect(request.url)
	file = request.files['file']
	if file.filename == '':
		# flash('No image selected for uploading')
		return redirect(request.url)
	if file and allowed_file(file.filename):
		filename = secure_filename(file.filename)
		# filename = file.filename
		file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        # print('upload_image filename: ' + filename)
		# flash('Image successfully uploaded and displayed')
		return render_template('home.html', filename=filename)
	else:
		flash('Allowed image types are -> png, jpg, jpeg')
		return redirect(request.url)


@app.route('/operation', methods=['POST'])
def operation():
	global filename
	# print(filename)
	if "cartoonize" in request.form:
		img = cv2.imread('static/uploads/'+filename)
		prev_filename = filename
		filename = filename+"_1"
		img = cartoon(img)
		cv2.imwrite(os.path.join(app.config['UPLOAD_FOLDER'], filename),img)
		return render_template('home.html', filename=prev_filename, filename_1 = filename)		
	elif "sketch" in request.form:
		img = cv2.imread('static/uploads/'+filename)
		prev_filename = filename
		filename = filename+"_2"
		img = sketch(img)
		cv2.imwrite(os.path.join(app.config['UPLOAD_FOLDER'], filename),img)
		return render_template('home.html', filename=prev_filename, filename_2 = filename)
	else:
		return render_template('home.html')

@app.route('/display/<filename>')
def display_image(filename):
	# global filename
	img = cv2.imread('static/uploads/'+filename)
	ret, jpeg = cv2.imencode('.jpg', img)
    # os.remove('static/uploads/'+filename)
	return jpeg.tobytes()



if __name__ == '__main__':
    app.run(debug=True)
