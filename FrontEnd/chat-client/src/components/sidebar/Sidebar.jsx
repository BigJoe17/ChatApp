import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
const SideBar = () => {
  return (
    <>
      <div className="border-r border-slate-500 p-4 flex flex-col">

        <SearchInput />
        <div className="divider px-3 "></div>
        <Conversations/>
        <LogoutButton/>

      </div>
    </>
  )
};

export default SideBar;


{/* <aside className=" flex flex-col gap-10 absolute top-0 left-0  ps-5 py-3 pe-3 bg-slate-600 w-[20%] text-white h-screen overflow-hidden">
        <div id="firstLayer" className="">
          <ul className="flex flex-col gap-3">
            {["Dashboard", "Profile", "Tokens", "Products"].map(
              (item, index) => (
                <li
                  key={index}
                  className="hover:rounded-xl hover:bg-black p-2 hover: cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

         <div id="firstLayer" className="hover">
          <ul className="flex flex-col gap-3">
            {["Affiliates", "Analytics", "Settings", "Logout"].map(
              (item, index) => (
                <li
                  key={index}
                  className="hover:rounded-xl hover:bg-blue-700 p-2 hover: cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </aside>
    </>*/

}
