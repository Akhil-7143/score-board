import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Auth from "./Components/Auth";

function App() {
  return (
    <Router basename="/score-board"> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth-admin" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;

