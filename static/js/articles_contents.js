//************articles page contents********** */
var articles_contents = document.getElementsByClassName('articles_contents')[0];

//articles header
var articles_header = document.createElement('div');
articles_header.innerText = "ARTICLES";
articles_header.classList.add('articles_header');
articles_contents.appendChild(articles_header);

//articles list
var articles_list = document.createElement('div');
articles_list.innerHTML = '....listing....';
articles_list.classList.add("articles_list");
articles_contents.appendChild(articles_list);
