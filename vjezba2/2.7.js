function blackJack(cards) {
  let dealerCalled = false;
  let dealerSum = 0;
  let callCount = 0;
  let playerDone = false;

  return function dealer(firstCard, secondCard) {
    if (!dealerCalled) {
      dealerSum = firstCard + secondCard;
      dealerCalled = true;

      return function player() {
        if (playerDone) {
          return "You are done!";
        }

        callCount++;

        if (callCount === 1) {
          return dealerSum;
        } else {
          const currentCard = cards[callCount - 2];
          dealerSum += currentCard;

          if (dealerSum > 21) {
            playerDone = true;
            return "bust!";
          }

          return dealerSum;
        }
      };
    } else {
      console.log("Dealer can be called only once.");
    }
  }
}

// Primjer korištenja
const cards = [4, 5, 6, 7, 8];
const playGame = blackJack(cards);

const dealerHand = playGame(7, 1);
console.log("Dealer hand:", dealerHand);

const playerHand1 = dealerHand();
console.log("Player hand 1:", playerHand1);

const playerHand2 = dealerHand();
console.log("Player hand 2:", playerHand2);

const playerHand3 = dealerHand();
console.log("Player hand 3:", playerHand3);

const playerHand4 = dealerHand();
console.log("Player hand 4:", playerHand4);

const playerHand5 = dealerHand();
console.log("Player hand 5:", playerHand5);
