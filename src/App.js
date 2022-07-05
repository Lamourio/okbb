import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { DashBoard } from "./DashBoard";
import { Home } from "./Home";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App ;