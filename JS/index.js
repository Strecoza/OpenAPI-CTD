

const artworksContainer = document.getElementById("artworks_container");
const oneArtworkContainer = document.getElementById("one_artwork_container");
const artworkInfo = document.getElementById("artwork_info");

//Fetch request 
const apiUrl = 'https://api.artic.edu/api/v1/artworks?page=2&limit=20';
fetch (apiUrl)
.then((response) => {
    if(response.ok) {
        return response.json();
    } else {
        throw new Error ('failed');
    }
})
.then((data) => {
    const artworks = data.data;

    artworks.forEach(artwork => {
        let art = document.createElement("li");
        art.innerText = artwork.title;
        art.style.cursor = 'pointer';    
        artworkInfo.appendChild(art);

        art.addEventListener('click', () => {
            displayArtworkData(artwork, 'one_artwork_container') 
        })
    })
})
.catch((error) => {
    console.error('error', error);
});
//Display data

function displayArtworkData(artworkData, elementId){
    const artworkElement = document.getElementById(elementId);
    
    if(artworkData){
        artworkElement.innerHTML = `<img src = "https://www.artic.edu/iiif/2/${artworkData.image_id}/full/200,/0/default.jpg" alt = "${artworkData.title}"/>
        <p><strong>Title:</strong>${artworkData.title}</p>
        <p><strong>Artist:</strong>${artworkData.artist_title}</p>
        <p><strong>Description:</strong>${artworkData.description||'No description to show'}</p>
        <p><strong>Place of Origin:</strong>${artworkData.place_of_origin||'Unknown'}</p>
        <br>
        <button id = "back_button">Go back</button>
        `;

//Button
        document.getElementById('back_button').onclick = () => {
            artworksContainer.style.display = 'block';
            oneArtworkContainer.style.display = 'none';
        }

    }else{
        artworkElement.innerHTML = '<p>Sorry, nothing to show you</p>'
    }
    artworksContainer.style.display = 'none';
    oneArtworkContainer.style.display = 'block';
    }

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
copyright.innerHTML = "This content is © " + thisYear + " Tatiana's personal project.";
footer.appendChild(copyright);
