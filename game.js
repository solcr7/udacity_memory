/*creating a card deck */

const deck = ["memory_banane",
    "memory_beeren",
    "memory_bohnen",
    "memory_broccoli",
    "memory_exercise",
    "memory_grains",
    "memory_leinsamen",
    "memory_mangold",
    "memory_spices",
    "memory_tomate",
    "memory_walnuesse",
    "memory_wasser",
]

let fullDeck = deck.concat(deck);


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

shuffle(fullDeck);


/*setting a timer*/

let seconds = 0;
function counting() {
    seconds++;
    document.getElementById('counting_seconds').textContent = seconds;
}
let timer = null;


/* creating the Gameboard */

function startGame() {
    const gameboard = document.querySelector('#memory_gameboard');
    let newHtml = ''

    for (const cardName of fullDeck) {
        newHtml += `<div class="memory_card">
         <img class="memory_card_front" src="images/${cardName}.jpg"/>
         <img class="memory_card_back" src="images/green_cup.png"/>
         </div>`
    }
    gameboard.innerHTML = newHtml;
}

startGame()

//create star rating

let moves = 0;

function starRating(number) {
    const stars = document.getElementsByClassName('star');
    for (let i = 0; i < stars.length; i++) {

        if (i < number) {
            stars[i].classList.add('switch_on');
        }
        else {
            stars[i].classList.remove('switch_on');
        }
    }
}

let activeCarrots = 5;

function incrementMoves() {
    moves++;

    document.getElementById('display_moves').textContent = moves;

    if (moves < 34) {
        activeCarrots = 5;
        starRating(5);
    }

    else if (moves < 40) {
        activeCarrots = 4;
        starRating(4);
    }

    else if (moves < 46) {
        activeCarrots = 3;
        starRating(3);
    }

    else if (moves < 50) {
        activeCarrots = 2;
        starRating(2);
    }

    else {
        activeCarrots = 1;
        starRating(1);
    }

}

/* flipping and matching cards */
const eventAllCards = document.querySelectorAll('.memory_card');
for (memory_card of eventAllCards) {
    memory_card.addEventListener('click', function (event) {

        if (timer == null) {
            timer = setInterval(counting, 1000);
        }
        const flippedCards = document.querySelectorAll('.flipped');
        const count = flippedCards.length;
        if (count < 2) {
            /*adding sound */
            const sound = new Audio('Click On-SoundBible.com-1697535117.wav');
            sound.play();
            incrementMoves();
            this.classList.add('flipped');
        }
        if (count == 1) {
            const firstCard = flippedCards[0];
            const firstCardFront = firstCard.querySelector('.memory_card_front');
            const secondCardFront = this.querySelector('.memory_card_front');

            if (firstCardFront.src == secondCardFront.src) {
                firstCard.classList.add('matched');
                this.classList.add('matched');
                firstCard.classList.remove('flipped');
                this.classList.remove('flipped');
                //stop timer when all cards match / game is finished
                const allCardsMatch = document.querySelectorAll('.matched');
                if (allCardsMatch.length == 24) {
                    clearInterval(timer);
                    const alertBox = document.getElementById('alert_box_wrapper');
                    alertBox.classList.add('active');
                    const alertCarrots = document.getElementById('alert_carrots');
                    const alertSeconds = document.getElementById('alert_seconds');
                    const alertMoves = document.getElementById('alert_moves');

                    alertCarrots.textContent = activeCarrots;
                    alertSeconds.textContent = seconds;
                    alertMoves.textContent = moves;

                }
            }

            else {
                setTimeout(() => {
                    firstCard.classList.remove('flipped');
                    this.classList.remove('flipped');
                }, 1500)

            }
        }
    })
}



/* restarting the game / creating alert box with carrot rating / time / restart*/

function newGame() {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    document.getElementById('counting_seconds').textContent = seconds;
    moves = 0;
    document.getElementById('display_moves').textContent = moves;
    const allCardsMatch = document.querySelectorAll('.matched');
    for (const card of allCardsMatch) {
        card.classList.remove('matched');

    }
    starRating(5);
    document.getElementById('alert_box_wrapper').classList.remove('active');
    shuffle(fullDeck);

}

