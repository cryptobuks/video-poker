import React from "react";

class BetLine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="betLine">
        <span>Bet</span>
        <span>{this.props.betAmount}</span>
        <span>Credits</span>
        <span />
      </div>
    );
  }
}
export default BetLine;
