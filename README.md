# Cartoonize-Sketch-Flask

# Description

It is a simple OpenCV project hosted using Flask on Heroku. It is an Flask app where frontend is done using HTML and CSS. <br /><br />
Image Cartoonize using Bilateral filtering for transforming image colour to as in cartoons, filter2D to sharpen the image,  Histogram equalization to enhance its contrast by equalizing its RGB intensity values  and put-text to put text as signature on cartoonized  image. <br /><br />
Sketching using colour-dodge on original image and generated negative image  and brightness reduction & deployed using Flask.
<br /><br />
This project is Hosted on Heroku using Flask on https://image-cartoonizing.herokuapp.com/

# Visuals
![cartoonize image](https://github.com/samirkhanal35/cartoonize-sketch-flask/blob/master/cartoonize1.png)<br />
![sketch image](https://github.com/samirkhanal35/cartoonize-sketch-flask/blob/master/sketch.png)

# Installation and Execution

To Install(Please search and follow installation according to your operating system):<br /><br />

<b>Prerequisites:</b><br />

Python<br />
For linux users: sudo apt-get install python3<br />
Then install pip: apt install python3-pip<br /><br />
OpenCV<br />
For linux users: pip install opencv-python<br /><br /><br />
Flask<br />
For linux users: pip install flask<br /><br />
For other users, you can follow <a href="https://www.python.org/downloads/">this</a> link.<br />
For OpenCV and Flask also You can go to their respective wesites for installation.<br />

After installation of <b>Prerequisites</b> , you can clone or download the repo and run the Flask app.<br />
In linux, run command(In Project directory): <br />
Flask run<br />
OR<br />
python main.py<br />




