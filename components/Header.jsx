import React from 'react';

export const Header = () => {
  return (
    <div className="px-10 py-10 bg-[#121829] text-white flex flex-row justify-between items-center">
      <img src="./logo.svg" alt="logo" />
      <div className="flex flex-row text-[#A8AEBF]">
        <p className="mx-[15px] font-bold">Movies</p>
        <p className="mx-[15px] font-bold ">TV Shows</p>
        <div className="flex flex-row">
          <p className="mx-[15px] font-bold">Suggest me</p>
          <img
            src="./arrow-right.svg"
            alt="arrow-right"
            className="w-[20px] h-[20px]"
          />
        </div>
      </div>
    </div>
  );
};
