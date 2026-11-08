const startScreen = document.getElementById("start-screeb");
const gameScreen = document.getElementbyId("game-screen");
const endScreen = document.getElementById("end-screen");

const timerDisplay = document.getElementById("timer");
const coinsDisplay = document.getElementById("coins");
const orderText = document.getElementById("order-text");
const customerImage = document.getElementById("customer-image");
const feedback = document.getElementById("feedback");

const cupIce = document.getElementById("cup-ice");
const cupBase = document.getElementById("cup-base");
const cupSyrup = document.getElementById("cup-syrup");
const cupToppings = document.getElementById("cup-toppings");

const startSound = new Audio(
    "assets/dragon-studio-coffee-pouring-into-a-cup-467478.mp3"
);

startSound.colume = 0.25;
startSound.loop = false;

const backgroundMusic = document.getElementById("background-music");
backgroundMusic.volume = 0.25;

const coinSound = new Audio("assets/alexzavesa-clinking-coins-4-468430.mp3");
coinSound.volume = 0.5;

// Linking Img to Constants
const customers = [
    "vampire-customer.gif",
    "zombie-customer.gif",
    "pumpkin-customer.gif",
    "witch-customer.gif"
];

const baseImages = {
    coffee: "coffee.gif",
    cider: "apple-cider.gif",
    chocolate: "hot-chocolate.gif"
};

const syrupImages = {
    pumpkin: "pumpkin-syrup-layer.png",
    caramel: "caramel-syrup-layer.png",
    cider: "cider-syrup-layer.png",
    chocolate: "chocolate-syrup-layer.png"
};

const toppingImages ={
    whipped: "whipped-cream.png",
    cinnamon: "cinnamon.png",
    marshmallows: "marshmallows.png",
    sprinkles: "sprinkles.png"
};

// Linking labels
const toppingLabels = {
    whipped: "Whipped Cream",
    cinnamon: "Cinnamon",
    marshmallows: "Marshmallows",
    sprinkles: "Chocolate Sprinkles"
};

const baseLabels = {
    coffee: "Coffee",
    cider: "Apple Cider",
    chocolate: "Hot Chocolate"
};

const syrupLabels = {
    pumpkin: "Pumpkin Syrup",
    caramel: "Caramel Syrup",
    cider: "Cider Syrup",
    chocolate: "Chocolate Syrup"
};

const recipes = [
    {
        base: "coffee",
        syrup: "pumpkin",
        ice: true,
        toppings: ["whipped", "cinnamon"],
        name: "Iced Pumpkin Coffee"
    },
    {
        base: "cider",
        syrup: "cider",
        ice: false,
        toppings: ["cinnamon"],
        name: "Apple Cider"
    },
    {
        base: "cider",
        syrup:"chocolate",
        ice: false,
        toppings: ["marshmallows"],
        name: "Hot Chocolate"
    },
    {
        base: "coffee",
        syrup: "caramel",
        ice: true,
        toppings: ["whipped"],
        name: "Iced Caramel Coffee"
    }
];

// Variables to keep track of
let currentOrder;
let playerDrink;
let coins = 0;
let timeLeft = 60;
let timerInterval;
let gameRunning = false;
let waitingForNextCustomer = false;

// Functions

// Reset Drink

function resetDrink() {
    playerDrink = {
        ice: false,
        base: null,
        syrup: null,
        toppings: []
    };

    renderDrink();
    updateSelectedButtons();
}

// Create Drink

function renderDrink() {
    cupIce.hidden = !playerDrink.ice;
    cupBase.hidden = !playerDrink.base;
    cupBase.src = playerDrink.base ? `assets/${baseImages[playerDrink.base]}` : "";

    cupSyrup.hidden = !playerDrink.syrup
    cupSyrup.src = playerDrink.syrup ? `assets/${syrupImages[playerDrink.syrup]}` : "";

    cupToppings.innerHTML = "";

    playerDrink.toppings.forEach(topping => {
        const img = document.createElement("img");
        img.src = `assets/${toppingImages[topping]}`
        img.alt = toppingLabels[topping];
        img.className = "cup-layer";
        img.style.zIndex = "6";
        cupToppings.appendChild(img);
    });
}

// update selected button

function updateSelectedButtons() {
    document.querySelectorAll(".ingredient").forEach(button => {
        button.classList.remove("Selected");
    });

    document.querySelectorAll(".art-button").forEach(button => {
        const type = button.dataset.type;
        const value = button.dataset.value;

        let selected = false;

        if (type === "ice") {
            selected = playerDrink.ice;
        }
        if (type === "base") {
            selected = playerDrink.base === value;
        }
        if (type === "syrup") {
            selected = playerDrink.syrup === value;
        }
        if (type === "topping") {
            selected = playerDrink.topping.includes(value);
        }

        button.classList.toggle("selected", selected);
    });
}

// new customer
function newCustomer() {
    currentOrder = recipes [Math.floor(Math.random() * recipes.length)];

    const randomCustomer = customers[Math.floor(Math.random() * customersLength)];

    customerImage.src = `assetss/${randomCustomer}`;

    const iceText = currentOrder.ice ? "Yes" : "No";
    const toppingText = currentOrder.toppings
        .map(topping => toppingLabels[topping])
        .join(" & ");

    orderText.innerHTML = `
    <strong>${currentOrder.name}</strong><br>
  --------------------<br>
  Ice: ${iceText}<br>
  Syrup: ${syrupLabels[currentOrder.syrup]}<br>
  Top: ${toppingText}<br>
  --------------------
    `;

    resetDrink();
    feedback.textContent = "";
    waitingForNextCustomer = false;
}

// Start game

// New game

// Handling Ingredient Clicks

// Same Toppings Check

// Serve Drink