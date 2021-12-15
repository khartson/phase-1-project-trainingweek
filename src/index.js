let presetForm = document.querySelector('#drop-submit'); 
presetForm.addEventListener('click', submitPreset); 

function submitPreset(e) {
    let choice = document.querySelector('#list-search');
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("http://localhost:3000/presets/", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result[choice.value]) {
                let name = result[choice.value]["name"];
                let description = result[choice.value]["description"];
                let url = result[choice.value]["url"];
                let card = createCard([name, description, url]);
                console.log(card); 
                let collection = document.querySelector('#card-collection');
                collection.append(card);
                choice.value = ''; 
                return; 
            }
            alert("Please enter a valid choice from the dropdown menu!")
            choice.value = ''; 
            return; 
            
        })
        .catch(error => console.log('error', error));
}

let search = document.querySelector('#db-search'); 
search.addEventListener('click', dbSearch); 

function dbSearch(e) {
    let query = document.querySelector('#db-searchbar');
    let formatQuery = capitalize(query.value); 
    let link  = `https://wger.de/api/v2/exerciseinfo/?name=${formatQuery}`;
    fetch(link)
    .then(response => response.json())
    .then(result => {
        if (result['results'][0]) {
            let url = 'https://previews.123rf.com/images/corazonphoto/corazonphoto0904/corazonphoto090400155/4654132-weights-and-free-weights-in-a-gym.jpg'
            let name = result['results'][0]['name'];
            let description = cleanseHTML(result['results'][0]['description']);
            if (result['results'][0]['images'].length != 0){
                console.log('found');
                url = result['results'][0]['images'][0]['image'];
            }
            if(result['results'][0]['images'].length > 0){
                let url = result['results'][0]['images'][0]['image'];
            } else {
                let url = 'https://www.clipartmax.com/png/middle/319-3191141_barbell-png-dumbbell-barbell-fitness-sport-gym-svg-gym-icon-black-and.png';
            }
            let collection = document.querySelector('#card-collection');
            let card = createCard([name,description, url]);
            collection.append(card);
            return;
        }
        alert('No results for your search. If the exercise name is multiple words (such as "Bench Press"), please ensure that the first letter of both words are capitalized. Some exercises, such as "Chin-ups" are entered as hyphenated entries.'); 
    }).catch(error => console.log('error', error));
}

function cleanseHTML(html) {
    let div = document.createElement('div');
    div.innerHTML = html;
    return(div.innerText); 
}

function capitalize(entry) {
    entry = entry.toLowerCase();
    let formatted = [];
    entry.split(' ').forEach((word) => {
        formatted.push( word.at(0).toUpperCase() + word.slice(1));
    })
    return formatted.join(' '); 

}
function createCard([name, description, url]) {
    let card = document.createElement('div'); 
    card.className = 'exercise-card'; 

    let img = document.createElement('img');
    img.className = 'exercise-image'; 
    img.src = url;
   
    
    let imgContainer = document.createElement('div');
    imgContainer.className = 'image-container';
    imgContainer.appendChild(img); 
    
    let content = document.createElement('div'); 
    content.className = 'card-content'; 
    
    let title = document.createElement('h3'); 
    title.className = 'card-title'
    title.innerText = name;

    let desc = document.createElement('p');
    desc.className = 'card-description';
    desc.innerText = description;

    content.appendChild(title);
    content.appendChild(desc);  

    let footer = document.createElement('div'); 
    footer.className = 'card-footer';

    let button = document.createElement('button');
    button.className = 'card-button';
    button.innerText = 'Remove';

    button.addEventListener('click', remove);

    footer.appendChild(button); 

    card.appendChild(imgContainer); 
    card.appendChild(content);
    card.appendChild(footer); 
    return card; 
}

function remove(e) {
    e.target.parentNode.parentNode.remove(); 
}