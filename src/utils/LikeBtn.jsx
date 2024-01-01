import React from "react";
import { SlLike } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LikeBtn = ({ likeCount }) => {
  const nav = useNavigate();
  const handleLike = () => {
    toast.error("You need to login!");
  };
  return (
    <div
      onClick={handleLike}
      className="flex items-center space-x-2 text-lightGray"
    >
      <SlLike className="text-xl" />
      <span>{likeCount}</span>
    </div>
  );
};

export default LikeBtn;
