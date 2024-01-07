import React from "react";
import HashTag from "./HashTag";
import Avatar from "./Avatar";
import LikeBtn from "./LikeBtn";
import CommentBtn from "./CommentBtn";
import moment from "moment";
import { SlLike } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";
import { likeBlogRoute } from "../Global/API/apiRoute";
import { userStore } from "../Global/API/store";

const Card = ({
  refresh,
  setRefresh,
  blogId,
  time,
  title,
  desc,
  name,
  hashTags,
  like,
  comment,
  image,
  blog
}) => {
  const userInfo = userStore(store=>store.userInfo);
  const addBlog = userStore(store=>store.addBlog);
  const nav = useNavigate();
  const likeCount = like ? like.length : 0;
  const commentCount = comment ? comment.length : 0;
  const token = Cookies.get("token");

  // if login userId and likeUserId same like btn will change
  const match = like.find(el=>el.id === userInfo._id);
  // Like function
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
        .then((res) => {
          // console.log(res?.data);
          setRefresh(!refresh);
        })
        .catch((err) => console.log(err));
      return;
    }
    toast.error("You need to login!", { autoClose: 2000 });
    setTimeout(() => nav("/login"), 3000);
  };

  return (
    <div onClick={()=>{addBlog(blog),nav('/detail')}} className="col-span-12 md:col-span-6 lg:col-span-3 border border-lightWhite rounded-md p-5 shadow">
      <div className="flex flex-col space-y-5">
        {/* Content */}
        <div className="flex flex-col space-y-2 text-primary">
          {/* Upload Time */}
          <p className="text-sm">{moment(time).fromNow()}</p>
          {/* Title */}
          <h1 className="font-bold text-3xl uppercase">{title}</h1>
          {/* Descc */}
          <p>{desc}</p>
          {/* HashTag */}
          <HashTag hashTags={hashTags} />
        </div>
        {/* Image */}
        <div className="w-full h-[350px] rounded-md overflow-hidden">
          <img src={image} alt="" />
        </div>
        {/* Upload User, Like, Cmt */}
        <div className="flex justify-between items-center">
          <div>
            <Avatar name={name} />
          </div>
          <div className="flex gap-x-5">
            <div
              onClick={(e) => {e.stopPropagation();handleLike()}}
              className={`flex items-center space-x-2 ${match ? 'text-primary font-bold' : 'text-lightGray'}`}
            >
              <SlLike className="text-xl" />
              <span>{likeCount}</span>
            </div>
            <CommentBtn commentCount={commentCount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
