// option-1: getElementByTagName
// for loop 
const liList = document.getElementsByTagName('li');
// console.log(liList);
for (const li of liList) {
    // console.log(li.innerText);
}

const allHeading = document.getElementsByTagName('h1');
// console.log(allHeading);
for (const h1 of allHeading) {
    // console.log(h1.innerText);
}

// option-2: getElementById
const developerTitle = document.getElementById('developer-title');
developerTitle.innerText = 'Good developer';

// option-3: getElementByClassName
const places = document.getElementsByClassName('important-places');
for (const place of places) {
    // console.log(place.innerText);
}

   // option-4: querySelector
 // option-5: querySelectorAll
 const someLi = document.querySelectorAll('.fruits-container li');
 for (const li of someLi){
    // console.log(li);
    // console.log(li.innerText);
 }

 
