import React from "react";
import PayTable from "./PayTable.js";
import HelpModal from "./helpModal.js";
import * as cardHelpers from "./helpers/cardHelpers.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deck: [],
      hand: [],
      betAmount: 1,
      bankroll: 100,
      showModal: false,
      show5Cards: false
    };

    // this.clearTheTable = this.clearTheTable.bind(this);
    // this.dealFirstFiveCards = this.dealFirstFiveCards.bind(this);
    // this.sortTheHand = this.sortTheHand.bind(this);
    this.showFirstFiveCards = this.showFirstFiveCards.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    // this.scoreTheHand = this.scoreTheHand.bind(this);
  }

  componentDidMount() {
    let deck = cardHelpers.generateDeck();
    cardHelpers.shuffleDeck(deck);
    this.setState({ deck: deck });

    // this.setState({ deck: deck }, () =>
    //   console.log("this.state.deck=", this.state.deck)
    // );
    // this.dealFirstFiveCards();
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
    console.log(hand);
    let deckLength = this.state.deck.length;
    let deck = this.state.deck.slice(5, deckLength);
    this.setState({
      deck,
      hand
    });
    // if (this.state.hand) {
    // this.setState({ show5Cards: true });
    // }
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

  render() {
    console.log(
      "this.state.deck=",
      this.state.deck,
      "this.state.hand=",
      this.state.hand
      // "this.state.hand[0].suit=",
      // this.state.hand[0].suit
    );
    return (
      <React.Fragment>
        <PayTable
        // bankroll={this.state.bankroll}
        // hand={this.state.hand}
        // handleOpenModal={this.toggleModal}
        // dealFirstFiveCards={this.dealFirstFiveCards}
        />
        <HelpModal
          showModal={this.state.showModal}
          isOpen={this.toggleModal}
          onRequestClose={this.toggleModal}
        />
        {this.state.hand[0] ? (
          <div className="flex-container">
            <div id="cardOne" className="card">
              <h3>
                <span className={this.state.hand[0].suit}>
                  {this.state.hand[0].icon}
                </span>
              </h3>
              <h3>
                <span className={this.state.hand[0].suit}>
                  {this.state.hand[0].image}
                </span>
              </h3>
            </div>
            <div id="cardTwo" className="card">
              <h3>
                <span
                  className={
                    this.state.hand[1].suit ? this.state.hand[1].suit : ""
                  }
                >
                  {this.state.hand[1].icon}
                </span>
              </h3>
              <h3>
                <span
                  className={
                    this.state.hand[1].suit ? this.state.hand[1].suit : ""
                  }
                >
                  {this.state.hand[1].image ? this.state.hand[1].image : ""}
                </span>
              </h3>
            </div>
            <div id="cardThree" className="card">
              <h3>
                <span
                  className={
                    this.state.hand[2].suit ? this.state.hand[2].suit : ""
                  }
                >
                  {this.state.hand[2].icon}
                </span>
              </h3>
              <h3>
                <span
                  className={
                    this.state.hand[2].suit ? this.state.hand[2].suit : ""
                  }
                >
                  {this.state.hand[2].image ? this.state.hand[2].image : ""}
                </span>
              </h3>
            </div>
            <div id="cardFour" className="card">
              <h3>
                <span
                  className={
                    this.state.hand[3].suit ? this.state.hand[3].suit : ""
                  }
                >
                  {this.state.hand[3].icon}
                </span>
              </h3>
              <h3>
                <span
                  className={
                    this.state.hand[3].suit ? this.state.hand[3].suit : ""
                  }
                >
                  {this.state.hand[3].image ? this.state.hand[3].image : ""}
                </span>
              </h3>
            </div>
            <div id="cardFive" className="card">
              <h3>
                <span
                  className={
                    this.state.hand[4].suit ? this.state.hand[4].suit : ""
                  }
                >
                  {this.state.hand[4].icon}
                </span>
              </h3>
              <h3>
                <span
                  className={
                    this.state.hand[4].suit ? this.state.hand[4].suit : ""
                  }
                >
                  {this.state.hand[4].image ? this.state.hand[4].image : ""}
                </span>
              </h3>
            </div>
          </div>
        ) : null}
        <div id="discardButtons">
          <button
            type="button"
            id="btn1"
            className="discardBtn"
            onClick={this.discard}
          >
            Discard
          </button>
          <button
            type="button"
            id="btn2"
            className="discardBtn"
            onClick={this.discard}
          >
            Discard
          </button>
          <button
            type="button"
            id="btn3"
            className="discardBtn"
            onClick={this.discard}
          >
            Discard
          </button>
          <button
            type="button"
            id="btn4"
            className="discardBtn"
            onClick={this.discard}
          >
            Discard
          </button>
          <button
            type="button"
            id="btn5"
            className="discardBtn"
            onClick={this.discard}
          >
            Discard
          </button>
        </div>
        <div className="horizontal-line" />
        <div id="credits">
          <span id="amount">1000 </span>
          Credits
        </div>
        <br />
        <div id="buttons">
          <button id="help" onClick={this.toggleModal}>
            Help
          </button>
          <button id="betOne">Bet One</button>
          <button id="draw" onClick={this.showFirstFiveCards}>
            Draw
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
