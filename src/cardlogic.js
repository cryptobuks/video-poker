import React from "react";

function CardLogic(props) {
  let pokerHand = "";
  if (
    props.hand[0].value === 10 &&
    props.hand[1].value === 11 &&
    props.hand[2].value === 12 &&
    props.hand[3].value === 13 &&
    props.hand[4].value === 14 &&
    (props.hand[0].suit === props.hand[1].suit &&
      props.hand[1].suit === props.hand[2].suit &&
      props.hand[2].suit === props.hand[3].suit &&
      props.hand[3].suit === props.hand[4].suit)
  ) {
    pokerHand = "You have a Royal Flush!";
  } else if (
    ((props.hand[0].value + 1 === props.hand[1].value &&
      props.hand[1].value + 1 === props.hand[2].value &&
      props.hand[2].value + 1 === props.hand[3].value &&
      props.hand[3].value + 1 === props.hand[4].value) ||
      (props.hand[0].value === 2 &&
        props.hand[4].value === 14 &&
        props.hand[1].value + 1 === props.hand[2].value &&
        props.hand[2].value + 1 === props.hand[3].value)) &&
    (props.hand[0].suit === props.hand[1].suit &&
      props.hand[1].suit === props.hand[2].suit &&
      props.hand[2].suit === props.hand[3].suit &&
      props.hand[3].suit === props.hand[4].suit)
  ) {
    pokerHand = "You have a Straight Flush";
  } else if (
    props.hand[1].value === props.hand[2].value &&
    props.hand[2].value === props.hand[3].value &&
    (props.hand[0].value === props.hand[1].value ||
      props.hand[3].value === props.hand[4].value)
  ) {
    pokerHand = "You have a Four of a Kind";
  } else if (
    (props.hand[0].value === props.hand[1].value &&
      props.hand[1].value === props.hand[2].value &&
      props.hand[3].value === props.hand[4].value) ||
    (props.hand[0].value === props.hand[1].value &&
      props.hand[2].value === props.hand[3].value &&
      props.hand[3].value === props.hand[4].value)
  ) {
    pokerHand = "You have a Full House";
  } else if (
    props.hand[0].suit === props.hand[1].suit &&
    props.hand[1].suit === props.hand[2].suit &&
    props.hand[2].suit === props.hand[3].suit &&
    props.hand[3].suit === props.hand[4].suit
  ) {
    pokerHand = "You have a Flush";
  } else if (
    (props.hand[0].value + 1 === props.hand[1].value &&
      props.hand[1].value + 1 === props.hand[2].value &&
      props.hand[2].value + 1 === props.hand[3].value &&
      props.hand[3].value + 1 === props.hand[4].value) ||
    (props.hand[0].value === 2 &&
      props.hand[4].value === 14 &&
      props.hand[1].value + 1 === props.hand[2].value &&
      props.hand[2].value + 1 === props.hand[3].value)
  ) {
    pokerHand = "You have a Straight";
  } else if (
    (props.hand[0].value === props.hand[1].value &&
      props.hand[1].value === props.hand[2].value) ||
    (props.hand[1].value === props.hand[2].value &&
      props.hand[2].value === props.hand[3].value) ||
    (props.hand[2].value === props.hand[3].value &&
      props.hand[3].value === props.hand[4].value)
  ) {
    pokerHand = "You have a Three of a Kind";
  } else if (
    (props.hand[0].value === props.hand[1].value &&
      (props.hand[2].value === props.hand[3].value ||
        props.hand[3].value === props.hand[4].value ||
        props.hand[3].value === props.hand[4].value)) ||
    (props.hand[1].value === props.hand[2].value &&
      props.hand[3] === props.hand[4])
  ) {
    pokerHand = "You have Two Pairs";
  } else if (
    (props.hand[0].value === props.hand[1].value &&
      props.hand[0].value >= 11) ||
    (props.hand[1].value === props.hand[2].value &&
      props.hand[1].value >= 11) ||
    (props.hand[2].value === props.hand[3].value &&
      props.hand[2].value >= 11) ||
    (props.hand[3].value === props.hand[4].value && props.hand[3].value >= 11)
  ) {
    pokerHand = "You have a Pair of Jacks or Better";
  } else {
    pokerHand = "You have Nothing";
  }
  return pokerHand;
}

export default CardLogic;
