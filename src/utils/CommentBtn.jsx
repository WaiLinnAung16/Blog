import React from "react";
import { TfiComment } from "react-icons/tfi";

const CommentBtn = ({commentCount}) => {
  return (
    <div className="flex items-center space-x-2 text-lightGray ">
      <TfiComment className="text-xl"/>
      <span>{commentCount}</span>
    </div>
  );
};

export default CommentBtn;
