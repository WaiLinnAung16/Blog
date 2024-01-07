import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { SlLike } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { likeBlogRoute } from "../Global/API/apiRoute";
import { userStore } from "../Global/API/store";

const LikeBtn = ({ likeCount, blogId ,likeUserId,setRefresh,refresh}) => {
  const userId = userStore(store=>store.userInfo);
  console.log(userId);
  const nav = useNavigate();
  const token = Cookies.get("token");
  // console.log(blogId)
  const handleLike = async () => {
    if (token) {
      await axios
        .post(
          likeBlogRoute,
          { blogId },
          {
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => console.log(res?.data),setRefresh(!refresh))
        .then((err) => console.log(err));
      return;
    }
    toast.error("You need to login!", { autoClose: 2000 });
    setTimeout(() => nav("/login"), 3000);
  };
  return (
    <div
      onClick={()=>handleLike()}
      className="flex items-center space-x-2 text-lightGray"
    >
      <SlLike className="text-xl" />
      <span>{likeCount}</span>
    </div>
  );
};

export default LikeBtn;
