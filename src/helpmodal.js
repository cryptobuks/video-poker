import React from "react";
import Modal from "react-modal";

class HelpModal extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Modal
          className="modal"
          appElement={document.getElementById("app")}
          isOpen={this.props.showHelpModal}
          ariaHideApp={false}
        >
          <p>
            To play, choose a value between 1 and 5 with the Bet One button. The
            default is 1.
          </p>
          <p>Then press "Deal" to deal a hand.</p>{" "}
          <p>
            You have the opportunity to redraw up to five cards one time only.{" "}
          </p>
          <p>
            You will receive that many new cards to make a final five card poker
            hand.
          </p>
          <p>The hand is completed.</p>
          <p>
            Winners are paid according to the pay table and amount wagered.
          </p>{" "}
          <p>If you get less than a pair of Jacks, you lose.</p>
          <button
            type="button"
            className="close-modal-button "
            onClick={this.props.onRequestClose}
          >
            Close Modal
          </button>
        </Modal>
      </React.Fragment>
    );
  }
}
export default HelpModal;
