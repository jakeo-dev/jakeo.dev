document.querySelector('#dscdSocialLink').onclick = function () {
    document.querySelector('#modal').classList.remove('fadeIn');
    document.querySelector('#modal').classList.add('fadeOut');

    document.getElementsByTagName('body')[0].classList.add('overflow-hidden');
}

window.onclick = function (event) {
    if (event.target == document.querySelector('#modal')) {
        hide();
    }
}

function hide() {
    document.querySelector('#modal').classList.add('fadeIn');
    document.querySelector('#modal').classList.remove('fadeOut');

    document.getElementsByTagName('body')[0].classList.remove('overflow-hidden');
}

/* function hoverBunny() {
    document.querySelector('#bunnyLogo').src = 'https://bunnies.jakeo.dev/images/potpourri-bunny-v4.png';
}

function offBunny() {
    document.querySelector('#bunnyLogo').src = 'https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png';
} */

function goHome() {
    window.open('../../', '_self');
}

/* let quotes = [
    'a programming rabbit',
    'a programming bunny',
    'i still hate chemistry',
    'become bunny',
    'i occasionally make websites',
    'not every website needs ai',
    'who needs to think when your feet just go'
];

function setDesc() {
    document.getElementById('desc').innerText = quotes[Math.floor(Math.random() * quotes.length)];
} */

let bunnies = [
    'https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png',
    'https://bunnies.jakeo.dev/images/solid-gradient-yellow-purple-bunny.png',
    'https://bunnies.jakeo.dev/images/solid-gradient-orange-black-bunny.png',
    'https://bunnies.jakeo.dev/images/solid-gradient-yellow-blue-bunny.png',
    'https://bunnies.jakeo.dev/images/solid-gradient-blurple-bunny.png',
    'https://bunnies.jakeo.dev/images/solid-gradient-blue-black-bunny.png'
];

function clickBunny() {
    b = document.getElementById('bunnyLogo').src;
    bunnies.splice(bunnies.indexOf(b), 1);
    document.getElementById('bunnyLogo').src = bunnies[Math.floor(Math.random() * bunnies.length)];
    bunnies.push(b);
}

const moneyImgs = document.querySelectorAll('.moneyImg');
let moneyCurrent = 0;

setInterval(function () {
    moneyImgs.forEach((image, index) => {
        if (index === moneyCurrent) {
            image.classList.remove('opacity-0');
        } else {
            image.classList.add('opacity-0');
        }
    });

    moneyCurrent = (moneyCurrent + 1) % moneyImgs.length;

}, 5000);

const cifraImgs = document.querySelectorAll('.cifraImg');
let cifraCurrent = 0;

setInterval(function () {
    cifraImgs.forEach((image, index) => {
        if (index === cifraCurrent) {
            image.classList.remove('opacity-0');
        } else {
            image.classList.add('opacity-0');
        }
    });

    cifraCurrent = (cifraCurrent + 1) % cifraImgs.length;

}, 5000);

const plantImgs = document.querySelectorAll('.plantImg');
let plantCurrent = 0;

setInterval(function () {
    plantImgs.forEach((image, index) => {
        if (index === plantCurrent) {
            image.classList.remove('opacity-0');
        } else {
            image.classList.add('opacity-0');
        }
    });

    plantCurrent = (plantCurrent + 1) % plantImgs.length;

}, 5000);

const filterImgs = document.querySelectorAll('.filterImg');
let filterCurrent = 0;

setInterval(function () {
    filterImgs.forEach((image, index) => {
        if (index === filterCurrent) {
            image.classList.remove('opacity-0');
        } else {
            image.classList.add('opacity-0');
        }
    });

    filterCurrent = (filterCurrent + 1) % filterImgs.length;

}, 5000);

const treeImgs = document.querySelectorAll('.treeImg');
let treeCurrent = 0;

setInterval(function () {
    treeImgs.forEach((image, index) => {
        if (index === treeCurrent) {
            image.classList.remove('opacity-0');
        } else {
            image.classList.add('opacity-0');
        }
    });

    treeCurrent = (treeCurrent + 1) % treeImgs.length;

}, 5000);

const bunnyImgs = document.querySelectorAll('.bunnyImg');
let bunnyCurrent = 0;

setInterval(function () {
    bunnyImgs.forEach((image, index) => {
        if (index === bunnyCurrent) {
            image.classList.remove('opacity-0');
        } else {
            image.classList.add('opacity-0');
        }
    });

    bunnyCurrent = (bunnyCurrent + 1) % bunnyImgs.length;

}, 5000);