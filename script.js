var numbers = [1, 2, 3, 4, 5, 6];

var screamArray = [
    'scream-1.mp3',
    'scream-2.mp3',
    'scream-3.mp3',
    'scream-4.mp3'
]

var fearArray = [
    'fear-1.mp3',
    'fear-2.mp3',
    'fear-3.mp3',
    'fear-4.mp3'
]

var scream = new Audio(screamArray[Math.floor(Math.random() * screamArray.length)]);
var fear = new Audio(fearArray[Math.floor(Math.random() * fearArray.length)]);

var isMuted = false;
var dontRR = true;

function youGot() {
    document.getElementById('spinButton').innerHTML = 'CLICK AGAIN...';

    document.getElementById('numberT').innerHTML = 'YOU GOT ';
    document.getElementById('result').innerHTML = '';

    fear.play();
    fear.loop = true;

    document.getElementById('spinButton').disabled = true;
    document.getElementById('spinButton').style.backgroundColor = '#db9d83';
    document.getElementById('spinButton').style.cursor = 'not-allowed';

    setTimeout(function () {
        youGot2();
    }, 800);
}

function youGot2() {
    document.getElementById('numberT').innerHTML = 'YOU GOT. ';

    setTimeout(function () {
        youGot3();
    }, 800);
}

function youGot3() {
    document.getElementById('numberT').innerHTML = 'YOU GOT.. ';

    setTimeout(function () {
        youGot4();
    }, 800);
}

function youGot4() {
    document.getElementById('numberT').innerHTML = 'YOU GOT... ';

    var time = Math.floor(Math.random() * 2500) + 1200;

    setTimeout(function () {
        spin();
    }, time);
}

function spin() {
    var number = numbers[Math.floor(Math.random() * numbers.length)];

    if (dontRR == true) {
        while (number == 6) {
            number = numbers[Math.floor(Math.random() * numbers.length)];
        }
    }

    var i = numbers.indexOf(number);

    if (i > -1 && numbers.length > -1) {
        numbers.splice(i, 1);

        document.getElementById('result').style.color = '#71C562';
    }

    if (dontRR == false && number == 6) {
        numbers = [
            1,
            2,
            3,
            4,
            5,
            6
        ];

        document.getElementById('result').style.color = '#e03128';

        scream = new Audio(screamArray[Math.floor(Math.random() * screamArray.length)]);
        fear = new Audio(fearArray[Math.floor(Math.random() * fearArray.length)]);
    }

    console.log(number);
    document.getElementById('numberT').innerHTML = 'YOU GOT... ' + number;

    var time2 = Math.floor(Math.random() * 500) + 700;

    setTimeout(function () {
        safe(number);
    }, time2);
}

function safe(number) {
    document.getElementById('spinButton').disabled = false;
    document.getElementById('spinButton').style.backgroundColor = '#ffb18f';
    document.getElementById('spinButton').style.cursor = 'pointer';

    if (number <= 5 && number >= 1) {
        document.getElementById('result').innerHTML = 'SAFE';

        dontRR = false;

    } else if (number == 6) {
        document.getElementById('result').innerHTML = 'AAAAAAA';

        fear.pause();
        scream.play();

        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }
}

function mute() {
    if (isMuted == false) {
        document.getElementById('vOn').style.display = 'none';
        document.getElementById('vOff').style.display = 'block';

        fear.muted = true;
        scream.muted = true;

        isMuted = true;

        // console.log('1');
        // console.log(isMuted);

    } else if (isMuted == true) {
        document.getElementById('vOn').style.display = 'block';
        document.getElementById('vOff').style.display = 'none';

        fear.muted = false;
        scream.muted = false;

        isMuted = false;

        // console.log('2');
        // console.log(isMuted);

    }

}

document.body.onkeyup = function (event) {
    if (event.keyCode == 32) {
        document.getElementById('spinButton').click();
    } else if (event.keyCode == 77) {
        document.getElementById('muteButton').click();
    }
};