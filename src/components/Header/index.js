import "./style.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="title">
        <span className="game-text">Rock</span>
        <span className="game-text">Paper</span>
        <span className="game-text">Scissors</span>
      </div>
      <div className="score-wrapper">
        <div className="title">Score</div>
        <div className="score">12</div>
      </div>
    </div>
  );
};

export default Header;
