import React from "react";

class TheDeck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theDeck: []
    };
  }

  card(name, suit, value, image) {
    this.name = name;
    this.image = image;
    this.suit = suit;
    this.value = value;
  }

  deckMaker() {}

  //   createTheShoe() {
  //     this.names = [
  //       "Ace",
  //       "Two",
  //       "Three",
  //       "Four",
  //       "Five",
  //       "Six",
  //       "Seven",
  //       "Eight",
  //       "Nine",
  //       "Ten",
  //       "Jack",
  //       "Queen",
  //       "King"
  //     ];
  //     this.images = [
  //       "A",
  //       "2",
  //       "3",
  //       "4",
  //       "5",
  //       "6",
  //       "7",
  //       "8",
  //       "9",
  //       "10",
  //       "J",
  //       "Q",
  //       "K"
  //     ];

  // this.values=[1,2,3,4,5,6,7,8,9,10,11,12,13];

  //     this.suits = ["Hearts", "Diamonds", "Spades", "Clubs"];

  //     if (this.state.theDeck === 0) {
  //       for (let suit = 0; suit < suits.length; suit++) {
  //         for (let name = 0; name < names.length; name++) {
  //           this.setState({
  //             theDeck: new Card(
  //               this.names[name],
  //               this.suits[suit],
  //               name + 1,
  //               this.images[image]
  //             )
  //           });
  //         }
  //       }
  //     }
  //   }

  render() {
    return <React.Fragment>Test</React.Fragment>;
  }
}

export default TheDeck;
