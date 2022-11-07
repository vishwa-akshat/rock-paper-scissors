import { useState, useEffect } from "react";
import Header from "components/Header";
import GameHand from "components/GameHand";

import PaperIcon from "images/icon-paper.svg";
import RockIcon from "images/icon-rock.svg";
import ScissorIcon from "images/icon-scissors.svg";
import TriangleBG from "images/bg-triangle.svg";

import "./style.scss";

const STEP_1 = "step 1";
const STEP_2 = "step 2";

const Home = () => {
  const [gameStep, setGameStep] = useState(STEP_1);
  const [userClickedHandType, setUserClickedHandType] = useState(null);

  const handleHandBtnClick = (hand) => {
    setGameStep(STEP_2);
    setUserClickedHandType(hand);
  };

  const renderGameStep = () => {
    if (gameStep === STEP_1) {
      return gameStep1;
    }
    if (gameStep === STEP_2) {
      return gameStep2;
    }
    return null;
  };

  const gameStep1 = (
    <div className="game-area">
      <img src={TriangleBG} alt="triangle bg" className="triangle-bg" />
      <div className="game-line-1">
        <button
          onClick={() => handleHandBtnClick("paper")}
          className="game-hand-btn"
        >
          <GameHand handType="paper" icon={PaperIcon} />
        </button>
        <button
          onClick={() => handleHandBtnClick("scissor")}
          className="game-hand-btn"
        >
          <GameHand handType="scissor" icon={ScissorIcon} />
        </button>
      </div>
      <div className="game-line-2">
        <button
          onClick={() => handleHandBtnClick("rock")}
          className="game-hand-btn"
        >
          <GameHand handType="rock" icon={RockIcon} />
        </button>
      </div>
    </div>
  );

  const getHandIcon = () => {
    if (userClickedHandType === "rock") {
      return RockIcon;
    }
    if (userClickedHandType === "paper") {
      return PaperIcon;
    }
    return ScissorIcon;
  };

  const gameStep2 = (
    <div className="game-area_step_2">
      <div className="hand-picked-wrapper">
        <h2 className="heading">You picked</h2>
        <GameHand
          size="2x"
          handType={userClickedHandType}
          icon={getHandIcon()}
        />
      </div>
      <div className="hand-picked-wrapper">
        <h2 className="heading">the house picked</h2>
        <div className="transparent-block" />
      </div>
    </div>
  );

  return (
    <div className="home">
      <Header />
      {renderGameStep()}
    </div>
  );
};

export default Home;
