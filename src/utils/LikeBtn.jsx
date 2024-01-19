import React from "react";
import { SlLike } from "react-icons/sl";
const LikeBtn = ({ handleLike, match, likeCount }) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        handleLike();
      }}
      className={`flex items-center space-x-2 ${
        match ? "text-primary" : "text-lightGray"
      }`}
    >
      <SlLike className="text-xl" />
      <span>{likeCount}</span>
    </div>
  );
};

export default LikeBtn;
