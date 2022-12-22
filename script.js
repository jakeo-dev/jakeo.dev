document.getElementById('dscdSocial').onclick = function () {
    document.getElementById('modal').classList.remove('fadeIn');
    document.getElementById('modal').classList.add('fadeOut');
}

window.onclick = function (event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').classList.add('fadeIn');
        document.getElementById('modal').classList.remove('fadeOut');
    }
}

function hoverBunny() {
    document.getElementById('bunnyLogo').src = 'https://bunnies.jakeo.dev/images/potpourri-bunny-v4.png';
}

function offBunny() {
    document.getElementById('bunnyLogo').src = 'https://bunnies.jakeo.dev/images/solid-blue-gray-bunny.png';
}