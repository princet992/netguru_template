import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { MdClear } from "react-icons/md";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const [toggleBtn, setToggleBtn] = useState(true);

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 550) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <>
      <nav
        id="header"
        className={` mx-auto flex justify-between items-center font-medium px-24 h-16 bg-transparent hover:bg-white  group hover:text-black transition-all duration-300 fixed top-0 w-full z-20 ${
          color ? "bg-white text-black shadow-gray-400 shadow-md" : "text-white"
        }`}
      >
        <img src="/images/hero-section/netguru.svg" alt="" />
        <ul className="hidden lg:flex space-x-5">
          <NavLink to="/">Services</NavLink>
          <NavLink to="/insight">Industries</NavLink>
          <NavLink to="/">Clients</NavLink>
          <NavLink to="/">About Us</NavLink>
          <NavLink to="/">Insights</NavLink>
        </ul>
        <button
          id="navBtn"
          className={`px-4 py-2 border-white border-[1px] rounded-lg group-hover:bg-green-600 opacity-0 lg:opacity-100 ${
            color && "bg-green-500"
          }`}
        >
          Get in touch
        </button>

        <div className="button lg:hidden">
          {toggleBtn ? (
            <button onClick={() => setToggleBtn(!toggleBtn)}>
              {" "}
              <FaBars />
            </button>
          ) : (
            <button onClick={() => setToggleBtn(!toggleBtn)}>
              <MdClear />
            </button>
          )}
        </div>
        {/* -------mobile-view-------- */}
        {!toggleBtn && (
          <ul
            className="flex flex-col gap-5 text-center absolute top-16 left-0 bg-white text-black lg:hidden w-full odd:bg-slate-500 py-5"
            onClick={() => setToggleBtn(!toggleBtn)}
          >
            <NavLink to="/">Services</NavLink>
            <NavLink to="/insight">Industries</NavLink>
            <NavLink to="/">Clients</NavLink>
            <NavLink to="/">About Us</NavLink>
            <NavLink to="/">Insights</NavLink>
            <button className="px-4 py-2 border-white border-[1px] rounded-lg bg-green-600 w-32 mx-auto">
              Get in touch
            </button>
          </ul>
        )}
      </nav>
    </>
  );
};

export default NavBar;
