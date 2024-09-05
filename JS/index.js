//fetch 

//const apiSourceURL = 'https://api.artic.edu/api/v1/artworks?page=2&limit=10';
const artworksContainer = document.getElementById("artworks_container");
const oneArtworkContainer = document.getElementById("one_artwork_container");
const artworkTitle = document.getElementById("artwork_title");
const artworkInfo = document.getElementById("artwork_info");

//oneArtworkContainer.hidden = true;

fetch (`https://api.artic.edu/api/v1/artworks?page=2&limit=10`)
.then((response) => {
    if(response.ok) {
        return response.text();
    } else {
        throw new Error ('failed');
    }
})
.then((data) =>{
    const artworks = JSON.parse(data);
    console.log(artworks)


for (let artwork in artworks){
    let art = document.createElement("li");
    art.innerText = artwork.name;
    artworkInfo.appendChild(art);
}
})
.catch((error) =>{
    console.error('error', error);
});

//----FOOTER----//
const footer = document.querySelector('footer');
const rightsL = document.createElement('p');
rightsL.className = 'rights';
rightsL.innerHTML = "____________________________________________________________"
footer.appendChild(rightsL);

let today = new Date();
let thisYear = today.getFullYear();

const copyright = document.createElement('p');
copyright.className = 'rights';
copyright.innerHTML = "This content is © " + thisYear + " T.Pripisnova personal project. All rights reserved";
footer.appendChild(copyright);
