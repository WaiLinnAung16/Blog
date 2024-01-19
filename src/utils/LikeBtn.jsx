import React from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { SlLike } from "react-icons/sl";
const LikeBtn = ({ handleLike, match, likeCount }) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        handleLike();
      }}
      className={`flex items-center space-x-2`}
    >
      {match ? <BiSolidLike  className="text-primary text-2xl"/> : <BiLike className="text-lightGray text-2xl"/>}
      <span>{likeCount}</span>
    </div>
  );
};

export default LikeBtn;
