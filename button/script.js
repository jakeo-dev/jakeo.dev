let c = 0;
/* let darkColors = ['#bd3e3e', '#bd663e', '#bdb03e', '#44bd3e', '#3ebdbd', '#3e68bd', '#5a3ebd', '#973ebd', '#bd3e97'];
let colors = ['#e66e6e', '#e68c6e', '#e6da6e', '#88e66e', '#6ee6c8', '#6eace6', '#866ee6', '#c46ee6', '#e66ebc']; */

function button() {
    c++;
    document.getElementById('btn').innerText = c;

    /* if (c > 99) {
        document.getElementById('btn').style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }

    if (c > 199) {
        document.getElementById('btn').style.borderColor = darkColors[Math.floor(Math.random() * darkColors.length)];
    }

    if (c > 299) {
        document.getElementById('btn').style.width = (Math.floor(Math.random() * 800) + 210) + 'px';
    }

    if (c > 399) {
        document.getElementById('btn').style.height = (Math.floor(Math.random() * 400) + 110) + 'px';
    }

    if (c > 499) {
        document.getElementById('btn').style.borderRadius = (Math.floor(Math.random() * 100) + 0) + 'px';
    }

    if (c > 999) {
        document.getElementsByTagName('body')[0].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    } */
}