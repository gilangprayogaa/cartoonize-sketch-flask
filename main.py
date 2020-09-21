import os
from flask import Flask, flash, request, redirect, url_for, render_template
from werkzeug.utils import secure_filename
import cv2
import numpy as np
from cartoonize import cartoon

app = Flask(__name__)

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
	if 'file' not in request.files:
		flash('No file part')
		return redirect(request.url)
	file = request.files['file']
	if file.filename == '':
		flash('No image selected for uploading')
		return redirect(request.url)
	if file and allowed_file(file.filename):
		filename = secure_filename(file.filename)
        # filename = file.filename
		file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
		#print('upload_image filename: ' + filename)
		flash('Image successfully uploaded and displayed')
		return render_template('home.html', filename=filename)
	else:
		flash('Allowed image types are -> png, jpg, jpeg')
		return redirect(request.url)

@app.route('/display/<filename>')
def display_image(filename):	
    img = cv2.imread('static/uploads/'+filename)

    img = cartoon(img)

    ret, jpeg = cv2.imencode('.jpg', img)
    os.remove('static/uploads/'+filename)
    return jpeg.tobytes()




if __name__ == '__main__':
   # app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
   app.run()