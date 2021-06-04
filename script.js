document.getElementById("start").style.display = "inline";
document.getElementById("next").style.display = "none";
document.getElementById("flip").style.display = "none";
document.getElementById("card").style.display = "none";
document.getElementById("ABNotif").style.display = "none";
document.getElementById("deleteABNotif").style.display = "none";
document.getElementById("fullCard").style.display = "none";

document.getElementById("ten").style.display = "flex";
document.getElementById("nine").style.display = "flex";
document.getElementById("eight").style.display = "flex";
document.getElementById("seven").style.display = "flex";
document.getElementById("six").style.display = "flex";

var cardArray = [];

var oneAInput = document.getElementById("1a");
var oneBInput = document.getElementById("1b");
var twoAInput = document.getElementById("2a");
var twoBInput = document.getElementById("2b");
var threeAInput = document.getElementById("3a");
var threeBInput = document.getElementById("3b");
var fourAInput = document.getElementById("4a");
var fourBInput = document.getElementById("4b");
var fiveAInput = document.getElementById("5a");
var fiveBInput = document.getElementById("5b");
var sixAInput = document.getElementById("6a");
var sixBInput = document.getElementById("6b");
var sevenAInput = document.getElementById("7a");
var sevenBInput = document.getElementById("7b");
var eightAInput = document.getElementById("8a");
var eightBInput = document.getElementById("8b");
var nineAInput = document.getElementById("9a");
var nineBInput = document.getElementById("9b");
var tenAInput = document.getElementById("10a");
var tenBInput = document.getElementById("10b");

document.getElementById("start").onclick = function() {
    if (document.getElementById("1a").value == "" && document.getElementById("1b").value == "" && document.getElementById("2a").value == "" && document.getElementById("2b").value == "" && document.getElementById("3a").value == "" && document.getElementById("3b").value == "" && document.getElementById("4a").value == "" && document.getElementById("4b").value == "" && document.getElementById("5a").value == "" && document.getElementById("5b").value == "" && document.getElementById("6a").value == "" && document.getElementById("6b").value == "" && document.getElementById("7a").value == "" && document.getElementById("7b").value == "" && document.getElementById("8a").value == "" && document.getElementById("8b").value == "" && document.getElementById("9a").value == "" && document.getElementById("9b").value == "" && document.getElementById("10a").value == "" && document.getElementById("10b").value == "") {
        document.getElementById("ABNotif").style.display = "block";
        document.getElementById("deleteABNotif").style.display = "block";
    } else {

        cardArray.push(oneAInput.value);
        cardArray.push(oneBInput.value);
        cardArray.push(twoAInput.value);
        cardArray.push(twoBInput.value);
        cardArray.push(threeAInput.value);
        cardArray.push(threeBInput.value);
        cardArray.push(fourAInput.value);
        cardArray.push(fourBInput.value);
        cardArray.push(fiveAInput.value);
        cardArray.push(fiveBInput.value);
        cardArray.push(sixAInput.value);
        cardArray.push(sixBInput.value);
        cardArray.push(sevenAInput.value);
        cardArray.push(sevenBInput.value);
        cardArray.push(eightAInput.value);
        cardArray.push(eightBInput.value);
        cardArray.push(nineAInput.value);
        cardArray.push(nineBInput.value);
        cardArray.push(tenAInput.value);
        cardArray.push(tenBInput.value);

        document.getElementById("start").style.display = "none";
        document.getElementById("boxes").style.display = "none";
        document.getElementById("addCard").style.display = "none";
        document.getElementById("removeCard").style.display = "none";
        document.getElementById("next").style.display = "inline";
        document.getElementById("flip").style.display = "inline";
        document.getElementById("card").style.display = "inline";
        document.getElementById("fullCard").style.display = "inline";
        document.getElementById("ABNotif").style.display = "none";
        document.getElementById("deleteABNotif").style.display = "none";
        
        randomize();
    }
}

function insert() {
    cardArray.push(oneAInput.value);
    cardArray.push(oneBInput.value);
    cardArray.push(twoAInput.value);
    cardArray.push(twoBInput.value);
    cardArray.push(threeAInput.value);
    cardArray.push(threeBInput.value);
    cardArray.push(fourAInput.value);
    cardArray.push(fourBInput.value);
    cardArray.push(fiveAInput.value);
    cardArray.push(fiveBInput.value);
    cardArray.push(sixAInput.value);
    cardArray.push(sixBInput.value);
    cardArray.push(sevenAInput.value);
    cardArray.push(sevenBInput.value);
    cardArray.push(eightAInput.value);
    cardArray.push(eightBInput.value);
    cardArray.push(nineAInput.value);
    cardArray.push(nineBInput.value);
    cardArray.push(tenAInput.value);
    cardArray.push(tenBInput.value);

    randomize();
}

