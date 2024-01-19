import React from "react";
import { BiComment } from "react-icons/bi";
const CommentBtn = ({commentCount}) => {
  return (
    <div className="flex items-center space-x-2 text-lightGray ">
      <BiComment className="text-2xl"/>
      <span>{commentCount}</span>
    </div>
  );
};

export default CommentBtn;
