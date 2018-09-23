function generateDeck() {
  let deck = [];
  const names = [
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Jack",
    "Queen",
    "King",
    "Ace"
  ];

  const images = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  const suits = ["hearts", "diamonds", "spades", "clubs"];
  const icons = ["♥", "♦", "♠", "♣"];
  // const icons = ["&hearts;", "&diams;", "&spades;", "&clubs;"];

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < names.length; j++) {
      deck.push({
        name: names[j],
        suit: suits[i],
        image: images[j],
        value: j + 2,
        icon: icons[i]
      });
    }
  }
  return deck;
}

function shuffleDeck(deck) {
  for (let i = 0; i < 2000; i++) {
    let index1 = Math.floor(Math.random() * 52);
    let index2 = Math.floor(Math.random() * 52);
    let temp = deck[index1];
    deck[index1] = deck[index2];
    deck[index2] = temp;
  }
  return deck;
}

function handSorter(hand) {
  // ace logic here.
  return hand.sort(function(a, b) {
    if (a.value > b.value) return 1;
    else if (a.value < b.value) return -1;
    return 0;
  });
}

//  function suitChanger() {
//   if (suit === "Spades") {
//     return " &spades;";
//   } else if (suit === "Hearts") {
//     return "&hearts;";
//   } else if (suit === "Clubs") {
//     return "&clubs;";
//   } else if (suit === "Hearts") {
//     return "&diams;";
//   }
// }

export { generateDeck, shuffleDeck, handSorter };
