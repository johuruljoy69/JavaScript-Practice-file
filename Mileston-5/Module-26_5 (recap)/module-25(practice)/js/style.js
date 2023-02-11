// all section select > for loop > console.log section
const sections = document.querySelectorAll('section');
for(const section of sections){
    console.log(section);
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '10px';
    section.style.backgroundColor = 'lightgrey';
}

// specific section select > call id > do style
const placesContainer = document.getElementById('places-container');
placesContainer.style.backgroundColor = 'yellow';
placesContainer.style.textAlign = 'center';

// specific section select > call id > then add and remove easily
const devContainer = document.getElementById('dev-container');
devContainer.classList.add('text-center');
devContainer.classList.remove('large-text');


