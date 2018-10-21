const royalFlush = hand => {
  const values = hand.map(card => card.values);
  return areFlush && areEqual(values, [10, 11, 12, 13, 14]);
};

// const straightFlush = hand => {
//   return areFlush && areEqual;
// };

const mostOfAKind = cardObj => {
  const values = Object.values(cardObj);
  return values.sort((a, b) => a - b)[values.length - 1];
};

const areFullHouse = cardObj => {
  const values = Object.values(cardObj);
  return values.length === 2;
};

const areFlush = hand => {
  const suits = hand.map(card => card.suit);
  const set = new Set(suits);
  return set.size === 1;
};

const areStraight = cardObj => {
  const values = Object.values(cardObj);
  values.sort((a, b) => a - b);
  return values[4] - values[0] === 5;
};

//if
//object,keys.includes 5 || object.keys.includes 10
//sort ascending.
//and
//keys[4]-keys[0]===5 ||
//keys[4]===14 && keys[3]===4 && keys[2]===4  && keys[1]===3 && keys[0]===2

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
  }
  // else if (straightFlush(hand)) {
  //   return "You have a Straight Flush!";
  // }
  else if (mostOfAKind(cards) === 4) {
    return "You have 4 of a Kind";
  } else if (areFullHouse(cards)) {
    return "You have a Full House";
  } else if (areFlush(hand)) {
    return "You have a Flush";
  } else if (areStraight(cards)) {
    return "You have a straight";
  } else if (mostOfAKind(cards) === 3) {
    return "You have 3 of a Kind";
  } else if (twoPairs(cards)) {
    return "You have Two Pairs";
  } else if (twoJacks(cards)) {
    return "You have a Pair of Jacks or better";
  } else return "You have nothing";
};

export {
  royalFlush,
  // straightFlush,
  mostOfAKind,
  areFullHouse,
  areFlush,
  areStraight,
  areEqual,
  twoPairs,
  twoJacks,
  cardObj
};
