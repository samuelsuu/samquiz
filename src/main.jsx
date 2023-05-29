import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import Feedback from "./pages/feedbackpage";
import About from "./pages/Aboutpage";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
