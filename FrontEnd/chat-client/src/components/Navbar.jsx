import React from "react";

const Navbar = () => {
  return (
    <>
      <h2>TC4_Chats</h2>
      <ul>
        {["home", "status", "call", "messages"].map((item, index) => (
          <li
            key={index}
            className="flex flex-1 text-3xl z-10 text-blue-500 text-center"
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
