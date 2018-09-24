import React from "react";

function betLine(props) {
  return (
    <div>
      <div id="buttons" className="flex-container">
        <button id="help-btn" onClick={props.toggleModal}>
          Help
        </button>
        <button id="bet-one-btn" onClick={props.betOne}>
          Bet One
        </button>
        <span id="bet-amount">
          Bet {props.betAmount} Coin
          {props.betAmount === 1 ? " " : "s"}
        </span>
        <button
          id="draw-btn"
          onClick={
            props.isDeal === true ? props.dealFirstFiveCards : props.discard
          }
        >
          {props.isDeal === true ? "Deal" : "Go"}
        </button>
        <span id="bankroll">{props.bankroll} Coins</span>
      </div>
    </div>
  );
}

export default betLine;