function randomize() {

    var randomNumber = Math.floor(Math.random() * cardArray.length);
    card.innerHTML = cardArray[randomNumber];

    if (card.innerHTML === "") {
        insert();
    }

}

document.getElementById("flip").onclick = function() {
    switch (card.innerHTML) {
        case oneAInput.value:
            card.innerHTML = oneBInput.value;
            break;

        case oneBInput.value:
            card.innerHTML = oneAInput.value;
            break;

        case twoAInput.value:
            card.innerHTML = twoBInput.value;
            break;

        case twoBInput.value:
            card.innerHTML = twoAInput.value;
            break;

        case threeAInput.value:
            card.innerHTML = threeBInput.value;
            break;

        case threeBInput.value:
            card.innerHTML = threeAInput.value;
            break;

        case fourAInput.value:
            card.innerHTML = fourBInput.value;
            break;

        case fourBInput.value:
            card.innerHTML = fourAInput.value;
            break;

        case fiveAInput.value:
            card.innerHTML = fiveBInput.value;
            break;

        case fiveBInput.value:
            card.innerHTML = fiveAInput.value;
            break;

        case sixAInput.value:
            card.innerHTML = sixBInput.value;
            break;

        case sixBInput.value:
            card.innerHTML = sixAInput.value;
            break;

        case sevenAInput.value:
            card.innerHTML = sevenBInput.value;
            break;

        case sevenBInput.value:
            card.innerHTML = sevenAInput.value;
            break;

        case eightAInput.value:
            card.innerHTML = eightBInput.value;
            break;

        case eightBInput.value:
            card.innerHTML = eightAInput.value;
            break;

        case nineAInput.value:
            card.innerHTML = nineBInput.value;
            break;

        case nineBInput.value:
            card.innerHTML = nineAInput.value;
            break;

        case tenAInput.value:
            card.innerHTML = tenBInput.value;
            break;

        case tenBInput.value:
            card.innerHTML = tenAInput.value;
            break;
    }

    if (card.innerHTML === "") {
        document.getElementById("start").style.display = "inline";
        document.getElementById("boxes").style.display = "inline";
        document.getElementById("next").style.display = "none";
        document.getElementById("flip").style.display = "none";
        document.getElementById("card").style.display = "none";
    }
}

function reset() {
    document.getElementById("1a").value = "";
    document.getElementById("1b").value = "";
    document.getElementById("2a").value = "";
    document.getElementById("2b").value = "";
    document.getElementById("3a").value = "";
    document.getElementById("3b").value = "";
    document.getElementById("4a").value = "";
    document.getElementById("4b").value = "";
    document.getElementById("5a").value = "";
    document.getElementById("5b").value = "";
    document.getElementById("6a").value = "";
    document.getElementById("6b").value = "";
    document.getElementById("7a").value = "";
    document.getElementById("7b").value = "";
    document.getElementById("8a").value = "";
    document.getElementById("8b").value = "";
    document.getElementById("9a").value = "";
    document.getElementById("9b").value = "";
    document.getElementById("10a").value = "";
    document.getElementById("10b").value = "";
}

function deleteABNotif() {
    document.getElementById("ABNotif").style.display = "none";
    document.getElementById("deleteABNotif").style.display = "none";
}

function addCard() {

}

function removeCard() {
    if (document.getElementById("ten").style.display == "flex") {
        ten.classList.remove("is-flex");
        ten.classList.add("is-hidden");

    } else if (document.getElementById("nine").style.display == "flex") {
        nine.classList.remove("is-flex");
        nine.classList.add("is-hidden");
        
    } else if (document.getElementById("eight").style.display == "flex") {
        eight.classList.remove("is-flex");
        eight.classList.add("is-hidden");
        
    } else if (document.getElementById("seven").style.display == "flex") {
        seven.classList.remove("is-flex");
        ten.classList.add("is-hidden");
        
    } else if (document.getElementById("six").style.display == "flex") {
        six.classList.remove("is-flex");
        six.classList.add("is-hidden");
        document.getElementById("remove").disabled = true;
    }
}