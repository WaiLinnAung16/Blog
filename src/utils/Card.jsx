import React from "react";
import HashTag from "./HashTag";
import Avatar from "./Avatar";
import LikeBtn from "./LikeBtn";
import CommentBtn from "./CommentBtn";
import moment from "moment";

const Card = ({ time, title, desc, name, hashTags, like, comment,image }) => {
  const likeCount = like ? like.length : 0;
  const commentCount = comment ? comment.length : 0;
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-3 border border-lightWhite rounded-md p-5 shadow">
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
            <LikeBtn likeCount={likeCount} />
            <CommentBtn commentCount={commentCount}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
