/*
 * Create a list that holds all of your cards
 */
const deck = [ "memory_banane", 
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


 /* crate Gameboard */

 function startGame() {
    const  gameboard = document.querySelector('#memory_gameboard');
    let newHtml = ''

    for(const cardName of fullDeck) {
         newHtml += `<div class="memory_card">
         <img class="memory_card_front" src="images/${cardName}.jpg"/>
         <img class="memory_card_back" src="images/memory_back.png"/>
         </div>`
    }
     gameboard.innerHTML = newHtml;
 }
    
 startGame()


/* set up the event listener for a card. If a card is clicked: */
const eventAllCards = document.querySelectorAll('.memory_card');
for(memory_card of eventAllCards) {
    memory_card.addEventListener('click', function(event) {
        const flippedCards = document.querySelectorAll('.flipped');
        const count = flippedCards.length;
        if (count < 2) {
        this.classList.add('flipped');
        }
        if (count == 1) {
            const firstCard = flippedCards[0];
            const firstCardFront = firstCard.querySelector('.memory_card_front');
            const secondCardFront = this.querySelector('.memory_card_front');
            console.log("pups", firstCardFront.src, secondCardFront.src);
            if (firstCardFront.src == secondCardFront.src) {
                firstCard.classList.add('matched');
                this.classList.add('matched');
                firstCard.classList.remove('flipped');
                this.classList.remove('flipped');
            }

            else { 
                setTimeout(()=>{
                    firstCard.classList.remove('flipped');
                    this.classList.remove('flipped');
                },1500)
                
            }


        }
    })
}


 
 /*- display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

