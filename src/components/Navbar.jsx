import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { BsPeopleFill } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import Avatar from "../utils/Avatar";
import Cookies from "js-cookie";
import { userStore } from "../Global/API/store";

const NavMenus = [
  {
    id: 1,
    link: "/create",
    icon: <TbSquareRoundedPlus />,
  },
  {
    id: 2,
    link: "/",
    icon: <BsPeopleFill />,
  },
];

const Navbar = () => {
  const user = userStore(store=>store.userInfo);
  const token = Cookies.get('token');
  return (
    <nav className="bg-darkGray text-secondary px-2 py-3">
      <div className="flex justify-between items-center">
        {/* LOGO HERE */}
        <Link to={'/'} className="font-bold text-3xl">LOGO</Link>

        <div className="flex items-center space-x-5">
          {user && token ? (
            <>
              {/* Navigation Menu When Login */}
              {NavMenus.map((nav) => (
                <Link to={nav.link} key={nav.id} className="text-2xl">
                  {nav.icon}
                </Link>
              ))}
              <Avatar />
            </>
          ) : (
            <>
              <Link to={"/login"} className="flex items-center gap-x-2">
                <BiLogIn className="text-xl" /> Login
              </Link>
              <Link to={"/register"}>Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
