import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";


const Header = () => {
  return <header className="h-[10vh] justify-center text-black p-5 flex  bg-[#dae0e0] ">         
                        <HiMagnifyingGlass className="relative left-7 top-2 text-gray-400"/>
                        <input className="bg-[#f0f1f5] py-2 pl-10 pr-96 rounded-xl" type="text" placeholder="Usuario de GitHub"/>
                
  </header>;
};

export default Header;