function goHome() {
    window.open('../../', '_self');
}

function openPlannter() {
    window.open('https://plannter.jakeo.dev', '_blank');
}

function openPlannterGH() {
    window.open('https://github.com/jakeo-dev/plannter', '_blank');
}

/* let holidayBunnies = [
    'https://bunnies.jakeo.dev/images/new-years-bunny.png',
    'https://bunnies.jakeo.dev/images/new-years-bunny.png '
] */

//window.onload = clickBunny;

function clickBunny() {
    /* thing = holidayBunnies[Math.floor(Math.random() * holidayBunnies.length)];
    while (thing == document.getElementById('bunnyLogoImg').src) {
        thing = holidayBunnies[Math.floor(Math.random() * holidayBunnies.length)];
    }
    document.getElementById('bunnyLogoImg').src = thing; */

    changeBunnyColor();
    if (document.getElementById('bunnyLogoSvgButton').classList.contains('hidden')) {
        document.getElementById('bunnyLogoButton').classList.add('hidden');
        document.getElementById('bunnyLogoSvgButton').classList.remove('hidden');
    }
}

function changeBunnyColor() {
    val1 = Math.floor(Math.random() * 256);
    val2 = Math.floor(Math.random() * 256);
    val3 = Math.floor(Math.random() * 256);
    document.getElementById('svgThing').style.fill = `rgb(${val1}, ${val2}, ${val3})`;
    //document.getElementsByTagName('body')[0].style.backgroundColor = `rgb(${lightenColor(val1, val2, val3, val1)}, ${lightenColor(val1, val2, val3, val2)}, ${lightenColor(val1, val2, val3, val3)})`;
}

/* function lightenColor(val1, val2, val3, changed) {
    least = val1;
    if (val2 < val1 && val2 < val3) {
        least = val2;
    } else if (val3 < val1 && val3 < val2) {
        least = val3;
    }

    if (least < 100) {
        changed += 150;
    } else if (least < 150) {
        changed += 100;
    } else if (least < 200) {
        changed += 50;
    }

    return changed;
} */

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

const cerebricImgs = document.querySelectorAll('.cerebricImg');
let cerebricCurrent = 0;

setInterval(function () {
    cerebricImgs.forEach((image, index) => {
        if (index === cerebricCurrent) {
            image.classList.remove('opacity-0');
        } else {
            image.classList.add('opacity-0');
        }
    });

    cerebricCurrent = (cerebricCurrent + 1) % cerebricImgs.length;

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