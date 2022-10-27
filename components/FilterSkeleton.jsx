import React from "react";

const Skeleton = () => {
  return (
    <div className="hidden w-max lg:flex xl:flex 2xl:flex py-5 sticky top-16 z-20 animate-opacity">
      <button className="flex justify-start items-center fz-13 mx-2 px-4 rounded-2xl bg-[#dbdbdb] h-[28px] min-w-[155px] relative "></button>
      <button className="flex justify-start items-center fz-13 mx-2 px-4 rounded-2xl bg-[#dbdbdb] h-[28px] min-w-[155px] relative "></button>
      <button className="flex justify-start items-center fz-13 mx-2 px-4 rounded-2xl bg-[#dbdbdb] h-[28px] min-w-[155px] relative "></button>
      <button className="flex justify-start items-center fz-13 mx-2 px-4 rounded-2xl bg-[#dbdbdb] h-[28px] min-w-[155px] relative "></button>
      <button className="flex justify-start items-center fz-13 mx-2 px-4 rounded-2xl bg-[#dbdbdb] h-[28px] min-w-[155px] relative "></button>
    </div>
  );
};

export default Skeleton;
