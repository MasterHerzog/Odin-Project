// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content1');
content.setAttribute('id', 'content1');

const content2 = document.createElement('div');
content2.setAttribute('id','content2');
content2.style.borderColor = 'black';
content2.style.backgroundColor = 'pink';



const p_red = document.createElement('p');
p_red.textContent = 'Hey I’m red!';
p_red.style.color = 'red';
const h3_blue = document.createElement('h3');
h3_blue.textContent = 'I’m a blue h3!';
h3_blue.style.color = 'blue';

const h1_div = document.createElement('h1');
h1_div.textContent = 'I\'m in a div';
const p_div = document.createElement('p');
p_div.textContent = 'ME TOO!';

content.appendChild(p_red);
content.appendChild(h3_blue);
content2.appendChild(h1_div);
content2.appendChild(p_div);
container.appendChild(content);
container.appendChild(content2);

//Events Method 2
const btn1 = document.querySelector('#btn1');
btn1.onclick = () => alert("Hello World");

//Events Method 3
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});


//Events With functions - recommended if we're callin an action several times
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
// METHOD 2
btn3.onclick = alertFunction;

// METHOD 3
btn4.addEventListener('click', alertFunction);

//Events With Callbacks
btn5.addEventListener('click', function (e) {
    console.log(e.target);
});

btn6.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

