import React from 'react';
import Cards from './Cards';
import { exploreposters } from '@/constants';

const Hero = () => {
  return (
    <div className="bg-[#121829] py-[40px]">
      <div className="mx-10">
        <p className="font-light">MovieMaze</p>
        <h1 className="text-[50px] font-bold">Filmes</h1>
        <div className="my-[30px] flex h-[60px] w-[300px] items-center justify-between rounded-xl border-[1px] border-[#475069] px-[30px] backdrop:bg-[#32467e]">
          <img src="./search.svg" alt="search" className="h-[30px] w-[30px]" />
          <p className="text-[14px] text-[#475069]">
            Procurar Filmes ou TV Shows
          </p>
        </div>
        <div className="my-[30px] text-[18px] text-[#767E94]">
          <p>120 Itens</p>
        </div>
        <div className="flex w-full flex-row flex-wrap justify-between">
          {exploreposters.map((feature) => (
            <Cards key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
