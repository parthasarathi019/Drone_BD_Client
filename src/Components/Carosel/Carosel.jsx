//eslint-disable-next-line
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/Slider_Img/drone_1.png'
import img2 from '../../assets/Slider_Img/drone_2.jpg'
import img3 from '../../assets/Slider_Img/drone_3.png'
import img4 from '../../assets/Slider_Img/drone_4.png'
import img5 from '../../assets/Slider_Img/drone_5.png'
import img6 from '../../assets/Slider_Img/drone_6.png'
import img7 from '../../assets/Slider_Img/drone_7.png'
import img8 from '../../assets/Slider_Img/drone_8.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carosel.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function Carosel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-[100%] h-[510px] mx-auto' src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[100%] h-[510px] mx-auto' src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[100%] h-[510px] mx-auto' src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[100%] h-[510px] mx-auto' src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[100%] h-[510px] mx-auto' src={img5} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[100%] h-[510px] mx-auto' src={img6} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[100%] h-[510px] mx-auto' src={img7} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[100%] h-[510px] mx-auto' src={img8} alt="" /></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg fill='black' viewBox="0 0 48 48" ref={progressCircle}>
            <circle className='bg-yellow-300' cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}



