import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userStore } from "../Global/API/store";
import Card from "../utils/Card";
import Avatar from "../utils/Avatar";
import { getUserDetailRoute, getUsersRoute } from "../Global/API/apiRoute";
import Cookies from "js-cookie";
import axios from "axios";

const Profile = () => {
  const { id } = useParams();
  const fetchProfile = userStore((store) => store.fetchProfile);
  const profile = userStore((store) => store.profile);
  const token = Cookies.get("token");
  const [users, setUsers] = useState([]);

  const allUsers = async () => {
    await axios
      .get(getUsersRoute, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        // console.log(res?.data?.data);
        setUsers(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  const showFollowers = () => {
    return users?.filter((user) =>
      profile?.followers?.find((el) => user._id === el)
    );
  };

  useEffect(() => {
    fetchProfile(id);
    allUsers();
  }, [id]);

  return (
    <div className="flex flex-col items-start gap-5 px-3">
      <div className="space-y-3">
        <Avatar name={profile?.email} size={"lg"} />
        <div className="space-y-2">
          <div>
            <h1 className="font-bold text-2xl">{profile.name}</h1>
            <p className="font-semibold">{profile.email}</p>
          </div>
        </div>
      </div>
      <div className="self-center w-full h-[1px] bg-gradient-to-r from-transparent via-lightWhite to-transparent"></div>

      <div className="grid grid-cols-3 border-b pb-3 w-full">
        <div>
          <h1 className="font-bold text-2xl">{profile?.blogs?.length}</h1>
          <span className="font-semibold">Blogs</span>
        </div>
        <div>
          <h1 className="font-bold text-2xl">
            {profile?.followers ? profile?.followers?.length : 0}
          </h1>
          <span className="font-semibold">Followers</span>
        </div>
        <div>
          <h1 className="font-bold text-2xl">{profile?.following?.length}</h1>
          <span className="font-semibold">Following</span>
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Friends</h1>
        <div className="flex gap-3">
          {showFollowers().map((follower) => (
            <div className="flex flex-col gap-1">
              <Avatar name={follower?.email} id={follower?._id} />
              <span className="text-sm">{follower?.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
