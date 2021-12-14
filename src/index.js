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
                return; 
            }
            
        })
        .catch(error => console.log('error', error));
    
}

function createCard([name, description, url]) {
    let card = document.createElement('div'); 
    card.className = 'exercise-card'; 

    let img = document.createElement('img');
    img.className = 'exercise-image'; 
    img.src = url;
    
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

    card.appendChild(img);
    card.append(content);
    card.append(footer); 
    return card; 
}

function remove(e) {
    e.target.parentNode.parentNode.remove(); 
}