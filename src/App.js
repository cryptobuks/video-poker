import React from "react";
import PayTable from "./PayTable.js";
// import Deck from "./deck.js";
import HelpModal from "./helpModal.js";
import CardHelpers from "./helpers/cardHelpers.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deck: {},
      hand: [],
      bankroll: 100,
      showModal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.sortTheHand = this.sortTheHand.bind(this);
    // this.scoreTheHand = this.scoreTheHand.bind(this);
  }

  componentWillMount() {
    <CardHelpers />;
    console.log(this.state.deck);
  }

  clearTheTable() {
    //clear the DOM
  }

  dealFirstFiveCards(prevState) {
    this.setState(prevState => {
      return { hand: prevState.shoe.slice(0, 5) };
    });
  }

  showFirstFiveCards() {
    if (this.state.theShoe[0]) {
    }
  }

  toggleModal(prevState) {
    this.setState({ showModal: !prevState.showModal });
  }

  sortTheHand() {
    return this.state.theHand.slice().sort(function(a, b) {
      if (parseInt(a.value, 10) < parseInt(b.value, 10)) return 1;
      else if (parseInt(a.value, 10) > parseInt(b.value, 10)) return -1;
      else return 0;
    });
  }

  // scoreTheHand(){
  //   if (this.state.theHand)
  // }

  render() {
    return (
      <React.Fragment>
        <PayTable
          myRunningTotal={this.state.myRunningTotal}
          myHand={this.state.myHand}
          handleOpenModal={this.toggleModal}
        />
        <HelpModal
          showModal={this.state.showModal}
          isOpen={this.toggleModal}
          onRequestClose={this.toggleModal}
        />
      </React.Fragment>
    );
  }
}

export default App;

//   render() {
//     return (
//       <div className="App">
//         <Main />
//       </div>
//     );
//   }
// }
