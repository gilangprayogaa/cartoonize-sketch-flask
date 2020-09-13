//************home page contents********** */
var home_contents = document.getElementsByClassName('home_contents')[0];

//upper row
var upper_row = document.createElement('div');

//first image component
var first_image_component = document.createElement('div');
first_image_component.classList.add('first_image_component');

//first image
var first_image = document.createElement('div');
first_image.classList.add('first_image');
first_image_component.appendChild(first_image);

//first image text
var first_image_text = document.createElement('div');
first_image_text.innerText = "1997-07-06, Kathmandu, Nepal";
first_image_text.classList.add('first_image_text');
first_image_component.appendChild(first_image_text);

upper_row.appendChild(first_image_component);

//second image component
var second_image_component = document.createElement('div');
second_image_component.classList.add('second_image_component');

//second image
var second_image = document.createElement('div');
second_image.classList.add('second_image');
second_image_component.appendChild(second_image);

//second image text
var second_image_text = document.createElement('div');
second_image_text.innerText = "High School: Diamond Higher Secondary School, Talchowk, Kaski";
second_image_text.classList.add('second_image_text');
second_image_component.appendChild(second_image_text);

upper_row.appendChild(second_image_component);

//adding upper row to home contents
home_contents.appendChild(upper_row);

//lower row
var lower_row = document.createElement('div');


//third image component
var third_image_component = document.createElement('div');
third_image_component.classList.add('third_image_component');

//third image
var third_image = document.createElement('div');
third_image.classList.add('third_image');
third_image_component.appendChild(third_image);

//third image text
var third_image_text = document.createElement('div');
third_image_text.innerText = "College: Pentagon Int’l College, Tinkune, Kathmandu";
third_image_text.classList.add('third_image_text');
third_image_component.appendChild(third_image_text);


lower_row.appendChild(third_image_component);

//fourth_image

//fourth image component
var fourth_image_component = document.createElement('div');
fourth_image_component.classList.add('fourth_image_component');

//fourth image
var fourth_image = document.createElement('div');
fourth_image.classList.add('fourth_image');
fourth_image_component.appendChild(fourth_image);

//fourth image text
var fourth_image_text = document.createElement('div');
fourth_image_text.innerText = "Bachelor’s Degree: Kantipur Engineering College, Dhapakhel, Lalitpur(Computer Engineering) ";
fourth_image_text.classList.add('fourth_image_text');
fourth_image_component.appendChild(fourth_image_text);


lower_row.appendChild(fourth_image_component);

//adding lower row to home contents
home_contents.appendChild(lower_row);
