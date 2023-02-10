import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import {
  TbLayoutBoard,
  TbSearch,
  TbWorld,
  TbMessageDots,
} from "react-icons/tb";

const Navbar = () => {
  const activeStyle = ({ isActive }: { isActive: boolean }) => {
    return {
      backgroundColor: isActive ? "var(--black)" : "transparent",
    };
  };

  return (
    <nav className={styles.Nav}>
      <div>
        <Link to="/">What 2 Watch</Link>
        <NavLink style={activeStyle} to="/">
          <TbLayoutBoard />
          Discover
        </NavLink>
        <NavLink style={activeStyle} to="search">
          <TbSearch />
          Search
        </NavLink>
        <NavLink style={activeStyle} to="favorites">
          <TbWorld />
          Favorites
        </NavLink>
        <NavLink style={activeStyle} to="about">
          <TbMessageDots />
          About
        </NavLink>
      </div>
      <form className="group">
        <svg className="search-icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input type="search" />
      </form>
    </nav>
  );
};

export default Navbar;
