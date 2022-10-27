import React from "react";

const Filter = ({ title }) => {
  return (
    <div className="hidden w-max lg:flex xl:flex 2xl:flex py-5 sticky top-16 z-20">
      <p className="mr-2"> {title} </p>
      <button className="flex justify-start items-center fz-13 mx-2 px-4 rounded-2xl bg-button-light h-[28px] min-w-[155px] relative hover:bg-white transition-colors duration-200  ">
        <span>Shape</span>
      </button>
      <button className="flex justify-start items-center fz-13 mx-2 px-4 rounded-2xl bg-button-light h-[28px] min-w-[155px] relative hover:bg-white transition-colors duration-200  ">
        <span>Material</span>
      </button>
      <button className="flex justify-start items-center fz-13 mx-2 px-4 rounded-2xl bg-button-light h-[28px] min-w-[155px] relative hover:bg-white transition-colors duration-200  ">
        <span>Thickness</span>
      </button>
      <button className="flex justify-start items-center fz-13 mx-2 px-4 rounded-2xl bg-button-light h-[28px] min-w-[155px] relative hover:bg-white transition-colors duration-200  ">
        <span>Face width</span>
      </button>
    </div>
  );
};

export default Filter;
