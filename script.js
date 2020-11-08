
let btnacc = document.querySelector('button');

btnacc.addEventListener('click',() => {
    let info = faker.helpers.createCard();

    let {name, email, address: {city, country, zipcode, state, streetAddress}} = info;

    document.querySelector('#name').value = name;
    document.querySelector('#email').value = email;
    document.querySelector('#city').value = city;
    document.querySelector('#zipcode').value = zipcode;
    document.querySelector('#country').value = country;
    document.querySelector('#state').value = state;
});