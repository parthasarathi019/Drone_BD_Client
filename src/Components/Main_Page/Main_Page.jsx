//eslint-disable-next-line
import React from 'react';
import Slider from '../Slider/Slider';
import Carosel from '../Carosel/Carosel';
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
import React_Tabs from '../React_Tabs/React_Tabs';
import useTitle from '../../../hooks/useTitle';
import Galary from '../Galary/Galary';
import Galary_2 from '../Galary_2/Galary_2';
import Galary_3 from '../Galary_3/Galary_3';
import Galary_4 from '../Galary_4/Galary_4';
import Galary_5 from '../Galary_5/Galary_5';
import Galary_6 from '../Galary_6/Galary_6';
import Sponsors from '../Sponsors/Sponsors';
import Happy_Client from '../Happy_Client/Happy_Client';

const Main_Page = () => {
    useTitle('Main')
    return (
        <div>
            <Slider></Slider>
            <div className='mt-3'><Carosel></Carosel></div>
            <Galary></Galary>
            <Galary_2></Galary_2>
            <Galary_3></Galary_3>
            <Galary_4></Galary_4>
            <Galary_5></Galary_5>
            <Galary_6></Galary_6>
            <React_Tabs></React_Tabs>
            <Sponsors></Sponsors>
            <Happy_Client></Happy_Client>
        </div>
    );
};

export default Main_Page;
//