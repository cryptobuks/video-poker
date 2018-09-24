import React from "react";
import * as cardLogic from "./helpers/cardLogic.js";

function handResult(props) {
  return (
    <div>
      <div>
        <h3>{!!this.state.hand.length && cardLogic.cardLogic(props.hand)}</h3>
      </div>
      <div>
        <p>
          You win {this.state.betAmount}
          coins!
        </p>
      </div>
      <div />
    </div>
  );
}
export default handResult;
