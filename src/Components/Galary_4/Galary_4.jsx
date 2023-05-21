//eslint-disable-next-line
import React from 'react';
import img4 from '../../assets/Slider_Img/drone_4.png';
import AOS from 'aos';
AOS.init();

AOS.init({
  // Global settings:
  disable: false, 
  startEvent: 'DOMContentLoaded', 
  initClassName: 'aos-init', 
  animatedClassName: 'aos-animate', 
  useClassNames: false, 
  disableMutationObserver: false, 
  debounceDelay: 50, 
  throttleDelay: 99, 
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 110, 
  delay: 200, 
  duration: 1200, 
  easing: 'ease', 
  once: false, 
  mirror: false, 
  anchorPlacement: 'top-bottom', 

});

import 'aos/dist/aos.css'; 
const Galary_4 = () => {
    return (
        <section className='flex justify-end'>
            <div data-aos="zoom-in" className='bg-gray-400 w-[50%] md:w-[20%] pb-2 md:py-7 border-2 border-blue-950 rounded-sm border-dashed '>
                  <div className='flex justify-center'> <img className='rounded-sm h-[220px] w-[200px]' src={img4} alt="" /> </div>
                  <div className='text-center'>
                  <p>Dji Tello</p>
                   <p>A camera Drone</p>
                   <p>$2000</p>
                   <p>Powered by dji</p>
                  </div>
            </div>
        </section>
    );
};

export default Galary_4;