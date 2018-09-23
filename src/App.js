import React from "react";
import CasinoName from "./CasinoName.js";
import PayTable from "./PayTable.js";
import HelpModal from "./helpModal.js";
import * as cardHelpers from "./helpers/cardHelpers.js";
import Card from "./card.js";
import CardLogic from "./cardlogic.js";
import BetLine from "./BetLine.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deck: [],
      hand: [],
      betAmount: 1,
      bankroll: 100,
      showModal: false,
      show5Cards: false,
      handResult: ""
    };

    this.showFirstFiveCards = this.showFirstFiveCards.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.betOne = this.betOne.bind(this);
  }

  componentDidMount() {
    let deck = cardHelpers.generateDeck();
    cardHelpers.shuffleDeck(deck);
    this.setState({ deck: deck });
  }

  // dealFirstFiveCards() {
  //   this.setState({ hand: this.state.deck.slice(0, 5) }, () =>
  //     console.log("this.state.hand=", this.setState.hand)
  //   );
  //   this.sortTheHand();
  // }

  // sortTheHand() {
  //   let hand = this.state.hand;
  //   cardHelpers.handSorter(hand);
  //   this.setState({ hand: hand }, () =>
  //     console.log("this.state.hand=", this.setState.hand)
  //   );
  // }

  // above this

  // clearTheTable() {
  //   this.setState((hand: ));
  // }

  showFirstFiveCards() {
    let hand = this.state.deck.slice(0, 5);
    cardHelpers.handSorter(hand);
    // console.log(hand);
    let deckLength = this.state.deck.length;
    let deck = this.state.deck.slice(5, deckLength);
    this.setState({
      deck,
      hand
    });
  }

  // this.setState(prevState => {
  //   return (
  //     { hand: prevState.deck.slice(0, 5) },
  //     () => console.log("this.state.hand=", this.setState.hand)
  //   );
  // });

  toggleModal(prevState) {
    this.setState({ showModal: !this.state.showModal });
    // this.setState({ showModal: !prevState.showModal });
  }

  betOne() {
    this.state.betAmount < 5
      ? this.setState({ betAmount: this.state.betAmount + 1 })
      : this.setState({ betAmount: 1 });
    this.setState({ bankroll: this.state.bankroll - 1 });
  }

  discard() {}

  render() {
    return (
      <React.Fragment>
        <CasinoName />
        <div className="horizontal-line" />
        <div id="top" className="flex-container">
          <div>
            <PayTable betAmount={this.state.betAmount} />
          </div>
          <div>
            {this.state.hand.length === 5 ? (
              <CardLogic hand={this.state.hand} />
            ) : null}
          </div>
        </div>
        <div className="horizontal-line" />
        <HelpModal
          showModal={this.state.showModal}
          isOpen={this.toggleModal}
          onRequestClose={this.toggleModal}
        />
        <div id="theHand" className="flex-contianer">
          {this.state.hand.map((card, cardIndex) => (
            <Card key={cardIndex} card={card} />
          ))}
        </div>
        <div className="horizontal-line" />
        <BetLine
          toggleModal={this.toggleModal}
          betOne={this.betOne}
          showFirstFiveCards={this.showFirstFiveCards}
          betAmount={this.state.betAmount}
          bankroll={this.state.bankroll}
        />
      </React.Fragment>
    );
  }
}

export default App;
