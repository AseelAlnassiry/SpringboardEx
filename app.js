// Question 1:
const answer1 = document.getElementById('container');

// Question 2:
const answer2 = document.querySelector('#container');

// Question 3:
const answer3 = document.querySelectorAll('li.second');

// Question 4:
const answer4 = document.querySelector('ol>li.third');

// Question 5:
const container = document.querySelector('#container');
container.innerText = 'Hello!';

// Question 6:
const footer = document.querySelector('.footer');
footer.classList.add('main');

// Question 7:
footer.classList.remove('main');

// Question 8:
const newLi = document.createElement('li');

// Question 9:
newLi.innerText = 'four';

// Question 10:
const ul = document.querySelector('ul');
ul.append(newLi);

// Question 11:
const ol = document.querySelector('ol');
const lis = ol.children;
for (let li of lis) {
  li.style.backgroundColor = 'green';
}

// Question 12:
footer.parentElement.removeChild(footer);
