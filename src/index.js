let presets = {
    'Bench Press': ['Bench Press',
    `Lay down on a bench, the bar should be directly above your eyes, the knees
     are somewhat angled and the feet are firmly on the floor. Concentrate, 
     breathe deeply and grab the bar more than shoulder wide. Bring it slowly
     down until it briefly touches your chest at the height of your nipples. 
     Push the bar up.`,
     'https://www.bodybuilding.com/fun/images/2015/layne-norton-bench-tutorial-tablet-960x540.jpg',
    ], 
}

let presetForm = document.querySelector('#drop-submit'); 
presetForm.addEventListener('click', submitPreset); 

function submitPreset(e) {
    let choice = document.querySelector('#list-search');
    if (presets[choice.value]) {
        let collection = document.querySelector('#card-collection'); 
        collection.append(createCard(presets[choice.value])); 
        return; 
    } else {
        alert('Please select a choice from the dropdown menu.');
        choice.value = ''; 
    } 
    
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