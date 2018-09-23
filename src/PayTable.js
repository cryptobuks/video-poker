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
  jacksOrBetter: 1
};

class PayTable extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="decoration">
          <h1 className="centered">
            <span className="spades">&spades; </span>
            <span className="hearts">&hearts; </span>
            <span className="clubs">&clubs; </span>
            <span className="diamonds">&diams; </span>
            <span className="yellow">Casino sweetgreen </span>
            <span className="spades">&spades; </span>
            <span className="hearts">&hearts; </span>
            <span className="clubs">&clubs; </span>
            <span className="diamonds">&diams; </span>
          </h1>
        </div>
        <div className="horizontal-line" />

        <div id="payTable">
          <table>
            {/* <tr>
              <th>Hand</th>
              <th>One Coin</th>
              <th>Two Coin</th>
              <th>Three Coin</th>
              <th>Max</th>
            </tr> */}
            <tbody>
              <tr>
                <td>Royal Flush</td>
                <td>{payTable.royalFlush * 1}</td>
                <td>{payTable.royalFlush * 2}</td>
                <td>{payTable.royalFlush * 3}</td>
                <td>{payTable.royalFlush * 4}</td>
                <td>{payTable.royalFlush * 5}</td>
              </tr>
              <tr>
                <td>Straight Flush</td>
                <td>{payTable.straightFlush * 1}</td>
                <td>{payTable.straightFlush * 2}</td>
                <td>{payTable.straightFlush * 3}</td>
                <td>{payTable.straightFlush * 4}</td>
                <td>{payTable.straightFlush * 5}</td>
              </tr>
              <tr>
                <td>4 of a Kind</td>
                <td>{payTable.fourOfAKind * 1}</td>
                <td>{payTable.fourOfAKind * 2}</td>
                <td>{payTable.fourOfAKind * 3}</td>
                <td>{payTable.fourOfAKind * 4}</td>
                <td>{payTable.fourOfAKind * 5}</td>
              </tr>
              <tr>
                <td>Full House</td>
                <td>{payTable.fullHouse * 1}</td>
                <td>{payTable.fullHouse * 2}</td>
                <td>{payTable.fullHouse * 3}</td>
                <td>{payTable.fullHouse * 4}</td>
                <td>{payTable.fullHouse * 5}</td>
              </tr>
              <tr>
                <td>Flush</td>
                <td>{payTable.flush * 1}</td>
                <td>{payTable.flush * 2}</td>
                <td>{payTable.flush * 3}</td>
                <td>{payTable.flush * 4}</td>
                <td>{payTable.flush * 5}</td>
              </tr>
              <tr>
                <td>Straight</td>
                <td>{payTable.straight * 1}</td>
                <td>{payTable.straight * 2}</td>
                <td>{payTable.straight * 3}</td>
                <td>{payTable.straight * 4}</td>
                <td>{payTable.straight * 5}</td>
              </tr>
              <tr>
                <td>Three of a Kind</td>
                <td>{payTable.threeOfAKind * 1}</td>
                <td>{payTable.threeOfAKind * 2}</td>
                <td>{payTable.threeOfAKind * 3}</td>
                <td>{payTable.threeOfAKind * 4}</td>
                <td>{payTable.threeOfAKind * 5}</td>
              </tr>
              <tr>
                <td>Two Pair</td>
                <td>{payTable.twoPair * 1}</td>
                <td>{payTable.twoPair * 2}</td>
                <td>{payTable.twoPair * 3}</td>
                <td>{payTable.twoPair * 4}</td>
                <td>{payTable.twoPair * 5}</td>
              </tr>
              <tr>
                <td>Jacks or Better</td>
                <td>{payTable.jacksOrBetter * 1}</td>
                <td>{payTable.jacksOrBetter * 2}</td>
                <td>{payTable.jacksOrBetter * 3}</td>
                <td>{payTable.jacksOrBetter * 4}</td>
                <td>{payTable.jacksOrBetter * 5}</td>
              </tr>
              <tr>
                <td>All else</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="horizontal-line" />
      </React.Fragment>
    );
  }
}

export default PayTable;
