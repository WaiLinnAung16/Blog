import React from "react";
import profile from "../assets/avatar1.svg";

const Avatar = ({ name }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-12 h-12 rounded-full overflow-hidden bg-primary">
        <img src={profile} alt="profile picture" className="w-full h-full" />
      </div>
      {name === undefined ? null : (
        <p className="text-primary font-semibold">{name}</p>
      )}
    </div>
  );
};

export default Avatar;
