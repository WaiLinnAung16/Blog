import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { BsPeopleFill } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import Avatar from "../utils/Avatar";
import Cookies from "js-cookie";
import { userStore } from "../Global/API/store";

const Navbar = () => {
  const user = userStore((store) => store.userInfo);
  console.log(user)
  const token = Cookies.get("token");
  return (
    <nav className=" text-primary px-2 py-3 fixed w-full z-50">
      <div className="flex justify-between items-center">
        {/* LOGO HERE */}
        <Link to={"/"} className="font-bold text-3xl">
          LOGO
        </Link>

        <div className="flex items-center space-x-5">
          {user && token ? (
            <Avatar name={user.email} id={user._id} />
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
