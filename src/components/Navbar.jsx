import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import Avatar from "../utils/Avatar";
import Cookies from "js-cookie";

const NavMenus = [
  {
    id: 1,
    link: "/",
    icon: <AiFillHome />,
  },
  {
    id: 2,
    link: "/",
    icon: <BsPeopleFill />,
  },
];

const Navbar = () => {
  const token = Cookies.get("token");
  console.log(token);
  return (
    <nav className="bg-darkGray text-secondary px-2 py-3">
      <div className="flex justify-between items-center">
        {/* LOGO HERE */}
        <h1 className="font-bold text-3xl">LOGO</h1>

        <div className="flex items-center space-x-5">
          {token ? (
            <>
              {/* Navigation Menu When Login */}
              {NavMenus.map((nav) => (
                <Link to={nav.link} key={nav.id} className="text-2xl">
                  {nav.icon}
                </Link>
              ))}
            </>
          ) : (
            <>
              <Link to={"/login"} className="flex items-center gap-x-2">
                <BiLogIn className="text-xl" /> Login
              </Link>
              <Link to={"/register"}>Register</Link>
            <Avatar />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
