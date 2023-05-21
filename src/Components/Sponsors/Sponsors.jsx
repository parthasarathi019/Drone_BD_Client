//eslint-disable-next-line
import React from 'react';
import Marquee from 'react-fast-marquee';
import sp1 from '../../assets/Sponsors/d.png';
import sp2 from '../../assets/Sponsors/d2.png';
import sp3 from '../../assets/Sponsors/d3.png';
import sp4 from '../../assets/Sponsors/d4.png';
import sp5 from '../../assets/Sponsors/d5.png';
import sp6 from '../../assets/Sponsors/d6.png';

const Sponsors = () => {
    return (
        <div>
            <p className='text-center font-bold md:text-[2.5em] text-[.87em] '>Our Sponsors</p>
            <Marquee className='p-5 bg-yellow-400 font-bold' speed={130}>
                    <img className='pr-5' src={sp1} alt="" />
                    <img className='pr-5' src={sp2} alt="" />
                    <img className='pr-5' src={sp3} alt="" />
                    <img className='pr-5' src={sp4} alt="" />
                    <img className='pr-5' src={sp4} alt="" />
                    <img className='pr-5' src={sp5} alt="" />
                    <img className='pr-5' src={sp6} alt="" />
            </Marquee>
        </div>
    );
};

export default Sponsors;