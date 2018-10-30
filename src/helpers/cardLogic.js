const royalFlush = hand => {
  const values = hand.map(card => card.value);
  return flush(hand) && areEqual(values, ["10", "11", "12", "13", "14"]);
};

const straightFlush = hand => {
  return flush(hand) && straight(cardObj);
};

const mostOfAKind = cardObj => {
  const values = Object.values(cardObj);
  return values.sort((a, b) => a - b)[values.length - 1];
};

const fullHouse = cardObj => {
  const values = Object.values(cardObj);
  return values.length === 2;
};

const flush = hand => {
  const suits = hand.map(card => card.suit);
  const set = new Set(suits);
  return set.size === 1;
};

const straight = cardObj => {
  const values = Object.keys(cardObj);
  values.sort((a, b) => a - b);
  if (values.length !== 5) return false;
  else if (areEqual(values, ["2", "3", "4", "5", "14"])) return true;
  else if (values[4] - values[0] === 4) return true;
  else return false;
};

const areEqual = (a, b) => {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

const twoPairs = cardObj => {
  const values = Object.values(cardObj);
  const countObj = values.reduce((countObj, value) => {
    if (countObj[value]) {
      countObj[value]++;
    } else {
      countObj[value] = 1;
    }
    return countObj;
  }, {});
  return countObj[2] === 2;
};

const twoJacks = cardObj => {
  for (let key in cardObj) {
    if (key >= 11 && cardObj[key] === 2) return true;
  }
  return false;
};

const cardObj = hand => {
  return hand.reduce((cardObj, card) => {
    if (cardObj[card.value]) {
      cardObj[card.value]++;
    } else {
      cardObj[card.value] = 1;
    }
    return cardObj;
  }, {});
};

export default hand => {
  const cards = cardObj(hand);
  if (royalFlush(hand)) {
    return "You have a Royal Flush!";
  } else if (straightFlush(hand)) {
    return "You have a Straight Flush!";
  } else if (mostOfAKind(cards) === 4) {
    return "You have 4 of a Kind";
  } else if (fullHouse(cards)) {
    return "You have a Full House";
  } else if (flush(hand)) {
    return "You have a Flush";
  } else if (straight(cards)) {
    return "You have a Straight";
  } else if (mostOfAKind(cards) === 3) {
    return "You have 3 of a Kind";
  } else if (twoPairs(cards)) {
    return "You have Two Pairs";
  } else if (twoJacks(cards)) {
    return "You have One Pair of Jacks or better";
  } else return "You have nothing";
};

export {
  royalFlush,
  straightFlush,
  mostOfAKind,
  fullHouse,
  flush,
  straight,
  areEqual,
  twoPairs,
  twoJacks,
  cardObj
};
