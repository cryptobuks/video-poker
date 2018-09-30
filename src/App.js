import React from "react";
import CasinoName from "./CasinoName.js";
import PayTable from "./PayTable.js";
import HelpModal from "./HelpModal.js";
import StrategyModal from "./StrategyModal.js";
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
      showHelpModal: false,
      showStrategyModal: false,
      isDeal: true,
      pokerResult: "",
      winAmount: ""
    };

    this.betOne = this.betOne.bind(this);
    this.dealFirstFiveCards = this.dealFirstFiveCards.bind(this);
    this.discardToggle = this.discardToggle.bind(this);
    this.discard = this.discard.bind(this);
    this.toggleHelpModal = this.toggleHelpModal.bind(this);
    this.toggleStrategyModal = this.toggleStrategyModal.bind(this);
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
    this.setState({ hand, pokerResult: "", winAmount: "" });
  }

  discard() {
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
      hand: newHand,
      pokerResult: cardLogic.cardLogic(this.state.hand)
    });
  }

  toggleHelpModal(prevState) {
    this.setState({ showHelpModal: !this.state.showHelpModal });
  }

  toggleStrategyModal(prevState) {
    this.setState({ showStrategyModal: !this.state.showStrategyModal });
  }

  render() {
    console.log("this.state.isDeal=", this.state.isDeal);
    return (
      <React.Fragment>
        <CasinoName />
        <hr className="horizontal-line" />
        <div id="main" className="flex-container">
          <div id="pay-table">
            <PayTable betAmount={this.state.betAmount} />
          </div>
          <div id="hand-result">
            {!!this.state.hand.length && cardLogic.cardLogic(this.state.hand)}
            {/* <HandResult 
          betAmount={this.state.betAmount}
          pokerResult={this.state.pokerResult}
          isDeal={this.state.isDeal}
          bankroll={this.state.bankroll}
          
          /> */}
          </div>
          <hr className="horizontal-line" />
          <HelpModal
            showHelpModal={this.state.showHelpModal}
            isOpen={this.toggleHelpModal}
            onRequestClose={this.toggleHelpModal}
          />
          <StrategyModal
            showStrategyModal={this.state.showStrategyModal}
            isOpen={this.toggleStrategyModal}
            onRequestClose={this.toggleStrategyModal}
          />
          <div id="the-hand" className="flex-contianer">
            {this.state.hand.map((card, cardIndex) => (
              <Card
                key={cardIndex}
                card={card}
                discardToggle={() => this.discardToggle(cardIndex)}
                isDeal={this.state.isDeal}
              />
            ))}
          </div>
        </div>
        <hr className="horizontal-line" />

        <ButtonLine
          toggleHelpModal={this.toggleHelpModal}
          toggleStrategyModal={this.toggleStrategyModal}
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
