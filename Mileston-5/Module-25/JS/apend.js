// 1. where to add
const placesList = document.getElementById('places-list');
// 2. what to be add
const li = document.createElement('li');
li.innerText = 'Andarban';

// 3. add the child
placesList.appendChild(li);

// 1. where to add
const maincontainer = document.getElementById('main-container');

// 2. what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Birani'
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Kachi'
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Salad'
ul.appendChild(li3);

section.appendChild(ul);

maincontainer.appendChild(section);

// set innerHTML directory
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My awesome Dress</h1>
        <ul>
            <li>Panjabi</li> 
            <li>Pajama</li> 
            <li>Pant</li>
            <li>Lingi</li>
        </ul>
`
maincontainer.appendChild(sectionDress)




