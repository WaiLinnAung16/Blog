import React, { useEffect, useState } from "react";
import moment from "moment";
import HashTag from "../utils/HashTag";
import CommentForm from "../utils/CommentForm";
import axios from "axios";
import { userStore } from "../Global/API/store";
import { getSingleBlogRoute, getUsersRoute } from "../Global/API/apiRoute";
import Cookies from "js-cookie";

const Detail = () => {
  const [blog, setBlog] = useState();
  const [refresh, setRefresh] = useState(false);
  const storeBlog = userStore((store) => store.blog);
  const { _id } = storeBlog;

  const getSingleBlog = async () => {
    await axios
      .post(getSingleBlogRoute, { _id })
      .then((res) => {
        setBlog(res?.data?.data[0]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSingleBlog();
  }, [_id, refresh]);

  return (
    <div>
      <div>
        <img src={blog?.blogImg} alt="" />
      </div>
      <div className="flex flex-col space-y-2 text-primary mb-5">
        <p className="text-sm">{moment(blog?.date).fromNow()}</p>
        <h1 className="font-bold text-3xl uppercase">{blog?.title}</h1>
        <HashTag hashTags={blog?.hashTag} />
        <p className="text-lg">{blog?.content}</p>
      </div>

      <div className="relative">
        <CommentForm
          comments={blog?.comments}
          blogId={blog?._id}
          refresh={refresh}
          setRefresh={setRefresh}
        />
      </div>
    </div>
  );
};

export default Detail;
