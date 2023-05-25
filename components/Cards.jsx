import React from 'react';

const Cards = () => {
  return (
    <div className="relative h-[480px] w-[282px]">
      <img
        src="./poster.svg"
        alt="Poster"
        className="h-full w-full object-cover"
      />
      <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-between rounded-[12px]">
        <div className="mx-[5px] my-[5px] flex h-[30px] w-[55px] flex-row place-content-center content-center items-center justify-between rounded-xl bg-[#000000] px-[5px] font-bold opacity-[85%]">
          <img src="./star.svg" alt="star" className="w-[15px]" />
          <p className="text-[15px] font-light text-[#FFAD49]">6.5</p>
        </div>
        <div className="grid h-[60px] w-full content-center justify-center bg-[#000000] opacity-[85%]">
          <p className="self-start text-[16px] font-semibold">Viúva Negra</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
