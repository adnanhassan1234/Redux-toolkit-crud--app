import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ReadData from "./components/ReadData";
import Create from "./components/Create";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<ReadData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
