import React from "react";
import { createAvatar } from "@dicebear/core";
import { userStore } from "../Global/API/store";
import { adventurer } from "@dicebear/collection";

const Avatar = ({ name }) => {
  const user = userStore(store=>store.userInfo);
  const seed = name || user.name
  // Generate Random Avatar base on Username
  const avatar = createAvatar(adventurer, {
    seed: seed
  });
  const svg = avatar.toString();

  return (
    <div className="flex items-center space-x-2">
      <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm">
        {/* Generated Svg */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="none"
          shapeRendering="crispEdges"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      </div>
      {/* Username */}
      {name === undefined ? null : (
        <p className="text-primary font-semibold">{name}</p>
      )}
    </div>
  );
};

export default Avatar;
