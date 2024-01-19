import React, { useEffect, useState } from "react";
import Card from "../utils/Card";
import axios from "axios";


const Home = () => {

  const [refresh, setRefresh] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const getAllBlogs = async () => {
    await axios
      .get(`${import.meta.env.VITE_API}/blog`)
      .then((res) => {
        setBlogs(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllBlogs();
  }, [refresh]);

  return (
    <div className="grid grid-cols-12 space-y-10 mb-20">
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
