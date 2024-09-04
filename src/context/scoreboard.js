import React, { createContext, useContext, useState } from "react";

// Create context
const ScoreboardContext = createContext(null);

// Provider component
export const ScoreboardProvider = ({ children }) => {
  const [admin, setAdmin] = useState(false);
  const [score, setScore] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [overCommentry, setOverCommentry] = useState([]);
  const [overs, setOvers] = useState(0.0);
  const [target, setTarget] = useState({ score: 0, wickets: 0 });

  return (
    <ScoreboardContext.Provider
      value={{
        admin,
        setAdmin,
        score,
        setScore,
        wickets,
        setWickets,
        overCommentry,
        setOverCommentry,
        overs,
        setOvers,
        target,
        setTarget,
      }}
    >
      {children}
    </ScoreboardContext.Provider>
  );
};

// Custom hook for using context
export const useScoreboard = () => useContext(ScoreboardContext);
