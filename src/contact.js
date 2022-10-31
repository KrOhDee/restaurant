import {component1} from './home.js';
import {component3} from './menu.js';

let buttonOne = document.getElementById('button-one');
let buttonTwo = document.getElementById('button-two');

export function component2 () {   
    //header
    let hero = document.createElement('h1');
    hero.classList.add('headline');
    hero.innerText = 'Contact Us';
    content.appendChild(hero);

    //hours
    let hoursOpen = document.createElement('p');
    hoursOpen.classList.add('hours-open');
    hoursOpen.innerText = 
    'Operating hours\nMon - Th: 9AM - 9PM\nFri - Sun: 10AM - 12AM'
    content.appendChild(hoursOpen);

    //contact info
    let contactUs = document.createElement('p');
    contactUs.classList.add('contact-us');
    contactUs.classList.add('hours-open');
    contactUs.innerText = 
    'Phone Number\n(123) 456-7890\nEmail\nfresnopizzaqw@pmail.com'
    content.appendChild(contactUs);

    //change buttons
    buttonOne.innerText = 'Menu';
    buttonTwo.innerText = 'Home';

    buttonOne.addEventListener('click', () => {
        content.innerText = '';
        component3();
    })
    buttonTwo.addEventListener('click', () => {
        content.innerText = '';
        component1();
    })
}
    /*
   //navbar
   let tabs2 = document.createElement('div');
   tabs2.classList.add('tabs');
   content.appendChild(tabs2);

   let home2 = document.createElement('button');
   home2.classList.add('home2');
   home2.innerText = 'Home';
   tabs2.appendChild(home2);

   let menu2 = document.createElement('button');
   menu2.classList.add('menu2');
   menu2.innerText = 'Menu';
   tabs2.appendChild(menu2);
   */