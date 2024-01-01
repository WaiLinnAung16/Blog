import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import Avatar from "../utils/Avatar";

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
  return (
    <nav className="bg-darkGray text-secondary px-2 py-3">
      <div className="flex justify-between items-center">
        {/* LOGO HERE */}
        <h1 className="font-bold text-3xl">LOGO</h1>
        {/* Navigation Menu */}
        <div className="flex items-center space-x-5">
          {NavMenus.map((nav) => (
            <Link to={nav.link} key={nav.id} className="text-2xl">
              {nav.icon}
            </Link>
          ))}
        {/* Avatar */}
        <Avatar width={10} height={10}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
