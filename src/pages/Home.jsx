import React, { useEffect, useState } from "react";
import Card from "../utils/Card";
import axios from "axios";
import { getUserDetailRoute } from "../Global/API/apiRoute";
import { userStore } from "../Global/API/store";
import Cookies from "js-cookie";

const Home = () => {
  const userInfo = userStore((store) => store.userInfo);
  const addUser = userStore((store) => store.addUser);
  const [refresh, setRefresh] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const token = Cookies.get("token");

  const getAllBlogs = async () => {
    await axios
      .get(`${import.meta.env.VITE_API}/blog`)
      .then((res) => {
        setBlogs(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  // UserDetail
  const handleUserDetail = async () => {
    if (token) {
      await axios
        .post(
          getUserDetailRoute,
          { userId: userInfo?._id },
          {
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          addUser(res?.data?.data);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    getAllBlogs();
    handleUserDetail();
  }, [refresh]);

  return (
    <div className="grid grid-cols-12 space-y-10 mb-20 w-full max-w-[400px] mx-auto">
      {blogs?.map((blog) => {
        return (
          <Card
            key={blog._id}
            blog={blog}
            setRefresh={setRefresh}
            refresh={refresh}
          />
        );
      })}
    </div>
  );
};

export default Home;
