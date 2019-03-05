import React from "react";
import CasinoName from "./CasinoName.js";
import PayTable from "./PayTable.js";
import HelpModal from "./HelpModal.js";
import StrategyModal from "./StrategyModal.js";
import { generateDeck, shuffleDeck, sortHand } from "./helpers/cardHelpers.js";
import cardLogic from "./helpers/cardLogic.js";
import ButtonLine from "./ButtonLine.js";
import CardContainer from "./CardContainer.js";
// import ResultBox from "./ResultBox";

class App extends React.Component {
  state = {
    deck: [],
    hand: [],
    betAmount: 1,
    bankroll: 100,
    // showHelpModal: false,
    // showStrategyModal: false,
    showModal: false,
    isDeal: true,
    winAmount: 0
  };

  betOne = () => {
    this.setState(prevState => {
      const betAmount = prevState.betAmount < 5 ? prevState.betAmount + 1 : 1;
      return { betAmount };
    });
  };

  initialDeal = () => {
    const newDeck = shuffleDeck(generateDeck());
    this.dealCards(5, [], newDeck);
  };

  discardToggle = discardCard => {
    const hand = this.state.hand.map(card => {
      if (card === discardCard) {
        return { ...card, discard: !card.discard };
      } else {
        return card;
      }
    });
    this.setState({ hand });
  };

  dealCards = (count, prevHand, prevDeck) => {
    const newCards = prevDeck.slice(0, count);
    const deck = prevDeck.slice(count, prevDeck.length);
    const hand = sortHand([...newCards, ...prevHand]);
    this.setState(prevState => ({
      hand,
      deck,
      isDeal: !prevState.isDeal
    }));
  };

  discard = () => {
    const { deck, hand } = this.state;
    let newHand = hand.filter(card => !card.discard);
    let cardsNeeded = 5 - newHand.length;
    this.dealCards(cardsNeeded, newHand, deck);
  };

  // toggleModal(prevState) {
  //   this.setState(prevState => {
  //     showModal: !prevState.showModal;
  //   });
  // }

  render() {
    const { betAmount, hand, bankroll, isDeal } = this.state;
    // const {showModal} = this.state;
    const showResult = !!hand.length;
    return (
      <React.Fragment>
        <CasinoName />
        <hr className="horizontal-line" />
        <div id="top" className="flex-container">
          <PayTable betAmount={betAmount} />
          {/* <ResultBox betAmount={betAmount} bankroll={bankroll} /> */}
          {showResult && <div id="hand-result">{cardLogic(hand)}</div>}
          <hr className="horizontal-line" />
          <HelpModal
            showHelpModal={this.state.showHelpModal}
            showModal={this.state.showModal}
            isOpen={this.toggleModal}
            onRequestClose={this.toggleModal}
          />
          <StrategyModal
            showStrategyModal={this.state.showStrategyModal}
            isOpen={this.toggleModal}
            onRequestClose={this.toggleModal}
          />
          <CardContainer hand={hand} discardToggle={this.discardToggle} />
        </div>
        <hr className="horizontal-line" />
        <ButtonLine
          toggleModal={this.toggleModal}
          betOne={this.betOne}
          initialDeal={this.initialDeal}
          discard={this.discard}
          betAmount={betAmount}
          bankroll={bankroll}
          isDeal={isDeal}
        />
      </React.Fragment>
    );
  }
}

export default App;
