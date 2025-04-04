import React from "react";
// Import correto para v6+
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Error from "../pages/Error";
import Imobi from "../pages/Imobi";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Imobi" element={<Imobi />} />
        <Route path="Login" element={<Login />} />
        <Route path="Cadastro" element={<Cadastro />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouterApp;
