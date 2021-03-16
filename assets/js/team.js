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
        articleElt.setAttribute("id", this.name);
        articleElt.classList.add("container", "item");
        const descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("container", "profil-description");
        const h3Elt = document.createElement("h3");
        h3Elt.innerText = this.name;
        descriptionDiv.appendChild(h3Elt);
        const pElt =  document.createElement("p");
        pElt.innerText = this.job;
        descriptionDiv.appendChild(pElt);
        const textDiv = document.createElement("div");
        textDiv.classList.add("text-description");
        const pTextDiv = document.createElement("p");
        pTextDiv.innerText = this.description;
        textDiv.appendChild(pTextDiv);
        descriptionDiv.appendChild(textDiv);
        articleElt.appendChild(descriptionDiv);
        const profilPicture = new Image();
        profilPicture.src = this.picture;
        articleElt.appendChild(profilPicture);
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
    console.log(newArticle);
    articlesContainer.appendChild(newArticle.printArticle());

}





