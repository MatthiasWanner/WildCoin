/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
// Initialization of the variables that will be used later
let thumbnailOpen;
let initialTopOpenedThumbnail;
let initialLeftOpenedThumbnail;
let thumbnailContainer;
const articlesContainer = document.getElementById('main-container');

const duplicateThumbnail = (DomElement) => {
  initialTopOpenedThumbnail = DomElement.offsetTop;
  initialLeftOpenedThumbnail = DomElement.offsetLeft;
  thumbnailPosition = ((articlesContainer.offsetWidth / 2) - (DomElement.offsetWidth / 2));
  thumbnailContainer = document.createElement('div');
  thumbnailContainer.classList.add('thumbnail-container');
  articlesContainer.appendChild(thumbnailContainer);
  const elementDuplicated = DomElement.cloneNode(true);
  elementDuplicated.removeAttribute('id');
  elementDuplicated.style.top = `${initialTopOpenedThumbnail - 10}px`; // 10px padding of mainContainer (defined in CSS rules)
  elementDuplicated.style.left = `${initialLeftOpenedThumbnail - 10}px`; // 10px padding of mainContainer (defined in CSS rules)
  thumbnailContainer.appendChild(elementDuplicated);
  setTimeout((() => {
    thumbnailContainer.classList.add('show-div');
    elementDuplicated.classList.add('move');
    elementDuplicated.style.left = `${thumbnailPosition - 10}px`;
  }), 10);
  setTimeout((() => {
    elementDuplicated.classList.remove('close');
    elementDuplicated.classList.add('open');
    elementDuplicated.querySelector('.button').addEventListener('click', clicThumbnail);
    // console.log(elementDuplicated);
  }), 1000);
};

const removeDuplicatedThumbnail = (id) => {
  const item = thumbnailContainer.querySelector('.item');
  item.classList.remove('move', 'open');
  item.style.top = `${initialTopOpenedThumbnail - 10}px`; // 10px padding of mainContainer (defined in CSS rules)
  item.style.left = `${initialLeftOpenedThumbnail - 10}px`; // 10px padding of mainContainer (defined in CSS rules)
  thumbnailContainer.classList.remove('show-div');
  setTimeout((() => {
    item.querySelector('.text-description').style.display = 'none';
    document.getElementById(id).style.opacity = '100%';
    articlesContainer.removeChild(thumbnailContainer);
  }), 1000);
};

// Function called when we clic on thumbnail (mobile version`$)
const clicThumbnail = (e) => {
  e.preventDefault();
  const element = e.target.parentNode;
  const isTargetOpened = element.classList.contains('open'); // false
  if (isTargetOpened !== true) {
    thumbnailOpen = element.getAttribute('id');
    duplicateThumbnail(element);
    element.style.opacity = '0';
  } else {
    removeDuplicatedThumbnail(thumbnailOpen);
  }
};

// Create a model of objet with method to display in the DOM
const article = {
  name: '',
  job: '',
  picture: '',
  description: '',
  printArticle() {
    const articleElt = document.createElement('article');
    articleElt.setAttribute('id', this.name.toLowerCase());
    articleElt.classList.add('container', 'item', 'close');
    const jobDiv = document.createElement('div');
    jobDiv.classList.add('container', 'profil-description');
    const h3Elt = document.createElement('h3');
    h3Elt.innerText = this.name;
    jobDiv.appendChild(h3Elt);
    const pElt = document.createElement('p');
    pElt.innerText = this.job;
    jobDiv.appendChild(pElt);
    const pictureContainer = document.createElement('div');
    pictureContainer.classList.add('container', 'profil-img');
    const profilPicture = new Image();
    profilPicture.src = this.picture;
    pictureContainer.appendChild(profilPicture);
    const textDiv = document.createElement('div');
    textDiv.classList.add('text-description');
    const pTextDiv = document.createElement('p');
    pTextDiv.innerText = this.description;
    textDiv.appendChild(pTextDiv);
    const thumbnailHeader = document.createElement('header');
    thumbnailHeader.classList.add('container', 'header');
    const thumbnailbutton = document.createElement('button');
    thumbnailbutton.classList.add('button');
    thumbnailHeader.appendChild(jobDiv);
    thumbnailHeader.appendChild(pictureContainer);
    articleElt.appendChild(thumbnailbutton);
    articleElt.appendChild(thumbnailHeader);
    articleElt.appendChild(textDiv);
    thumbnailbutton.addEventListener('click', clicThumbnail);
    return articleElt;
  },
};

// team array is charged before this script. It contain all team's members
// Insert all members in the DOM
for (let i = 0; i < team.length; i += 1) {
  const newArticle = Object.create(article);
  newArticle.name = team[i].name;
  newArticle.job = team[i].job;
  newArticle.picture = team[i].picture;
  newArticle.description = team[i].description;
  articlesContainer.appendChild(newArticle.printArticle());
  const item = articlesContainer.children[i];
  const header = articlesContainer.children[i].querySelector('.header');
  const itemDescription = articlesContainer.children[i].querySelector('.profil-description');
  item.classList.add('hidden');
  if (i % 2 !== 0) {
    item.classList.add('invert-container');
    header.classList.add('invert-header');
  } else {
    itemDescription.classList.add('invert-description');
  }
}

const items = document.querySelectorAll('.item');

items.forEach((item) => {
  item.classList.add('hidden');
});

setTimeout(() => {
  items.forEach((item) => {
    item.classList.remove('hidden');
  });
}, 500);
