import React from "react";

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
                <td>800</td>
                <td>1600</td>
                <td>2400</td>
                <td>3200</td>
              </tr>
              <tr>
                <td>Straight Flush</td>
                <td>50</td>
                <td>100</td>
                <td>150</td>
                <td>200</td>
              </tr>
              <tr>
                <td>4 Aces</td>
                <td>160</td>
                <td>320</td>
                <td>480</td>
                <td>640</td>
              </tr>
              <tr>
                <td>Any 4 of a Kind</td>
                <td>25</td>
                <td>50</td>
                <td>75</td>
                <td>100</td>
              </tr>
              <tr>
                <td>Full House</td>
                <td>9</td>
                <td>18</td>
                <td>27</td>
                <td>36</td>
              </tr>
              <tr>
                <td>Flush</td>
                <td>6</td>
                <td>12</td>
                <td>18</td>
                <td>24</td>
              </tr>
              <tr>
                <td>Straight</td>
                <td>4</td>
                <td>8</td>
                <td>12</td>
                <td>16</td>
              </tr>
              <tr>
                <td>Three of a Kind</td>
                <td>3</td>
                <td>6</td>
                <td>9</td>
                <td>12</td>
              </tr>
              <tr>
                <td>Two Pair</td>
                <td>2</td>
                <td>4</td>
                <td>6</td>
                <td>8</td>
              </tr>
              <tr>
                <td>Jacks or Better</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
              </tr>
              <tr>
                <td>All else</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="horizontal-line" />
        <div id="theHand" className="flex-container">
          Cards here
          <div id="cardOne" className="card">
            <span className="suit" />
            <span className="image" />
          </div>
          <div id="cardTwo" className="card">
            <span className="suit" />
            <span className="image" />
          </div>
          <div id="cardThree" className="card">
            <span className="suit" />
            <span className="image" />
          </div>
          <div id="cardFour" className="card">
            <span className="suit" />
            <span className="image" />
          </div>
          <div id="cardFive" className="card">
            <span className="suit" />
            <span className="image" />
          </div>
        </div>
        <div id="discardButtons" />
        <div className="horizontal-line" />
        <div id="credits">1000 Credits</div>
        <br />
        <div id="buttons">
          <button id="help" onClick={this.props.handleOpenModal}>
            Help
          </button>
          <button id="betOne">Bet One</button>
          <button id="draw">Draw</button>
        </div>
      </React.Fragment>
    );
  }
}

export default PayTable;
