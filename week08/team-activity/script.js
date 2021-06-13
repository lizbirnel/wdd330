const requestURL = "https://swapi.dev/api/people"


fetch(requestURL)
    .then(response => response.json())
    .then(json => {
        console.table(json)

const starwars = json['results'];
console.table(starwars);

for(let i=0; i < starwars.length; i++) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let height = document.createElement('p');
    let mass = document.createElement('p');
    let hair_color = document.createElement('p');
    let skin_color = document.createElement('p');
    let eye_color = document.createElement('p');
    let birth_year = document.createElement('p');
    let gender = document.createElement('p');
    let homeworld = document.createElement('a');

    h2.textContent = starwars[i].name;
    height.textContent = 'Height:' + ' ' + starwars[i].height;
    mass.textContent = 'Mass:' + ' ' + starwars[i].mass;
    hair_color.textContent = 'Hair Color:' + ' ' + starwars[i].hair_color;
    skin_color.textContent = 'Skin Color:' + ' ' + starwars[i].skin_color;
    eye_color.textContent = 'Eye Color:' + ' ' + starwars[i].eye_color;
    birth_year.textContent = 'Birth Year:' + ' ' + starwars[i].birth_year;
    gender.textContent = 'Gender:' + ' ' + starwars[i].gender;
    homeworld.textcontent = 'Home World' + ' ' + starwars[i].homeworld;
    homeworld.setAttribute('src', starwars[i].homeworld);

    card.appendChild(h2);
    card.appendChild(height);
    card.appendChild(mass);
    card.appendChild(hair_color);
    card.appendChild(skin_color);
    card.appendChild(eye_color);
    card.appendChild(birth_year);
    card.appendChild(gender);
    card.appendChild(homeworld);


    document.querySelector('div.tradingCard').appendChild(card);
}



    });
 
