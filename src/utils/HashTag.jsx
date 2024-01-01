import React from "react";

const HashTag = ({ hashTags }) => {
  return <div className="flex items-center gap-x-3">
    {hashTags
    ?.split(",")
    .map((hashTag) => (
      <div key={hashTag} className="self-start flex items-center justify-center px-3 py-1 bg-primary text-white rounded-md">
        {hashTag}
      </div>
    ))}
  </div>
};

export default HashTag;
