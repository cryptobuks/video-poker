import React from "react";

function buttonLine(props) {
  return (
    <div>
      <div id="button-line" className="flex-container">
        <button id="help-btn" onClick={props.toggleHelpModal}>
          How to Play
        </button>
        <button id="strategy-btn" onClick={props.toggleStrategyModal}>
          Strategy Tips
        </button>
        <button
          id="bet-one-btn"
          disabled={!props.isDeal}
          className={props.isDeal ? "bet-one-btn" : "bet-one-btn-disabled"}
          onClick={props.betOne}
        >
          Bet One
        </button>
        <span id="bet-amount">
          Bet {props.betAmount} Coin
          {props.betAmount === 1 ? " " : "s"}
        </span>
        <button
          id="draw-btn"
          className={props.isDeal === true ? "draw-btn" : "draw-btn-clicked"}
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

export default buttonLine;
