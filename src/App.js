import React from "react";
import CasinoName from "./CasinoName.js";
import PayTable from "./PayTable.js";
// import HandResult from "./HandResult.js";
import HelpModal from "./HelpModal.js";
import * as cardHelpers from "./helpers/cardHelpers.js";
import * as cardLogic from "./helpers/cardLogic.js";
import Card from "./card.js";
import ButtonLine from "./ButtonLine.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deck: [],
      hand: [],
      betAmount: 1,
      bankroll: 100,
      showModal: false,
      isDeal: true,
      pokerResult: "",
      winAmount: ""
    };

    this.betOne = this.betOne.bind(this);
    this.dealFirstFiveCards = this.dealFirstFiveCards.bind(this);
    this.discardToggle = this.discardToggle.bind(this);
    this.discard = this.discard.bind(this);
    this.pokerResult = this.pokerResult.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  betOne() {
    this.state.betAmount < 5
      ? this.setState({ betAmount: this.state.betAmount + 1 })
      : this.setState({ betAmount: 1 });
  }

  dealFirstFiveCards() {
    let deck = cardHelpers.generateDeck();
    cardHelpers.shuffleDeck(deck);
    this.setState({ deck: deck, isDeal: true });
    let hand = deck.slice(0, 5);
    cardHelpers.handSorter(hand);
    this.setState({
      deck,
      hand,
      isDeal: false
    });
  }

  discardToggle(cardIndex) {
    const hand = this.state.hand.map((card, index) => {
      if (cardIndex === index) {
        return { ...card, isChecked: !card.isChecked };
      } else {
        return card;
      }
    });
    this.setState({ hand });
  }

  discard() {
    console.log("this.state.hand", this.state.hand);
    console.log("this.state.deck", this.state.deck);
    let deck = this.state.deck;
    let newHand = this.state.hand.filter(card => {
      return card.isChecked === false;
    });
    let cardsNeeded = 5 - newHand.length;
    for (let i = 0; i < cardsNeeded; i++) {
      if (cardsNeeded) {
        newHand = newHand.concat(deck.slice(5 + i, 5 + i + 1));
      }
    }
    cardHelpers.handSorter(newHand);
    this.setState({
      isDeal: true,
      hand: newHand
    });
    this.pokerResult();
  }

  pokerResult() {
    const payTable = {
      royalFlush: 800,
      straightFlush: 50,
      fourOfAKind: 25,
      fullHouse: 9,
      flush: 6,
      straight: 4,
      threeOfAKind: 3,
      twoPair: 2,
      onePair: 1
    };

    this.setState({ pokerResult: cardLogic.cardLogic(this.state.hand) });

    // {
    //   !!this.state.hand.length && cardLogic.cardLogic(this.state.hand);
    // }

    // this.setState({
    //   winAmount: payTable.(this.state.pokerResult) * this.state.betAmount,
    //   bankroll:
    //     this.state.bankroll +
    //     payTable.this.state.pokerResult * this.state.betAmount
    // });
  }
  // selectChecked() {
  //   this.setState({});
  // }

  // let newHand = this.state.deck.slice(0, numChecked);

  // this.setState({ bankroll: this.state.bankroll - 1 });
  // this.setState(hand:hand.filter.whichever is clicked to be discarded)
  // click is to discard, not keep.
  // this.setState(hand: deck(0, howevermany were chosen))

  toggleModal(prevState) {
    this.setState({ showModal: !this.state.showModal });
    // this.setState({ showModal: !prevState.showModal });
  }

  render() {
    console.log("this.state.deck", this.state.deck);
    console.log("this.state.hand", this.state.hand);
    console.log("this.state.pokerResult=", this.state.pokerResult);
    return (
      <React.Fragment>
        <CasinoName />
        <hr className="horizontal-line" />
        <div id="top" className="flex-container">
          <div id="pay-table">
            <PayTable betAmount={this.state.betAmount} />
          </div>
          <div id="hand-result">
            {/* {!!this.state.hand.length &&
              cardLogic.cardLogic(this.state.hand) &&
              !this.state.isDeal} */}
            {this.state.pokerResult.handResult === "" ? null : (
              <div>
                <p>{this.state.pokerResult.pokerHand}</p>
                {this.state.winAmount === "" ? null : (
                  <p>You win {this.state.winAmount} coins</p>
                )}
              </div>
            )}

            {/* <HandResult hand={this.state.hand} /> 
             {!!this.state.hand.length && cardLogic.cardLogic(this.state.hand)}  */}
          </div>

          <hr className="horizontal-line" />
          <HelpModal
            showModal={this.state.showModal}
            isOpen={this.toggleModal}
            onRequestClose={this.toggleModal}
          />
          <div id="the-hand" className="flex-contianer">
            {this.state.hand.map((card, cardIndex) => (
              <Card
                key={cardIndex}
                card={card}
                discardToggle={() => this.discardToggle(cardIndex)}
              />
            ))}
          </div>
        </div>
        <hr className="horizontal-line" />

        <ButtonLine
          toggleModal={this.toggleModal}
          betOne={this.betOne}
          dealFirstFiveCards={this.dealFirstFiveCards}
          discard={this.discard}
          betAmount={this.state.betAmount}
          bankroll={this.state.bankroll}
          isDeal={this.state.isDeal}
        />
      </React.Fragment>
    );
  }
}

export default App;
