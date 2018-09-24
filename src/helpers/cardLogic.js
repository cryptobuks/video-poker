function cardLogic(hand) {
  let pokerHand = "";
  let handResult = "";
  if (
    hand[0].value === 10 &&
    hand[1].value === 11 &&
    hand[2].value === 12 &&
    hand[3].value === 13 &&
    hand[4].value === 14 &&
    (hand[0].suit === hand[1].suit &&
      hand[1].suit === hand[2].suit &&
      hand[2].suit === hand[3].suit &&
      hand[3].suit === hand[4].suit)
  ) {
    pokerHand = "You have a Royal Flush!";
    handResult = "royalFlush";
  } else if (
    ((hand[0].value + 1 === hand[1].value &&
      hand[1].value + 1 === hand[2].value &&
      hand[2].value + 1 === hand[3].value &&
      hand[3].value + 1 === hand[4].value) ||
      (hand[0].value === 2 &&
        hand[4].value === 14 &&
        hand[1].value + 1 === hand[2].value &&
        hand[2].value + 1 === hand[3].value)) &&
    (hand[0].suit === hand[1].suit &&
      hand[1].suit === hand[2].suit &&
      hand[2].suit === hand[3].suit &&
      hand[3].suit === hand[4].suit)
  ) {
    pokerHand = "You have a Straight Flush";
    handResult = "straightFlush";
  } else if (
    hand[1].value === hand[2].value &&
    hand[2].value === hand[3].value &&
    (hand[0].value === hand[1].value || hand[3].value === hand[4].value)
  ) {
    pokerHand = "You have a Four of a Kind";
    handResult = "fourOfAKind";
  } else if (
    (hand[0].value === hand[1].value &&
      hand[1].value === hand[2].value &&
      hand[3].value === hand[4].value) ||
    (hand[0].value === hand[1].value &&
      hand[2].value === hand[3].value &&
      hand[3].value === hand[4].value)
  ) {
    pokerHand = "You have a Full House";
    handResult = "fullHouse";
  } else if (
    hand[0].suit === hand[1].suit &&
    hand[1].suit === hand[2].suit &&
    hand[2].suit === hand[3].suit &&
    hand[3].suit === hand[4].suit
  ) {
    pokerHand = "You have a Flush";
    handResult = "flush";
  } else if (
    (hand[0].value + 1 === hand[1].value &&
      hand[1].value + 1 === hand[2].value &&
      hand[2].value + 1 === hand[3].value &&
      hand[3].value + 1 === hand[4].value) ||
    (hand[0].value === 2 &&
      hand[4].value === 14 &&
      hand[1].value + 1 === hand[2].value &&
      hand[2].value + 1 === hand[3].value)
  ) {
    pokerHand = "You have a Straight";
    handResult = "straight";
  } else if (
    (hand[0].value === hand[1].value && hand[1].value === hand[2].value) ||
    (hand[1].value === hand[2].value && hand[2].value === hand[3].value) ||
    (hand[2].value === hand[3].value && hand[3].value === hand[4].value)
  ) {
    pokerHand = "You have a Three of a Kind";
    handResult = "threeOfAKind";
  } else if (
    (hand[0].value === hand[1].value &&
      (hand[2].value === hand[3].value ||
        hand[3].value === hand[4].value ||
        hand[3].value === hand[4].value)) ||
    (hand[1].value === hand[2].value && hand[3] === hand[4])
  ) {
    pokerHand = "You have Two Pairs";
    handResult = "twoPair";
  } else if (
    (hand[0].value === hand[1].value && hand[0].value >= 11) ||
    (hand[1].value === hand[2].value && hand[1].value >= 11) ||
    (hand[2].value === hand[3].value && hand[2].value >= 11) ||
    (hand[3].value === hand[4].value && hand[3].value >= 11)
  ) {
    pokerHand = "You have a Pair of Jacks or Better";
    handResult = "onePair";
  } else {
    pokerHand = "You have Nothing";
    handResult = "Nothing";
  }
  return { pokerHand, handResult };
}

export { cardLogic };
