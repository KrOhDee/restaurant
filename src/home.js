//import {contentLoaded} from './contentLoaded.js'
//import './style.css'
import {component2} from './contact.js'
import {component3} from './menu.js'

//contentLoaded;

//let content = document.getElementById('content');
//let buttonOne = document.getElementById('button-one');
//let buttonTwo = document.getElementById('button-two');

//let content = document.getElementById('content');
let buttonOne = document.getElementById('button-one');
let buttonTwo = document.getElementById('button-two');

export function component1() {
    //headline div created
    let headline = document.createElement('div');
    headline.classList.add('headline');
    
    //headline text created and appended to headline div
    let headlineText = document.createElement('h1');
    headlineText.innerText = 'Fresno\'s Pizza';
    headline.appendChild(headlineText);
    
    //image div created
    let image = document.createElement('div');
    image.classList.add('image')
    
    let quote = document.createElement('p');
    quote.innerText = 'Fresno\'s Pizza is the pizza for you and me!';
    quote.classList.add('quote');
    
    //change buttons
    buttonOne.innerText = 'Contact';
    buttonTwo.innerText = 'Menu';
    
    buttonOne.addEventListener('click', () => {
        content.innerText = '';
        component2();
    })
    buttonTwo.addEventListener('click', () => {
        content.innerText = '';
        component3();
    })
    
    
    
    
    console.log(headline);
    console.log(content);
    
    //content.appendChild(tabs);
    content.appendChild(headline);
    content.appendChild(image);
    content.appendChild(quote);
    
    }


/*
    //tabs div
let tabs = document.createElement('div');
tabs.classList.add('tabs');

//contact tab created and appended to tabs div
let contactTab = document.createElement('button');
contactTab.innerText = 'Contact';
contactTab.addEventListener('click', () => {
    contact = true;
})
contactTab.classList.add('contactTab');
tabs.appendChild(contactTab);

//menu tab created and appended to tabs div
let menuTab = document.createElement('button');
menuTab.innerText = 'Menu';
menuTab.classList.add('menuTab');
tabs.appendChild(menuTab);
*/
