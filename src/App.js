import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ReadData from "./components/ReadData";
import Create from "./components/Create";
import Update from "./components/Update";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/home" element={<Create />} />
          <Route exact path="/read" element={<ReadData />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
