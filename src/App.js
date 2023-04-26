import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ReadData from "./components/ReadData";
import Create from "./components/Create";
import Update from "./components/Update";
import Login from "./components/Login/Login";
import MainPage from "./pages/MainPage/MainPage";
import Cart from "./components/Cart/Cart";


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
          <Route exact path="/main" element={<MainPage />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
