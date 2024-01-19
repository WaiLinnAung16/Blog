import React from "react";

const HashTag = ({ hashTags }) => {
  return <div className="flex items-center gap-x-3">
    
    {hashTags
    ?.split(",")
    .map((hashTag) => (
      <div key={hashTag} className="text-sm self-start flex items-center justify-center text-primary">
        <span>#</span> {hashTag}
      </div>
    ))}
  </div>
};
 
export default HashTag;
