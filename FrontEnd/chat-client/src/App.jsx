import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/signup/SignUp";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <div className="p-4 screen flex items-center justify-center h-screen">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      <Toaster/>
      </div>
    </>


  );
};

export default App;
