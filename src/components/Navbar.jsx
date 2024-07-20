import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isShowcasePage =
    location.pathname === "/about" || location.pathname === "/projects";

  return (
    <header className="header">
      <div className="flex items-center">
        <NavLink
          to="/"
          className={`flex items-center justify-center h-12 font-light ${
            isShowcasePage ? "text-black" : "text-white"
          }`}
        >
          <p className="leading-tight text-left">
            Sen's <br />
            Portfolio
          </p>
        </NavLink>
      </div>
      <div className="flex-grow"></div>{" "}
      {/* 이 요소가 가운데 공간을 차지하게 합니다 */}
      <nav
        className={`flex items-center justify-center h-12 font-light gap-7 ${
          isShowcasePage ? "text-black" : "text-white"
        }`}
      >
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500"
              : isShowcasePage
              ? "text-black"
              : "text-white"
          }
        >
          Showcase1
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500"
              : isShowcasePage
              ? "text-black"
              : "text-white"
          }
        >
          Showcase2
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
