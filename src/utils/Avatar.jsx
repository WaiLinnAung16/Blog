import React from "react";
import { createAvatar } from "@dicebear/core";
import { pixelArt } from "@dicebear/collection";
import { userStore } from "../Global/API/store";

const Avatar = ({ name }) => {
  const user = userStore(store=>store.userInfo);
  // Generate Random Avatar base on Username
  const avatar = createAvatar(pixelArt, {
    seed: user.name
  });
  const svg = avatar.toString();

  return (
    <div className="flex items-center space-x-2">
      <div className="w-12 h-12 rounded-full overflow-hidden bg-primary">
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
