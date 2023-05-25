import React from 'react';

export const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-[#121829] px-10 py-10 text-white">
      <img src="./logo.png" alt="logo" className="h-[30px] w-[30px]" />
      <div className="flex flex-row text-[#A8AEBF]">
        <p className="mx-[15px] font-bold">Filmes</p>
        <p className="mx-[15px] font-bold ">TV</p>
        <div className="flex flex-row">
          <p className="mx-[15px] font-bold">Sugestões</p>
          <img
            src="./arrow-right.svg"
            alt="arrow-right"
            className="h-[20px] w-[20px]"
          />
        </div>
      </div>
    </div>
  );
};
