import React from "react";
import Modal from "react-modal";

class HelpModal extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Modal
          className="modal"
          appElement={document.getElementById("app")}
          isOpen={this.props.showModal}
          ariaHideApp={false}
        >
          <p>To play, choose an amount and press "Deal"</p>
          <button
            type="button"
            id="closeModalButton"
            onClick={this.props.toggleModal}
          >
            Close Modal
          </button>
        </Modal>
      </React.Fragment>
    );
  }
}
export default HelpModal;
