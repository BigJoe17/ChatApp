import React from "react";
import SideBar from "./components/sideBar";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
      <div
        className="text-4xl font-bold text-blue-500 text-center mt-10
     hover:text-blue-950 hover:transition-transform hover:duration-700 hover:scale-110 hover:transition-all "
      >
        Welcome to My ChatApp
      </div>
      <Navbar/>
      <SideBar />
    </>
  );
};

export default App;
