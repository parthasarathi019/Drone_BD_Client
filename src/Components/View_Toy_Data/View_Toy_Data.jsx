//eslint-disable-next-line
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AOS from 'aos';
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 110, // offset (in px) from the original trigger point
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 1200, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

import 'aos/dist/aos.css'; // You can also use <link> for styles
import useTitle from '../../../hooks/useTitle';

const View_Toy_Data = () => {
    useTitle('View Toy Data')
    const View_Toy_Data = useLoaderData()
    //eslint-disable-next-line
    const { _id, name, photo, price, seller_same, updare_description, updare_quantity, updare_rating, updare_seller_email } = View_Toy_Data
    console.log(View_Toy_Data);

    return (
        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='md:bg-transparent bg-white'>
            <div className=' w-[98%] md:w-[50%] mx-auto rounded-md my-3 border-2 border-blue-900'>
                <div className='flex gap-x-5 flex-col md:flex-row items-center justify-evenly'>
                    <div><img className='w-[400px] h-[300px] ' src={photo} alt="Drone" /></div>
                    <div className=' leading-8'>
                        <p className='text-[2em] italic font-bold'>{name}</p>
                        <p className='font-bold'>{seller_same}</p>
                        <p className=''>{updare_seller_email}</p>
                        <p className=''>${price}</p>
                        <p className=''>{updare_rating} ✹</p>
                        <p className=''>{updare_quantity} Pcs Available</p>
                        <p className=''>{updare_description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View_Toy_Data;