import React, { useState } from "react";
import { commentBlogRoute } from "../Global/API/apiRoute";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const CommentForm = ({ comments, blogId }) => {
  const [comment, setComment] = useState('');
  const token = Cookies.get("token");
  const postComment = async () => {
    if (comment === "") {
      toast.error("Comment is not be empty!");
      return;
    } else {
      await axios
        .post(
          commentBlogRoute,
          { blogId, userComment: comment },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res?.data);
          setComment("");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="">
      <div className="flex flex-col gap-y-3">
        {comments?.map((cmt, i) => (
          <span key={i}>{cmt.userComment}</span>
        ))}
      </div>
      <input
        type="text"
        placeholder="Write a comment..."
        className="p-3 outline-none shadow w-full"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        onClick={() => {
          postComment();
        }}
        className="border border-primary"
      >
        post
      </button>
    </div>
  );
};

export default CommentForm;
