document.querySelector('#dscdSocial').onclick = function () {
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

function hoverBunny() {
    document.querySelector('#bunnyLogo').src = 'https://bunnies.jakeo.dev/images/potpourri-bunny-v4.png';
}

function offBunny() {
    document.querySelector('#bunnyLogo').src = 'https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png';
}

let quotes = [
    'a programming rabbit',
    'a programming bunny',
    'i still hate chemistry',
    'become bunny',
    'i occasionally make websites',
    'not every website needs ai',
    /* 'stop contracting the possessive \'have\'', */
    'who needs to think when your feet just go'
];

function setDesc() {
    document.getElementById('desc').innerText = quotes[Math.floor(Math.random() * quotes.length)];
}

/* let i = 0;
let add = false;
let t;

document.getElementById('header').addEventListener('mouseover', startRotate, false);
document.getElementById('header').addEventListener('mouseout', stopRotate, false);

function startRotate(c) {
    time = 20;
    if (c == 'click') {
        time = 1;
    }
    t = setInterval(rotate, time);
}

function rotate() {
    if (i == -2) {
        add = true;
    } else if (i == 2) {
        add = false;
    }
    if (add == true) {
        i = round(i + 0.01);
    } else {
        i = round(i - 0.01);
    }
    document.getElementById('header').style.rotate = i + 'deg';
}

function stopRotate() {
    clearInterval(t);
}

function round(x) { // nearest hundredths (2nd decimal) place
    return Math.round(x * 100) / 100;
} */

function clickBunny() {
    window.open('../../', '_self');

    /* document.querySelector('body').classList.remove('bg-gray-900');
    document.querySelector('body').classList.add('bg-gradient-to-br');
    document.querySelector('body').classList.add('from-indigo-400');
    document.querySelector('body').classList.add('via-lime-500');
    document.querySelector('body').classList.add('to-amber-500');
    document.querySelector('body').classList.remove('text-gray-100');
    document.querySelector('body').classList.add('text-gray-800');

    document.querySelector('#fullHeader').classList.remove('from-gray-900/80');
    document.querySelector('#fullHeader').classList.add('from-white/40');

    document.querySelector('#bio').classList.remove('bg-gray-800');
    document.querySelector('#bio').classList.add('bg-gray-200');

    var elements = document.getElementsByClassName('proj');
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add('bg-gray-200');
        elements[i].classList.add('border-gray-300/40');
    }

    var elements2 = document.getElementsByClassName('pImg');
    for (let i = 0; i < elements2.length; i++) {
        elements2[i].classList.add('border-gray-300/70');
    }

    var elements3 = document.getElementsByClassName('title');
    for (let i = 0; i < elements3.length; i++) {
        elements3[i].className = 'title text-2xl font-semibold text-gray-900';
    } */
}