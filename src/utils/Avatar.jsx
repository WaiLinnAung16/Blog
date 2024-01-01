import React from "react";

const Avatar = ({ width = 12, height = 12, name }) => {
  return (
    <div className="flex items-center space-x-2">
      <div
        className={`w-${width} h-${height} rounded-full overflow-hidden bg-primary`}
      >
        {/* <img src="" alt="" /> */}
      </div>
      {name === undefined ? null : (
        <p className="text-primary font-semibold">{name}</p>
      )}
    </div>
  );
};

export default Avatar;
