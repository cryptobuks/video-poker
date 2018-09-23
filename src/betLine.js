import React from "react";

function betLine(props) {
  return (
    <div>
      <div id="buttons" className="flex-container">
        <button id="helpBtn" onClick={props.toggleModal}>
          Help
        </button>
        <button id="betOneBtn" onClick={props.betOne}>
          Bet One
        </button>
        <span id="betAmount">
          Bet {props.betAmount} Coin
          {props.betAmount == 1 ? " " : "s"}
        </span>
        <button id="drawBtn" onClick={props.showFirstFiveCards}>
          Draw
        </button>
        <span id="bankroll">{props.bankroll} Coins</span>
      </div>
      {/* <br />
      <div id="betLine">
      </div> */}
    </div>
  );
}

export default betLine;
