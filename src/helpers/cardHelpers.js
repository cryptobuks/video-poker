import React from "react";

class CardHelper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: []
    };

    this.generateDeck = this.generateDeck.bind(this);
    this.shuffleCards = this.shuffleCards.bind(this);
  }

  card(name, suit, image, value) {
    this.name = name;
    this.suit = suit;
    this.image = image;
    this.value = value;
  }

  generateDeck() {
    const names = [
      "Ace",
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
      "King"
    ];

    const images = [
      "A",
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
      "K"
    ];

    const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];

    if (this.state.theDeck.length === 0) {
      for (let suit = 0; suit < suits.length; suit++) {
        for (let name = 0; name < names.length; name++) {
          new this.card(
            this.names[name],
            this.suits[suit],
            this.images[name],
            name + 1
          );
          //   this.card() {
          //       new card{
          //         name:this.names[name],
          //         suit: this.suits[suit],
          //         image: this.images[name],
          //         value: name + 1
          //       }
          //   }
        }
      }
    }
    return;
  }

  shuffleCards() {
    for (let i = 0; i < 1000; i++) {
      let index1 = Math.floor(Math.random() * 52);
      let index2 = Math.floor(Math.random() * 52);
      let temp = this.state.deck[index1];
      this.state.deck[index1] = this.state.deck[index2];
      this.state.deck[index2] = temp;
    }
  }

  render() {
    return <React.Fragment>Hi</React.Fragment>;
  }
}

export default CardHelper;
