import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { MdClear } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [toggleBtn, setToggleBtn] = useState(true);

  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 500) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 w-full z-50 hover:bg-black/10 ${
          color ? "bg-white text-black shadow-gray-400 shadow-md" : "text-white"
        }`}
      >
        <nav
          id="header"
          className={`max-w-[1200px] mx-auto flex justify-between items-center font-medium px-10 h-16 bg-transparent   group  transition-all duration-300  `}
        >
          <Link to="/">
            <img src="/images/hero-section/netguru.svg" alt="logo" />
          </Link>
          <ul className="hidden lg:flex space-x-5">
            <NavLink to="/">Services</NavLink>
            <NavLink to="/">Industries</NavLink>
            <NavLink to="/">Clients</NavLink>
            <NavLink to="/">About Us</NavLink>
            <NavLink to="/">Insights</NavLink>
          </ul>
          <button
            id="navBtn"
            className={`hidden lg:block px-4 py-2 border-white border-[1px] rounded-lg group-hover:bg-green-600 text-white ${
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
              <NavLink to="/">Industries</NavLink>
              <NavLink to="/">Clients</NavLink>
              <NavLink to="/">About Us</NavLink>
              <NavLink to="/">Insights</NavLink>
              <button className="px-4 py-2 border-white border-[1px] rounded-lg bg-green-600 w-32 mx-auto">
                Get in touch
              </button>
            </ul>
          )}
        </nav>
      </div>
    </>
  );
};

export default NavBar;
