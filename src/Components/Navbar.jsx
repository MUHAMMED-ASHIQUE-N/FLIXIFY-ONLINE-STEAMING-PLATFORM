import React from "react";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
//Assets
import logo from "../assets/Logo.png";
import avathar from "../assets/avathar.jpg";


function Nvabar() {
  return (
    <nav className="bg-[#111]  w-full text-white flex items-center   py-5">
      <div className=" ps-5 md:ps-16 md:pe-10">
        <img src={logo} alt="" width={100} className="" />
      </div>
      <div className="  md:flex w-full justify-between  ">
        <div className=" hidden md:block space-x-4">
          <Link to="/">
            {" "}
            <a href="">Home</a>
          </Link>

          <Link to="/movies">
            {" "}
            <a href="">Movies</a>
          </Link>

          <Link to="/tvshows">
            {" "}
            <a href="">Tv Shows</a>
          </Link>

          <a href="#">My List</a>
        </div>

        <div className=" flex float-end pe-5 md:pe-20 space-x-4">
          <h1 className="">
            <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
          </h1>
          <h1>
            <FontAwesomeIcon icon={faBell} />{" "}
          </h1>
          <img src={avathar} alt="avathar" width={30} />
        </div>
      </div>
    </nav>
  );
}

export default Nvabar;
