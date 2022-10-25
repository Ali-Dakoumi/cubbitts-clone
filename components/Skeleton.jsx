import React from "react";

const Skeleton = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between animate-opacity">
      <div className="bg-[#e8e8e7] h-[94%] w-full "></div>
      <div className="bg-[#dbdbdb] h-[2%] w-full rounded-3xl"></div>
    </div>
  );
};

export default Skeleton;
