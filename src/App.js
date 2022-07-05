import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { DashBoard } from "./DashBoard";
import { Home } from "./Home";
import "./App.css";
import TableDisplay from "./components/TableDisplay";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<DashBoard />} />
        <Route path="dashboard" element={<TableDisplay />} />
      </Routes>
      
    </div>
  );
}

export default App ;