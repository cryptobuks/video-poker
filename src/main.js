import React from "react";
import TheTable from "./thetable.js";
import theDeck from "./thedeck.js";
import HelpModal from "./helpmodal.js";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theShoe: [],
      theDiscard: [],
      myRunningTotal: 1000,
      myHand: [],
      cardOne: "",
      cardTwo: "",
      cardThree: "",
      cardFour: "",
      cardFive: "",
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.sortTheHand = this.sortTheHand.bind(this);
    this.scoreTheHand = this.scoreTheHand.bind(this);
  }

  clearTheTable() {
    this.setState({ cardOne: "" });
    this.setState({ cardTwo: "" });
    this.setState({ cardThree: "" });
    this.setState({ cardFour: "" });
    this.setState({ cardFive: "" });
  }

  dealFirstFiveCards() {
    this.setState({ cardOne: this.state.theShoe[0] });
    this.setState({ cardTwo: this.state.theShoe[1] });
    this.setState({ cardThree: this.state.theShoe[2] });
    this.setState({ cardFour: this.state.theShoe[3] });
    this.setState({ cardFive: this.state.theShoe[4] });
  }

  // suitChanger() {
  //   if (suit === "Spades") {
  //     return " &spades;";
  //   } else if (suit === "Hearts") {
  //     return "&hearts;";
  //   } else if (suit === "Clubs") {
  //     return "&clubs;";
  //   } else if (suit === "Hearts") {
  //     return "&diams;";
  //   }
  // }

  showFirstFourCards() {
    if (this.state.theShoe[0]) {
    }
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  sortTheHand() {
    return this.state.theHand.slice().sort(function(a, b) {
      if (parseInt(a.value, 10) < parseInt(b.value, 10)) return 1;
      else if (parseInt(a.value, 10) > parseInt(b.value, 10)) return -1;
      else return 0;
    });
  }

  scoreTheHand(){
    if (this.state.theHand.)
  }

  render() {
    return (
      <React.Fragment>
        <TheTable
          myRunningTotal={this.state.myRunningTotal}
          myHand={this.state.myHand}
          handleOpenModal={this.handleOpenModal}
        />
        <HelpModal
          showModal={this.state.showModal}
          isOpen={this.handleOpenModal}
          onRequestClose={this.handleCloseModal}
        />
      </React.Fragment>
    );
  }
}

export default Main;
