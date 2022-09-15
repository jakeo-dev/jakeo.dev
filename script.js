document.getElementById('social3').onclick = function () {
    document.getElementById('modal').classList.add("block");
    document.getElementById('modal').classList.remove("hidden");
}

window.onclick = function (event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').classList.add("hidden");
        document.getElementById('modal').classList.remove("block");
    }
}

function hoverBunny() {
    document.getElementById('bunnyLogo').src = 'images/potpourri-bunny.png';
}

function offBunny() {
    document.getElementById('bunnyLogo').src = 'images/solid-blue-gray-bunny.png';
}