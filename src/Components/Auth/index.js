import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useScoreboard } from "../../context/scoreboard";
import "./index.css";

function Auth() {
  const [password, setPassword] = useState("");
  const { admin, setAdmin } = useScoreboard();
  const navigate = useNavigate();
  const passwordInputRef = useRef(null);

  // Log admin state to console when it changes
  useEffect(() => {
    console.log(admin);
  }, [admin]);
  useEffect(() => {
    passwordInputRef.current.focus();
  });

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickSubmit = (e) => {
    e.preventDefault();
    if (password === "Akhil@7143") {
      setAdmin(true);
      navigate("/"); // Navigate after state update
    } else {
      alert("You are not admin");
      setAdmin(false);
    }
    setPassword(""); // Clear the password field
  };

  return (
    <div className="auth-container">
      <form onSubmit={onClickSubmit}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          value={password}
          onChange={onChangePassword}
          ref={passwordInputRef}
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Auth;
