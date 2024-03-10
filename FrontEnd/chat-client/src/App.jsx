import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/signup/SignUp";
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

const App = () => {
  const { authUser } = useAuthContext();
  return (
    <>
      <div className="p-4  flex items-center justify-center h-screen">
        <Routes>
          <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
          <Route path="/signup" element={authUser ? <Navigate to={'/'} /> : <Signup />} />
          <Route path="/login" element={authUser ? <Navigate to={'/'} /> : <Login />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
};

export default App;
