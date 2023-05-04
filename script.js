let itens = [
    produto1 = {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$300,00',
        type: 'Painting'
    },
    produto2 = {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Joystick Playstation',
        price: 'R$220,00',
        type: 'Painting'
    },
    produto3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$200,00',
        type: 'Painting'
    },
    produto4 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$130,00',
        type: 'Action Figures'
    },
    produto5 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$120,00',
        type: 'Action Figures'
    },
    produto6 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$90,00',
        type: 'Action Figures'
    },
    produto8 = {
        image: './assets/img/painting/keyboard.jpg',
        name: 'Keyboard',
        price: 'R$180,00',
        type: 'Painting'
    },
    produto9 = {
        image: './assets/img/actions/deadpool.jpg',
        name: 'Deadpool',
        price: 'R$80,00',
        type: 'Action Figures'
    },
    produto10 = {
        image: './assets/img/painting/mouse.jpg',
        name: 'Mouse',
        price: 'R$160,00',
        type: 'Painting'
    },
    produto11 = {
        image: './assets/img/actions/actionwoman.jpg',
        name: 'Action Woman',
        price: 'R$110,00',
        type: 'Action Figures'
    },
    produto12 = {
        image: './assets/img/actions/actiontoy.jpg',
        name: 'Sr Fire',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto13 = {
        image: './assets/img/painting/headphone.jpg',
        name: 'Headphone',
        price: 'R$240,00',
        type: 'Painting'
    },
    produto13 = {
        image: './assets/img/painting/laptop.jpg',
        name: 'Laptop',
        price: 'R$320,00',
        type: 'Painting'
    },
    produto14 = {
        image: './assets/img/actions/stormtrooper.jpg',
        name: 'Storm Trooper',
        price: 'R$120,00',
        type: 'Action Figures'
    },
    produto15 = {
        image: './assets/img/actions/spiderman.jpg',
        name: 'Spider Man',
        price: 'R$80,00',
        type: 'Action Figures'
    },
    produto16 = {
        image: './assets/img/painting/camera.jpg',
        name: 'Photographic Camera',
        price: 'R$280,00',
        type: 'Painting'
    },

];

const listFigures = [];
const listFrames = [];

function separateItens() {
    for (let i = 0; i < itens.length; i++) {
        if (itens[i].type == 'Painting') {
            listFrames.push(itens[i])
        } else if (itens[i].type == 'Action Figures') {
            listFigures.push(itens[i])
        }
    }
}

separateItens();

function createCard(product) {
    const card = document.createElement("div");

    const imageProduct = document.createElement("img");
    imageProduct.src = product.image;
    card.appendChild(imageProduct);

    const titleProduct = document.createElement("h3");
    titleProduct.innerText = product.name;
    card.appendChild(titleProduct);

    const priceProduct = document.createElement("p");
    priceProduct.innerText = product.price;
    card.appendChild(priceProduct);

    return card;
}

function createManyCards(products, listId) {
    const ul = document.getElementById(listId);
    for (let i = 0; i < products.length; i++) {
        const card = createCard(products[i]);
        const li = document.createElement("li");
        li.appendChild(card);
        ul.appendChild(li);
    }
}

createManyCards(listFrames, "paintingsProducts");
createManyCards(listFigures, "actionProducts");

/* Adicionando o evento para ativar o botão e mudar sua cor quando clicado */

const buttons = document.querySelectorAll('.my-button');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        if (button.classList.contains('clicked')) {
            button.classList.remove('clicked');
        } else {
            button.classList.add('clicked');
        }
    });
});

/* Dark Theme */

let buttonToggle = document.querySelector(`.dark-button`);
let themeStyle = document.getElementById(`theme-style`)
let logoStyle = document.getElementById(`logoTheme`)

buttonToggle.addEventListener(`click`, function () {
    buttons.forEach(button => {
        button.classList.remove('clicked');
      })
    if (themeStyle.getAttribute('href') === 'light-theme.css') {
        themeStyle.setAttribute('href', 'dark-theme.css');
        logoStyle.setAttribute('src', "logo-dark.svg")
        buttonToggle.innerHTML = `&#127774;`
        ;
    } else {
        themeStyle.setAttribute('href', 'light-theme.css');
        logoStyle.setAttribute('src', "logo.svg")
        buttonToggle.innerHTML = `&#127769;`;
    }
})


