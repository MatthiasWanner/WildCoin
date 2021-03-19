let isOpen;
let initialPositionOpenedThumbnail;
const clicThumbnail = (e) => {
    //console.log(e);
    const element = e.target.parentNode;
    console.log(element);
    let isTargetOpened = element.classList.contains("open"); //false
    if(isTargetOpened !== true){
        isOpen = element.getAttribute("id");
        duplicateThumbnail(element);
    }else{
        removeDuplicatedThumbnail(isOpen);
    }
    // element.style.transform = `translateY(-${positionY-10}px)`;
};

const duplicateThumbnail = (element) => {
    initialPositionOpenedThumbnail = element.offsetTop;
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("thumbnail-container");
    const elementDuplicated = element.cloneNode(true);
    elementDuplicated.removeAttribute("id");
    elementDuplicated.classList.add("item-duplicated", "move", "scale");
    elementDuplicated.style.top = `${initialPositionOpenedThumbnail}px`;
    setTimeout((function(){
        elementDuplicated.querySelector(".button").addEventListener("click", clicThumbnail);
        elementDuplicated.classList.add("open");
        console.log(elementDuplicated);
    }), 1000);
    containerDiv.appendChild(elementDuplicated);
    articlesContainer.appendChild(containerDiv);
    element.style.opacity = "0";
    console.log(containerDiv);
    console.log(elementDuplicated);
    return;

};

const removeDuplicatedThumbnail = (id) => {
    removedItem = document.querySelector('.thumbnail-container').querySelector('.item');
    removedItem.classList.remove("open", "move", "scale");
    setTimeout((function(){
        document.getElementById(id).style.opacity = "100%";
        articlesContainer.removeChild(articlesContainer.querySelector('.thumbnail-container'));  

    }), 1000);
    return;

};

// team array is charge befor this script. It contain all team's members

const articlesContainer = document.getElementById("main-container");
//console.log(articlesContainer);

//Create a model of objet with method to display in the DOM
const article = {
    name: "",
    job: "",
    picture: "",
    description: "",
    printArticle: function(){
        const articleElt = document.createElement("article");
        articleElt.setAttribute("id", this.name.toLowerCase());
        articleElt.classList.add("container", "item");
        const jobDiv = document.createElement("div");
        jobDiv.classList.add("container", "profil-description");
        const h3Elt = document.createElement("h3");
        h3Elt.innerText = this.name;
        jobDiv.appendChild(h3Elt);
        const pElt =  document.createElement("p");
        pElt.innerText = this.job;
        jobDiv.appendChild(pElt);
        const pictureContainer = document.createElement("div");
        pictureContainer.classList.add("profil-img");
        const profilPicture = new Image();
        profilPicture.src = this.picture;
        pictureContainer.appendChild(profilPicture);
        const textDiv = document.createElement("div");
        textDiv.classList.add("text-description");
        const pTextDiv = document.createElement("p");
        pTextDiv.innerText = this.description;
        textDiv.appendChild(pTextDiv);
        const thumbnailHeader = document.createElement('header');
        thumbnailHeader.classList.add("container", "header");
        const thumbnailbutton = document.createElement("button");
        thumbnailbutton.classList.add("button");
        thumbnailHeader.appendChild(jobDiv);
        thumbnailHeader.appendChild(pictureContainer);
        articleElt.appendChild(thumbnailbutton);
        articleElt.appendChild(thumbnailHeader);
        articleElt.appendChild(textDiv);
        thumbnailbutton.addEventListener("click", clicThumbnail);
        return articleElt;
    },
};

//Insert all members in the DOM
for(let i=0; i<team.length; i++){
    let newArticle = Object.create(article);
    newArticle.name = team[i].name;
    newArticle.job = team[i].job;
    newArticle.picture = team[i].picture;
    newArticle.description = team[i].description;
    articlesContainer.appendChild(newArticle.printArticle());
    const item = articlesContainer.children[i];
    const header = articlesContainer.children[i].querySelector(".header")
    const itemDescription = articlesContainer.children[i].querySelector(".profil-description");
    item.classList.add("hidden");
    if(i%2 !== 0){
        item.classList.add("invert-container")
        header.classList.add("invert-header");
    }else{
        itemDescription.classList.add("invert-description");
    }
}

const items = document.querySelectorAll('.item');

items.forEach(function(item){
    item.classList.add("hidden");
});

setTimeout(function(){
    items.forEach(function(item){
    item.classList.remove("hidden");
    });
}, 500);



