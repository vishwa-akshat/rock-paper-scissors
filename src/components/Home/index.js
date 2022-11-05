import Header from "components/Header";
import GameHand from "components/GameHand";

import PaperIcon from "images/icon-paper.svg";
import RockIcon from "images/icon-rock.svg";
import ScissorIcon from "images/icon-scissors.svg";

import "./style.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <GameHand handType="paper" icon={PaperIcon} />
      <GameHand handType="rock" icon={RockIcon} />
      <GameHand handType="scissor" icon={ScissorIcon} />
    </div>
  );
};

export default Home;
