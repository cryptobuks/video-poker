import React from "react";

class TheTable extends React.Component {
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
                <td>250</td>
                <td>500</td>
                <td>750</td>
                <td>1000</td>
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
                <td>45</td>
                <td>90</td>
                <td>135</td>
                <td>180</td>
              </tr>
              <tr>
                <td>Flush</td>
                <td>30</td>
                <td>60</td>
                <td>90</td>
                <td>120</td>
              </tr>
              <tr>
                <td>Straight</td>
                <td>20</td>
                <td>40</td>
                <td>60</td>
                <td>80</td>
              </tr>
              <tr>
                <td>Three of a Kind</td>
                <td>15</td>
                <td>30</td>
                <td>45</td>
                <td>60</td>
              </tr>
              <tr>
                <td>Two Pair</td>
                <td>10</td>
                <td>20</td>
                <td>30</td>
                <td>40</td>
              </tr>
              <tr>
                <td>Jacks or Better</td>
                <td>10</td>
                <td>20</td>
                <td>30</td>
                <td>40</td>
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

export default TheTable;
