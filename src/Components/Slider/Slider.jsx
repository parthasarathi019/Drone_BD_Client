//eslint-disable-next-line
import React from 'react';
import img from '../../assets/banner.jpeg';

const Slider = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute bg-white top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center md:bg-top"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className='md:pt-[139px] pt-[85px]'>
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <h1 className="md:text-[71px] text-[31px] font-bold text-white text-center">Buy your favorite drone from here</h1>
        <p className="mt-4 md:text-[19px] text-[9px] text-white text-center">We give you the guarantee of fulfilling your hobby within your means</p>
      </div>
      </div>
    </div>
  );
};

export default Slider;
