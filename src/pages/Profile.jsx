import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userStore } from "../Global/API/store";
import Card from "../utils/Card";

const Profile = () => {
  const { id } = useParams();
  const fetchProfile = userStore((store) => store.fetchProfile);
  const profile = userStore((store) => store.profile);

  const [refresh,setRefresh] = useState(false)
  useEffect(() => {
    fetchProfile(id);
    // console.log(profile)
  }, [id]);
  return (
    <div>
      <h1>Profile Data</h1>
      <h1>Name - {profile.name}</h1>
      <h1>Email - {profile.email}</h1>
      <h1>Blogs</h1>
      {profile.blogs?.map((blog) => (
        <Card
          key={blog._id}
          blog={blog}
          blogId={blog._id}
          name={blog.author_name}
          blogOwner={blog.blogOwner}
          title={blog.title}
          image={blog.blogImg}
          desc={blog.content}
          time={blog.date}
          hashTags={blog.hashTag}
          like={blog.like}
          comment={blog.comments}
          setRefresh={setRefresh}
          refresh={refresh}
        />
      ))}
    </div>
  );
};

export default Profile;
