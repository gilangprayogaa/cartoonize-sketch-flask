//left content

//top info bar
var top_info_bar = document.getElementsByClassName('top_info_bar')[0];


//left top info bar
var left_top_info_bar = document.createElement('div');
left_top_info_bar.classList.add("left_top_info_bar");

//phone
var phone = document.createElement('div');
phone.innerText = "Phone: +977-9843538553";
phone.classList.add("phone");

left_top_info_bar.appendChild(phone);

//email
var email = document.createElement('div');
email.innerText = "Email: samirkhanal35@gmail.com";
email.classList.add("email");

left_top_info_bar.appendChild(email);

top_info_bar.appendChild(left_top_info_bar);

//social_media
var social_media = document.createElement('div');
// social_media.innerText = "social";
social_media.classList.add('social_media');

//facebook logo
var facebook_logo = document.createElement('a');
facebook_logo.href = 'https://www.facebook.com/samir.khanal.5851/';
facebook_logo.innerHTML = '<div class ="facebook_logo1"> </div>';
social_media.appendChild(facebook_logo);

//linkedin logo
var linkedin_logo = document.createElement('a');
linkedin_logo.href = 'https://www.linkedin.com/in/samir-khanal-4b9863113/';
linkedin_logo.innerHTML = '<div class ="linkedin_logo1"> </div>';
social_media.appendChild(linkedin_logo);

//github logo
var github_logo = document.createElement('a');
github_logo.href = 'https://github.com/samirkhanal35';
github_logo.innerHTML = '<div class ="github_logo1"> </div>';
social_media.appendChild(github_logo);

top_info_bar.appendChild(social_media);


//buttons
var buttons = document.getElementsByClassName('buttons')[0];

//home button
var left_button = document.createElement('div');
// left_button.style.float = 'left';
left_button.classList.add('left_button');


var home_button = document.createElement('a');
home_button.href = "/";
home_button.style.textDecoration = "none";
home_button.innerHTML = '<div class="home_button">HOME</div>';
left_button.appendChild(home_button);

var right_buttons = document.createElement('div');
// right_buttons.style.float = 'right';
right_buttons.classList.add('right_buttons');


//projects button
var projects_button = document.createElement('a');
projects_button.href = "/projects";
projects_button.style.textDecoration = "none";
projects_button.innerHTML = '<div class="projects_button">PROJECTS</div>';


//Articles
var articles_button = document.createElement('a');
articles_button.href = "/articles";
articles_button.style.textDecoration = "none";
articles_button.innerHTML = '<div class="articles_button">ARTICLES</div>';

buttons.appendChild(left_button);
right_buttons.appendChild(projects_button);
right_buttons.appendChild(articles_button);

buttons.appendChild(right_buttons);



//***********Right content*************/
var right_content = document.getElementsByClassName('right_content')[0];

//header
var header = document.createElement('div');
header.innerText = "SAMIR KHANAL";
header.classList.add("header");

right_content.appendChild(header);

//photo frame
var photo_frame = document.createElement('div');
photo_frame.classList.add('photo_frame');

right_content.appendChild(photo_frame);

//skills header
var skills_header = document.createElement('div');
skills_header.innerText =  "SKILLS";
skills_header.classList.add('skills_header');

right_content.appendChild(skills_header);

//skills contents
var skills_contents = document.createElement('div');
skills_contents.innerText =  "Python, Django, Machine Learning, Keras, Numpy, Pandas, Tensorflow, Opencv, C, C++ , HTML, CSS, Basic Js";
skills_contents.classList.add('skills_contents');

right_content.appendChild(skills_contents);

//Achievements header
var achievements_header = document.createElement('div');
achievements_header.innerText =  "RECENT ACHIEVEMENTS";
achievements_header.classList.add('achievements_header');

right_content.appendChild(achievements_header);

//Achievements contents
var achievements_contents = document.createElement('div');
achievements_contents.innerHTML =  "<ul><li>AI community leader of AID nepal(From 2017 AD)</li><li>AI6 Ambassador at Nurture.ai</li>  </ul>";
achievements_contents.classList.add('achievements_contents');

right_content.appendChild(achievements_contents);

//Experience header
var experience_header = document.createElement('div');
experience_header.innerText =  "EXPERIENCES";
experience_header.classList.add('experience_header');

right_content.appendChild(experience_header);

//Experience contents
var experience_contents = document.createElement('div');
experience_contents.innerText =  "6-week internship at Leapfrog technologies";
experience_contents.classList.add('experience_contents');

right_content.appendChild(experience_contents);

//social logo
var social_logo = document.createElement('div');
social_logo.classList.add('social_logo');

//facebook logo
var facebook_logo = document.createElement('a');
facebook_logo.href = 'https://www.facebook.com/samir.khanal.5851/';
facebook_logo.innerHTML = '<div class ="facebook_logo"> </div>';
social_logo.appendChild(facebook_logo);

//linkedin logo
var linkedin_logo = document.createElement('a');
linkedin_logo.href = 'https://www.linkedin.com/in/samir-khanal-4b9863113/';
linkedin_logo.innerHTML = '<div class ="linkedin_logo"> </div>';
social_logo.appendChild(linkedin_logo);

//github logo
var github_logo = document.createElement('a');
github_logo.href = 'https://github.com/samirkhanal35';
github_logo.innerHTML = '<div class ="github_logo"> </div>';
social_logo.appendChild(github_logo);

right_content.appendChild(social_logo);