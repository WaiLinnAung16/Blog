import React, { useEffect, useState } from "react";
import { commentBlogRoute, getUsersRoute } from "../Global/API/apiRoute";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { IoIosSend } from "react-icons/io";
import Avatar from "./Avatar";

const CommentForm = ({ comments, blogId, refresh, setRefresh }) => {
  const [comment, setComment] = useState("");
  const [users, setUsers] = useState();
  const token = Cookies.get("token");

  // Post comment route need blogId and User Comment
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
          console.log(comments);
          setRefresh(!refresh);
          setComment("");
        })
        .catch((err) => console.log(err));
    }
  };

  // Get comments in selected Blog
  const commentUser = async () => {
    await axios
      .get(getUsersRoute, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        console.log(res?.data?.data);
        setUsers(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  // Show Commented User
  const cmtUserName = (cmt) => {
    const user = users?.find((el) => el._id === cmt.userId);
    return user?.name;
  };

  console.log(comments)

  useEffect(() => {
    commentUser();
  }, []);

  return (
    <>
 
      <div className="flex flex-col gap-y-3 p-2 h-[350px] overflow-y-scroll rounded-md shadow">
        {comments?.map((cmt, i) => {
          return (
            <div key={i} className="flex flex-col gap-2 border-b pb-3">
              <div className="flex items-center gap-2">
                <Avatar name={cmtUserName(cmt)}/>
                <span>{cmtUserName(cmt)}</span>
              </div>
              <span className="pl-5">{cmt.userComment}</span>
            </div>
          );
        })}
      </div>
      <div className="flex rounded shadow overflow-hidden">
        <input
          type="text"
          placeholder="Write a comment..."
          className="p-3 outline-none w-full"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          onClick={() => {
            postComment();
          }}
          className="p-3 bg-primary text-secondary"
        >
          <IoIosSend className="text-xl" />
        </button>
      </div>
    </>
  );
};

export default CommentForm;
