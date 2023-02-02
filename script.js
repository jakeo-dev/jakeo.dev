document.getElementById('dscdSocial').onclick = function () {
    document.getElementById('modal').classList.remove('fadeIn');
    document.getElementById('modal').classList.add('fadeOut');

    document.getElementsByTagName('body')[0].classList.add('overflow-hidden');
}

window.onclick = function (event) {
    if (event.target == document.getElementById('modal')) {
        hide();
    }
}

function hide() {
    document.getElementById('modal').classList.add('fadeIn');
    document.getElementById('modal').classList.remove('fadeOut');

    document.getElementsByTagName('body')[0].classList.remove('overflow-hidden');
}

function hoverBunny() {
    document.getElementById('bunnyLogo').src = 'https://bunnies.jakeo.dev/images/potpourri-bunny-v4.png';
}

function offBunny() {
    document.getElementById('bunnyLogo').src = 'https://bunnies.jakeo.dev/images/solid-blue-gray-bunny.png';
}