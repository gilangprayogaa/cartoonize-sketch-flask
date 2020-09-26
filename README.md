# Cartoonize-Sketch-Flask

# Description

It is a simple OpenCV project hosted using Flask on Heroku. It is an Flask app where frontend is done using HTML and CSS. <br /><br />
In case of cartoonizing, I have used Bilateral Filtering for smoothing, Histogram equalization for equalizing the intensity levels and 
Put-text of OpenCV to put signature text on cartoonized image.<br /><br />
In case of sketching, I have used colour-dodge for combining two negative and positive images to produce sketch.<br /><br />
This project is Hosted on Heroku using Flask on https://image-cartoonizing.herokuapp.com/

# Visuals
![cartoonize image](https://github.com/samirkhanal35/cartoonize-sketch-flask/blob/master/cartoonize1.png)<br />
![sketch image](https://github.com/samirkhanal35/cartoonize-sketch-flask/blob/master/sketch.png)

# Installation

To Install(Please search and follow installation according to your operating system):<br /><br />

Python<br />
For linux users: sudo apt-get install python3<br />
Then install pip: apt install python3-pip<br /><br />
OpenCV<br />
For linux users: pip install opencv-python<br /><br /><br />
Flask<br />
For linux users: pip install flask<br /><br />
For other users, you can follow <a href="https://www.python.org/downloads/">this</a> link.<br />
For OpenCV and Flask also You can go to their respective wesites for installation.<br />

After installation of Python, OpenCV and Flask , you can clone or download the repo and run the Flask app.<br />
In linux, run command(Project directory): <br />
Flask run<br />
OR<br />
python main.py<br />




