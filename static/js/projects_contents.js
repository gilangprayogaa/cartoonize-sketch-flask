//************projects page contents********** */
var projects_contents = document.getElementsByClassName('projects_contents')[0];

//projects header
var projects_header = document.createElement('div');
projects_header.innerText = "PROJECTS";
projects_header.classList.add('projects_header');
projects_contents.appendChild(projects_header);

//projects list
var projects_list = document.createElement('div');
projects_list.innerHTML = '....listing....';
projects_list.classList.add("projects_list");
projects_contents.appendChild(projects_list);
