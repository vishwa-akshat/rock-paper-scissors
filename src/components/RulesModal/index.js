import closeIcon from "images/icon-close.svg";
import rulesImage from "images/image-rules.svg";

import "./style.scss";

function RulesModal({ showModal, handleModalClose }) {
  if (!showModal) {
    return null;
  }

  return (
    <div className="rules-modal">
      <div className="modal-content">
        <div className="header">
          <h2 className="heading">Rules</h2>
          <button onClick={handleModalClose} className="close-icon-wrapper">
            <img className="close-icon" src={closeIcon} alt="close modal" />
          </button>
        </div>
        <div className="rules-wrapper">
          <img src={rulesImage} alt="game rules" className="game-rules-img" />
        </div>
        <button onClick={handleModalClose} className="close-icon-mob">
          <img className="close-icon" src={closeIcon} alt="close modal" />
        </button>
      </div>
    </div>
  );
}

export default RulesModal;
