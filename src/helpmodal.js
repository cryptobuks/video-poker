import React from "react";
import Modal from "react-modal";

export default ({ showModal, onRequestClose }) => (
  <Modal
    className="modal"
    appElement={document.getElementById("app")}
    isOpen={showModal}
    // isOpen={showHelpModal}
    ariaHideApp={false}
  >
    <p>
      To play, choose a value between 1 and 5 with the Bet One button. The
      default is 1.Then press "Deal" to deal a hand.You have the opportunity to
      redraw up to five cards one time only. You will receive that many new
      cards to make a final five card poker hand.Winners are paid according to
      the pay table and amount wagered.If you get less than a pair of Jacks, you
      lose.
    </p>
    <button
      type="button"
      className="close-modal-button"
      onClick={onRequestClose}
    >
      Close Modal
    </button>
  </Modal>
);
