const directoryURL = 'json/directory.json';

fetch(directoryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      
        const business = jsonObject['businesses'];
        for (let i=0; i < business.length; i++) {

            let card = document.createElement('section');
            let div = document.createElement('div');
            let name = document.createElement('h4');
            let logo = document.createElement('img');
            let contact = document.createElement('p');
            let email = document.createElement('p');
            let website = document.createElement('p');

            logo.setAttribute('src', `images/${business[i].logo}`);
            logo.setAttribute('alt', `logo of ${business[i].name}`);
            div.className = 'business-info';
            name.textContent = `${business[i].name}`;
            contact.textContent = `${business[i].contactnumber}`;
            email.textContent = `${business[i].email}`;
            website.textContent = `${business[i].website}`;

            card.appendChild(div);

            div.appendChild(logo);
            div.appendChild(name);
            div.appendChild(contact);
            div.appendChild(email);
            div.appendChild(website);

            document.querySelector('.cards').appendChild(card);

        }
    });


/*function list {

}

function grid {

}*/