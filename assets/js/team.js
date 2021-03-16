const clicThumbnail = (e) => {
    console.log(e.target.offsetParent);
    element = e.target.offsetParent;
    element.classList.add("open");
}

// team array is charge befor this script. It contain all team's members

const articlesContainer = document.getElementById("main-container");

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
        const descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("container", "profil-description");
        const h3Elt = document.createElement("h3");
        h3Elt.innerText = this.name;
        descriptionDiv.appendChild(h3Elt);
        const pElt =  document.createElement("p");
        pElt.innerText = this.job;
        descriptionDiv.appendChild(pElt);
        const pictureContainer = document.createElement("div");
        pictureContainer.classList.add("profil-img");
        const profilPicture = new Image();
        profilPicture.src = this.picture;
        pictureContainer.appendChild(profilPicture);
        articleElt.appendChild(pictureContainer);
        const textDiv = document.createElement("div");
        textDiv.classList.add("text-description");
        const pTextDiv = document.createElement("p");
        pTextDiv.innerText = this.description;
        textDiv.appendChild(pTextDiv);
        descriptionDiv.appendChild(textDiv);
        articleElt.appendChild(descriptionDiv);
        articleElt.addEventListener("click", clicThumbnail);
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
    const itemDescription = articlesContainer.children[i].querySelector(".profil-description");
    item.classList.add("hidden");
    if(i%2 !== 0){
        item.classList.add("invert");
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



