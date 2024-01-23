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
  const postComment = async (e) => {
    e.preventDefault();
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
        setUsers(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  // Show Commented User
  const cmtUserName = (cmt) => {
    const user = users?.find((el) => el._id === cmt.userId);
    return user?.name;
  };

  useEffect(() => {
    commentUser();
  }, []);

  return (
    <>
      <div className="space-y-3 bg-white rounded-md relative">
        <div className="font-bold text-lightGray text-xl p-3">
          Comments{" "}
          <span className="text-sm bg-primary text-secondary px-3 py-1 rounded-md">
            {comments?.length}
          </span>
        </div>
        <div className=" h-full max-h-[200px] overflow-y-scroll px-3 space-y-3">
          {comments?.map((cmt, i) => {
            return (
              <div key={i} className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Avatar name={cmtUserName(cmt)} />
                  <span className="font-semibold text-sm">{cmtUserName(cmt)}</span>
                </div>

                <span className="bg-[#fff] p-3 relative rounded-md after:w-5 after:h-5 after:bg-[#fff] after:absolute after:-top-2 after:left-3 after:rotate-45 after:rounded-sm">
                  {cmt.userComment}
                </span>
              </div>
            );
          })}
        </div>
        <div className="flex items-center space-x-2 border-t p-3">
          <Avatar />
          <form
            onSubmit={postComment}
            className="flex flex-1 rounded overflow-hidden"
          >
            <input
              type="text"
              placeholder="Write a comment..."
              className="px-3 py-1 outline-none h-10 w-full"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit" className="p-2 bg-primary text-secondary">
              <IoIosSend className="text-xl" />
            </button>
          </form>
        </div>
      </div>
      {/* <div className="flex flex-col gap-y-3 p-2 h-[350px] overflow-y-scroll rounded-md shadow">
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
      </div> */}
      {/* <div className="flex rounded shadow overflow-hidden">
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
      </div> */}
    </>
  );
};

export default CommentForm;
