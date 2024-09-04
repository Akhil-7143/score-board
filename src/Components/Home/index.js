import { Link } from "react-router-dom";
import Overs from "../Overs";
import { useScoreboard } from "../../context/scoreboard";
import { useCallback, useEffect, useState } from "react";
import "./index.css";

function Home() {
  const { score } = useScoreboard();
  const { wickets } = useScoreboard();
  const { overCommentry, setOverCommentry } = useScoreboard();
  const { overs, setOvers } = useScoreboard();
  const { target } = useScoreboard(); // access the score and wickets from taret

  console.log(target);

  //use state
  const [countBalls, setCountBalls] = useState(0);

  const countTheBalls = useCallback(() => {
    const validBalls = overCommentry.filter((ball) => ball !== "WD");
    setCountBalls(validBalls.length); // Changed from [validBalls.length] to validBalls.length

    if (validBalls.length === 6) {
      console.log("over", validBalls.length);
      setOvers(overs + 1);
      setCountBalls(0);
      setOverCommentry([]);
    }
  }, [overCommentry, overs, setOvers, setOverCommentry]); // Add all dependencies that are used within countTheBalls

  useEffect(() => {
    countTheBalls();
  }, [overCommentry, countTheBalls]);

  console.log("score", score);

  return (
    <div className="home-container">
      <nav>
        <h1>Score Board</h1>
        <Link to="/auth-admin">
          <button type="button" className="admin-btn">
            Admin
          </button>
        </Link>
      </nav>

      <div className="target-team">
        <h1>Target: {`${target.score} / ${target.wickets}`}</h1>
        <h1>{`A Team : ${score} / ${wickets}`}</h1>
        <h1>{`Overs: ${overs}:${countBalls}`}</h1>
        <ul className="overs-list">
          {overCommentry.map((ball, index) => (
            <li className="balls-list" key={index}>
              {ball}
            </li>
          ))}
        </ul>
        <Overs />
      </div>
    </div>
  );
}

export default Home;
