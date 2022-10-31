import {component2} from './contact.js';
import {component1} from './home.js'

let buttonOne = document.getElementById('button-one');
let buttonTwo = document.getElementById('button-two');

export function component3 () {
    //menu header
    let menuHeader = document.createElement('h1');
    menuHeader.classList.add('headline');
    menuHeader.innerText = 'Menu';
    content.appendChild(menuHeader);

    //menu background
    let menuHolder = document.createElement('div');
    menuHolder.classList.add('menu-holder');
    content.appendChild(menuHolder);

    //item 1
    let item1 = document.createElement('div');
    item1.classList.add('item');
    item1.style.textAlign = 'center';
    item1.style.lineHeight = '30px'
    item1.style.marginTop = '100px'
    menuHolder.appendChild(item1);

    let itemOneName = document.createElement('h3');
    itemOneName.innerText = 'Dish 1'
    let itemOneDesc = document.createElement('p');
    itemOneDesc.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ut.'
    item1.appendChild(itemOneName);
    item1.appendChild(itemOneDesc);

    //item 2
    let item2 = document.createElement('div');
    item2.classList.add('item');
    item2.style.textAlign = 'center';
    item2.style.lineHeight = '30px'
    menuHolder.appendChild(item2);

    let itemTwoName = document.createElement('h3');
    itemTwoName.innerText = 'Dish 2'
    let itemTwoDesc = document.createElement('p');
    itemTwoDesc.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ut.'
    item2.appendChild(itemTwoName);
    item2.appendChild(itemTwoDesc)

    //item 3
    let item3 = document.createElement('div');
    item3.classList.add('item');
    item3.style.textAlign = 'center';
    item3.style.lineHeight = '30px'
    menuHolder.appendChild(item3);

    let itemThreeName = document.createElement('h3');
    itemThreeName.innerText = 'Dish 3'
    let itemThreeDesc = document.createElement('p');
    itemThreeDesc.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ut.';
    item3.appendChild(itemThreeName);
    item3.appendChild(itemThreeDesc)

    //item 4
    let item4 = document.createElement('div');
    item4.classList.add('item');
    item4.style.textAlign = 'center';
    item4.style.lineHeight = '30px';
    menuHolder.appendChild(item4);

    let itemFourName = document.createElement('h3');
    itemFourName.innerText = 'Dish 4';
    let itemFourDesc = document.createElement('p');
    itemFourDesc.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ut.';
    item4.appendChild(itemFourName);
    item4.appendChild(itemFourDesc);

    //change buttons 
    buttonOne.innerText = 'Contact';
    buttonTwo.innerText = 'Home';

    buttonOne.addEventListener('click', () => {
        content.innerText = '';
        component2();
    })
    buttonTwo.addEventListener('click', () => {
        content.innerText = '';
        component1();
    })
}
    /*
    //navbar
    let tabs3 = document.createElement('div');
    tabs3.classList.add('tabs');
    content.appendChild(tabs3);

    let home3 = document.createElement('button');
    home3.classList.add('home3');
    home3.innerText = 'Home';
    tabs3.appendChild(home3);

    let contact3 = document.createElement('button');
    contact3.classList.add('contact3');
    contact3.innerText = 'Contact';
    tabs3.appendChild(contact3);
    */