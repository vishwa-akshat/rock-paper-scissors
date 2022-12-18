import { useState, useEffect } from "react";

import Header from "components/Header";
import GameHand from "components/GameHand";
import RulesButton from "components/RulesButton";

import PaperIcon from "images/icon-paper.svg";
import RockIcon from "images/icon-rock.svg";
import ScissorIcon from "images/icon-scissors.svg";
import TriangleBG from "images/bg-triangle.svg";

import "./style.scss";

const STEP_1 = "step 1";
const STEP_2 = "step 2";
const STEP_3 = "step 3";
const STEP_4 = "step 4";

const Home = () => {
  const [gameStep, setGameStep] = useState(STEP_1);
  const [gameScore, setGameScore] = useState(0);
  const [userClickedHandType, setUserClickedHandType] = useState(null);
  const [randomPickedHandType, setRandomPickedHandType] = useState(null);
  const [isUserWin, setIsUserWin] = useState(null);
  const [isDraw, setIsDraw] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleHandBtnClick = (hand) => {
    setGameStep(STEP_2);
    setUserClickedHandType(hand);

    setTimeout(() => {
      setGameStep(STEP_3);
    }, 1000);

    setTimeout(() => {
      setGameStep(STEP_4);
    }, 2000);
  };

  const handlePlayAgain = () => {
    setGameStep(STEP_1);
    setUserClickedHandType(null);
    setRandomPickedHandType(null);
    setIsUserWin(null);
    setIsDraw(null);
  };

  useEffect(() => {
    if (gameStep === STEP_2) {
      const random = Math.floor(Math.random() * 3);
      const handTypes = ["rock", "paper", "scissor"];
      const housePickedHand = handTypes[random];
      setRandomPickedHandType(housePickedHand);
    }
  }, [gameStep]);

  useEffect(() => {
    if (gameStep === STEP_3) {
      if (userClickedHandType === "rock") {
        if (randomPickedHandType === "rock") {
          setIsDraw(true);
          return;
        }
        if (randomPickedHandType === "scissor") {
          setIsUserWin(true);
          setGameScore(gameScore + 1);
          return;
        }
        setIsUserWin(false);
        return;
      }
      if (userClickedHandType === "paper") {
        if (randomPickedHandType === "paper") {
          setIsDraw(true);
          return;
        }
        if (randomPickedHandType === "rock") {
          setIsUserWin(true);
          setGameScore(gameScore + 1);
          return;
        }
        setIsUserWin(false);
        return;
      }
      if (randomPickedHandType === "scissor") {
        setIsDraw(true);
        return;
      }
      if (randomPickedHandType === "paper") {
        setIsUserWin(true);
        setGameScore(gameScore + 1);
        return;
      }
      setIsUserWin(false);
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameStep]);

  const handleRulesBtnClick = () => {
    setShowModal(true);
  };

  const renderGameStep = () => {
    if (gameStep === STEP_1) {
      return gameStep1;
    }
    if (gameStep === STEP_2 || gameStep === STEP_3) {
      return gameStep2;
    }
    if (gameStep === STEP_4) {
      return gameStep4;
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

  const getHandIcon = (housePickedHand) => {
    if (housePickedHand) {
      if (housePickedHand === "rock") {
        return RockIcon;
      }
      if (housePickedHand === "paper") {
        return PaperIcon;
      }
      return ScissorIcon;
    }
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
        {gameStep !== STEP_3 ? (
          <div className="transparent-block" />
        ) : (
          <GameHand
            size="2x"
            handType={randomPickedHandType}
            icon={getHandIcon(randomPickedHandType)}
          />
        )}
      </div>
    </div>
  );

  const gameStep4 = (
    <div className="game-area_step_3">
      <div className="hand-picked-wrapper">
        <h2 className="heading">You picked</h2>
        <GameHand
          size="2x"
          handType={userClickedHandType}
          icon={getHandIcon()}
          winShadow={!isDraw && gameStep === STEP_4 && isUserWin}
        />
      </div>
      <div className="win_info_wrapper">
        <p className="win-text">
          {isDraw ? "Draw" : isUserWin ? "you won" : "you lose"}
        </p>
        <button onClick={handlePlayAgain} className="play-again-btn">
          play again
        </button>
      </div>
      <div className="hand-picked-wrapper">
        <h2 className="heading">the house picked</h2>
        <GameHand
          size="2x"
          handType={randomPickedHandType}
          icon={getHandIcon(randomPickedHandType)}
          winShadow={!isDraw && gameStep === STEP_4 && !isUserWin}
        />
      </div>
    </div>
  );

  return (
    <div className="home">
      <Header gameScore={gameScore} />
      {renderGameStep()}
      <div className="rule-button-wrapper">
        <RulesButton handleClick={handleRulesBtnClick} />
      </div>
    </div>
  );
};

export default Home;
