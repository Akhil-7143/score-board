import { useScoreboard } from "../../context/scoreboard";
import "./index.css";

function Admin() {
  const { score, setScore } = useScoreboard();
  const { wickets, setWickets } = useScoreboard();
  const { overCommentry, setOverCommentry } = useScoreboard();
  const { setTarget } = useScoreboard();

  const handleButtonClick = (value) => {
    setOverCommentry([...overCommentry, value]);
  };

  const handleButtonClickClear = (value) => {
    const lastBallCleared = [...overCommentry];
    const lastValue = lastBallCleared.pop();
    //  CLEAR THE VALUE IN SCOREBOARD
    switch (lastValue) {
      case "1":
        setScore(score - 1);
        break;
      case "2":
        setScore(score - 2);
        break;
      case "3":
        setScore(score - 3);
        break;
      case "4":
        setScore(score - 4);
        break;
      case "6":
        setScore(score - 6);
        break;
      case "WD":
        setScore(score - 1);
        break;
      case "W":
        setWickets(wickets - 1);
        break;
      default:
        break;
    }
    setOverCommentry(lastBallCleared);
  };

  const handleButtonClickTarget = () => {
    setTarget({ score, wickets });
    setScore(0);
    setWickets(0);
  };

  return (
    <div className="Admin-container">
      <ul className="overs">
        <li className="score-list">
          <button
            className="score-btn"
            onClick={() => {
              setScore(score + 0);
              handleButtonClick("*");
            }}
          >
            *
          </button>
        </li>
        <li className="score-list">
          <button
            className="score-btn"
            onClick={() => {
              setScore(score + 1);
              handleButtonClick("1");
            }}
          >
            1
          </button>
        </li>
        <li className="score-list">
          <button
            className="score-btn"
            onClick={() => {
              setScore(score + 2);
              handleButtonClick("2");
            }}
          >
            2
          </button>
        </li>
        <li className="score-list">
          <button
            className="score-btn"
            onClick={() => {
              setScore(score + 3);
              handleButtonClick("3");
            }}
          >
            3
          </button>
        </li>
        <li className="score-list">
          <button
            className="score-btn"
            onClick={() => {
              setScore(score + 4);
              handleButtonClick("4");
            }}
          >
            4
          </button>
        </li>
        <li className="score-list">
          <button
            className="score-btn"
            onClick={() => {
              setScore(score + 6);
              handleButtonClick("6");
            }}
          >
            6
          </button>
        </li>
        <li className="score-list">
          <button
            className="score-btn"
            onClick={() => {
              setWickets(wickets + 1);
              handleButtonClick("W");
            }}
          >
            W
          </button>
        </li>
        <li className="score-list">
          <button
            className="score-btn"
            onClick={() => {
              setScore(score + 1);
              handleButtonClick("WD");
            }}
          >
            WD
          </button>
        </li>
        <li className="score-list">
          <button
            className="score-btn"
            onClick={() => {
              handleButtonClickClear("clear");
            }}
          >
            Clear
          </button>
        </li>
        <li className="score-list">
          <button
            className="score-btn"
            onClick={() => {
              handleButtonClickTarget();
            }}
          >
            S T
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Admin;
