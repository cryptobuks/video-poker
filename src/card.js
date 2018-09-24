import React from "react";

function Card(props) {
  return (
    <div className="card">
      <h1>
        <span className={props.card.suit}>{props.card.icon}</span>
      </h1>
      <h1>
        <span className={props.card.suit}>{props.card.image}</span>
      </h1>
      <br />
      {/* <input
        type="checkbox"
        checked={props.card.isChecked}
        onChange={!props.card.isChecked}
      /> */}
      <button
        type="button"
        className="discard-btn"
        onClick={() => props.discardToggle(props.card.isChecked)}
        // onClick={() =>props.discard((props.card.isChecked = !props.card.isChecked))
      >
        Discard
      </button>
    </div>
  );
}

export default Card;
