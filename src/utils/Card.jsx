import React from "react";
import HashTag from "./HashTag";
import Avatar from "./Avatar";

const Card = ({ time, title, desc }) => {
  return (
    <div className="border border-lightWhite rounded-md p-5">
      <div className="flex flex-col space-y-5">
        {/* Content */}
        <div className="flex flex-col space-y-2 text-primary">
          {/* Upload Time */}
          <p className="text-sm">{time}</p>
          {/* Title */}
          <h1 className="font-bold text-3xl uppercase">{title}</h1>
          {/* Descc */}
          <p>{desc}</p>
          {/* HashTag */}
          <HashTag text={"React"} />
        </div>
        {/* Upload User, Like, Cmt */}
        <div className="flex justify-between items-center">
          <Avatar name={'Wai Linn Aung'}/>
        </div>
      </div>
    </div>
  );
};

export default Card;
