import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userStore } from "../Global/API/store";
import Card from "../utils/Card";
import Avatar from "../utils/Avatar";

const Profile = () => {
  const { id } = useParams();
  const fetchProfile = userStore((store) => store.fetchProfile);
  const profile = userStore((store) => store.profile);

  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    fetchProfile(id);
    // console.log(profile)
  }, [id]);
  return (
    <div className="flex flex-col items-start gap-5 px-3">
      <div className="space-y-3">
        <Avatar name={profile.name} size={20} />
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
          <h1 className="font-bold text-2xl">10</h1>
          <span className="font-semibold">Followers</span>
        </div>
        <div>
          <h1 className="font-bold text-2xl">20</h1>
          <span className="font-semibold">Blogs</span>
        </div>
        <div>
          <h1 className="font-bold text-2xl">2</h1>
          <span className="font-semibold">Favourite</span>
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Friends</h1>
        <div className="flex gap-3">
        <div className="w-12 h-12 rounded-full bg-slate-400"></div>
        <div className="w-12 h-12 rounded-full bg-slate-400"></div>
        <div className="w-12 h-12 rounded-full bg-slate-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
