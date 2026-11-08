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
    }

]