const items = [{
        title: "Коляска Adamex",
        description: "Производитель Польша",
        tags: ["люлька", "прогулка"],
        price: 500,
        img: "./img/stroller_adamex.jpg",
    },
    {
        title: "Коляска Anex",
        description: "Производство Германия",
        tags: ["люлька"],
        price: 900,
        img: "./img/stroller_anex.jpg",
    },
    {
        title: "Коляска Bugaboo",
        description: "Производство Италия",
        tags: ["люлька", "прогулка"],
        price: 300,
        img: "./img/stroller_Bugaboo.jpg",
    },
    {
        title: "Коляска Bumbleride",
        description: "Производство Италия",
        tags: ["люлька", "прогулка"],
        price: 660,
        img: "./img/stroller_Bumbleride.jpg",
    },
    {
        title: "Коляска Cybex",
        description: "Производство Италия",
        tags: ["прогулка"],
        price: 400,
        img: "./img/stroller_CYBEX.jpg",
    },
    {
        title: "Коляска EGG",
        description: "Производство Германия",
        tags: ["люлька"],
        price: 200,
        img: "./img/stroller_EGG.jpg",
    },
    {
        title: "Коляска Maxi-Cosi",
        description: "Производство Польша",
        tags: ["люлька", "прогулка"],
        price: 300,
        img: "./img/stroller_Maxi-Cosi.jpg",
    },
    {
        title: "Коляска Noordi",
        description: "Теперь вы можете не переживать за личные вещи",
        tags: ["прогулка"],
        price: 500,
        img: "./img/stroller_Noordi.jpg",
    },
    {
        title: "Коляска Pituso",
        description: "Производство Италия",
        tags: ["люлька"],
        price: 1500,
        img: "./img/stroller_Pituso.jpg",
    },
    {
        title: "Коляска Roan",
        description: "Произволство Беларусь",
        tags: ["люлька", "прогулка"],
        price: 800,
        img: "./img/stroller_Roan.jpg",
    },
    {
        title: "Коляска Tutis",
        description: "Производство Польша",
        tags: ["люлька", "прогулка"],
        price: 3500,
        img: "./img/stroller_Tutis.jpg",
    },
    {
        title: "Коляска Doona",
        description: "Производство Франция",
        tags: ["люлька"],
        price: 800,
        img: "./img/car_seat_doona.jpg",
    },
];

const cardTemplate = document.querySelector('#item-template');
const shopItems = document.querySelector('#shop-items');



function makeCardByTemplate(title, description, tags, price, img) {

    const myCard = cardTemplate.content.cloneNode(true);

    myCard.querySelector('h1').textContent = title;
    myCard.querySelector('p').textContent = description;
    myCard.querySelector('.price').textContent = price;
    myCard.querySelector('img').src = img;

    const containerTags = myCard.querySelector('.tags');

    tags.forEach(function(item) {
        const spanTag = document.createElement('span');
        spanTag.classList.add('tag');
        spanTag.textContent = item;

        containerTags.append(spanTag);
    });


    return myCard;
}

items.forEach(function(item) {
    shopItems.append(makeCardByTemplate(item.title, item.description, item.tags, item.price, item.img));
});


const searchButton = document.querySelector('#search-btn');
const searchInput = document.querySelector('#search-input');
const nothingFound = document.querySelector('#nothing-found');



searchButton.addEventListener('keydown', function(event) {
    const inputValue = searchInput.value.trim().toLowerCase();


    nothingFound.textContent = "";
    shopItems.innerHTML = "";
    const filteredItems = items.filter((el) =>
        el.title.toLowerCase().includes(inputValue)
    )

    if (filteredItems.length > 0) {
        filteredItems.forEach(function(item) {
            shopItems.append(makeCardByTemplate(item.title, item.description, item.tags, item.price, item.img))
        })
    } else {
        nothingFound.textContent = "Ничего не найдено";
    }
});