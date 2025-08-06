import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
const [isScrolling, setIsScrolling] = useState(false)
function handleScroll(){
  if (window.scrollY > 35) {
    setIsScrolling(true);
    
  }else{
    setIsScrolling(false);
  }
}

  useEffect(() => {
    window.addEventListener("scroll",handleScroll);
  }, [])
  
  return (
    <nav className={`${isScrolling ? "py-4":"py-7" } transition-[padding] duration-400  fixed top-0 left-0 w-full z-10 bg-primary text-white  `}>
      <div className="container">
        <div className="flex justify-between items-center  ">
          <h1 className="uppercase text-3xl">
            <Link to={"/"}>Start Framework</Link>
          </h1>
          <div>
            <ul className=" flex justify-between items-center text-lg uppercase font-bold  ">
              <li className="me-5 ">
                <NavLink className={({isActive})=>isActive ? "hamada p-3" : "p-3"} to={"/about"}>about</NavLink>
              </li>
              <li className="me-5 ">
                <NavLink className={({isActive})=>isActive ? "hamada p-3" : "p-3"} to={"/portfolio"}>portfolio</NavLink>
              </li>
              <li className="me-5 ">
                <NavLink className={({isActive})=>isActive ? "hamada p-3" : "p-3" } to={"/contact"}>contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
