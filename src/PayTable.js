import React from "react";

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

class PayTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div id="payTable" className="flex-container">
          <table id="tableOne">
            <tbody>
              <tr>
                <td>Hand</td>
              </tr>
              <tr>
                <td>Royal Flush</td>
              </tr>
              <tr>
                <td>Straight Flush</td>
              </tr>
              <tr>
                <td>4 of a Kind</td>
              </tr>
              <tr>
                <td>Full House</td>
              </tr>
              <tr>
                <td>Flush</td>
              </tr>
              <tr>
                <td>Straight</td>
              </tr>
              <tr>
                <td>Three of a Kind</td>
              </tr>
              <tr>
                <td>Two Pair</td>
              </tr>
              <tr>
                <td>One Pair - Jacks or Better</td>
              </tr>
            </tbody>
          </table>
          <table
            id="tableTwo"
            className={this.props.betAmount === 1 ? "selected" : "notSelected"}
          >
            <tbody>
              <tr>
                <td>1 Coin</td>
              </tr>
              <tr>
                <td>{payTable.royalFlush * 1}</td>
              </tr>
              <tr>
                <td>{payTable.straightFlush * 1}</td>
              </tr>
              <tr>
                <td>{payTable.fourOfAKind * 1}</td>
              </tr>
              <tr>
                <td>{payTable.fullHouse * 1}</td>
              </tr>
              <tr>
                <td>{payTable.flush * 1}</td>
              </tr>
              <tr>
                <td>{payTable.straight * 1}</td>
              </tr>
              <tr>
                <td>{payTable.threeOfAKind * 1}</td>
              </tr>
              <tr>
                <td>{payTable.twoPair * 1}</td>
              </tr>
              <tr>
                <td>{payTable.onePair * 1}</td>
              </tr>
            </tbody>
          </table>
          <table
            id="tableThree"
            className={this.props.betAmount === 2 ? "selected" : "notSelected"}
          >
            <tbody>
              <tr>
                <td>2 Coins</td>
              </tr>
              <tr>
                <td>{payTable.royalFlush * 2}</td>
              </tr>
              <tr>
                <td>{payTable.straightFlush * 2}</td>
              </tr>
              <tr>
                <td>{payTable.fourOfAKind * 2}</td>
              </tr>
              <tr>
                <td>{payTable.fullHouse * 2}</td>
              </tr>
              <tr>
                <td>{payTable.flush * 2}</td>
              </tr>
              <tr>
                <td>{payTable.straight * 2}</td>
              </tr>
              <tr>
                <td>{payTable.threeOfAKind * 2}</td>
              </tr>
              <tr>
                <td>{payTable.twoPair * 2}</td>
              </tr>
              <tr>
                <td>{payTable.onePair * 2}</td>
              </tr>
            </tbody>
          </table>
          <table
            id="tableFour"
            className={this.props.betAmount === 3 ? "selected" : "notSelected"}
          >
            <tbody>
              <tr>
                <td>3 Coins</td>
              </tr>
              <tr>
                <td>{payTable.royalFlush * 3}</td>
              </tr>
              <tr>
                <td>{payTable.straightFlush * 3}</td>
              </tr>
              <tr>
                <td>{payTable.fourOfAKind * 3}</td>
              </tr>
              <tr>
                <td>{payTable.fullHouse * 3}</td>
              </tr>
              <tr>
                <td>{payTable.flush * 3}</td>
              </tr>
              <tr>
                <td>{payTable.straight * 3}</td>
              </tr>
              <tr>
                <td>{payTable.threeOfAKind * 3}</td>
              </tr>
              <tr>
                <td>{payTable.twoPair * 3}</td>
              </tr>
              <tr>
                <td>{payTable.onePair * 3}</td>
              </tr>
            </tbody>
          </table>
          <table
            id="tableFive"
            className={this.props.betAmount === 4 ? "selected" : "notSelected"}
          >
            <tbody>
              <tr>
                <td>4 Coins</td>
              </tr>
              <tr>
                <td>{payTable.royalFlush * 4}</td>
              </tr>
              <tr>
                <td>{payTable.straightFlush * 4}</td>
              </tr>
              <tr>
                <td>{payTable.fourOfAKind * 4}</td>
              </tr>
              <tr>
                <td>{payTable.fullHouse * 4}</td>
              </tr>
              <tr>
                <td>{payTable.flush * 4}</td>
              </tr>
              <tr>
                <td>{payTable.straight * 4}</td>
              </tr>
              <tr>
                <td>{payTable.threeOfAKind * 4}</td>
              </tr>
              <tr>
                <td>{payTable.twoPair * 4}</td>
              </tr>
              <tr>
                <td>{payTable.onePair * 4}</td>
              </tr>
            </tbody>
          </table>
          <table
            id="tableSix"
            className={this.props.betAmount === 5 ? "selected" : "notSelected"}
          >
            <tbody>
              <tr>
                <td>5 Coins</td>
              </tr>
              <tr>
                <td>{payTable.royalFlush * 5}</td>
              </tr>
              <tr>
                <td>{payTable.straightFlush * 5}</td>
              </tr>
              <tr>
                <td>{payTable.fourOfAKind * 5}</td>
              </tr>
              <tr>
                <td>{payTable.fullHouse * 5}</td>
              </tr>
              <tr>
                <td>{payTable.flush * 5}</td>
              </tr>
              <tr>
                <td>{payTable.straight * 5}</td>
              </tr>
              <tr>
                <td>{payTable.threeOfAKind * 5}</td>
              </tr>
              <tr>
                <td>{payTable.twoPair * 5}</td>
              </tr>
              <tr>
                <td>{payTable.onePair * 5}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default PayTable;
