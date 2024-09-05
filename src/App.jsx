import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Learn from "./Components/Home/Learn/Learn";
import Auto from "./Components/Home/Auto/Auto";

const App = () => {
  return (
    <div className="AppMain">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/auto" element={<Auto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
