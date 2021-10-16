
// creating an element
let newCard = document.createElement('div');
newCard.cardName = 'card';

let heading = document.createElement('h3');
heading.textContent = 'plumber';

let img1 = document.createElement('img')
img1.src = '../img/download.jpeg'

let cardText = document.createElement('p')
cardText.textContent = 'Afemale plumber is needed urgently at luwumu street'
'should have a2years experience with atlest a diploma in plumbing'
'should also be with a good comunication skils.  comtact 0701706133 for more info'

// adding to the parent 
newCard.appendChild(heading);
newCard.appendChild(img1);
newCard.appendChild(cardText);


// ading to the dom
let Container = document.querySelector('div.container');
Container.appendChild(newCard);

let newCard2 = document.createElement('div')
newCard2.cardName = 'card';

let heading2 = document.createElement('h3')
heading2.textContent = 'housemaid';

let img2 = document.createElement('img')
img2.src = '../img/download.png';

let cardText2 = document.createElement('p')
cardText2.textContent = 
                'A serious house maid is need to'
                'work in saudi arabia. passpaort,visa and airticket'
                'are all free.salary is 2000 saudi riyals . for more info' 
                'contact +966561007675'

 // adding to the parent
 newCard2.appendChild(heading2);
 newCard2.appendChild(img2);
 newCard2.appendChild(cardText2);

//  adding to the dom
Container.appendChild(newCard2);
