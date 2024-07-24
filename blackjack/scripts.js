let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

document.getElementById('newCard').style.visibility = 'hidden';

function rand() {
    return Math.floor(Math.random() * 13) + 1
}

function startGame() {
    cards = []
    cards = [rand(), rand()]
    sum = cards[0] + cards[1]
    isAlive = true
    hasBlackJack = false
    document.getElementById('newCard').style.visibility = 'visible';
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards.join(" ")
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        messageEl.textContent = "draw a new card?"
    } else if (sum === 21) {
        messageEl.textContent = "Blackjack!"
        hasBlackJack = true
        document.getElementById('newCard').style.visibility = 'hidden';

    } else {
        messageEl.textContent = "You're out!"
        isAlive = false
        document.getElementById('newCard').style.visibility = 'hidden';
    }
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = rand()
        sum += card
        cards.push(card)
        renderGame()
    }
}