//eslint-disable-next-line
import React from 'react';
import logo from '../../assets/favicon.png'
const Footer = () => {
    return (
        <div className='bg-[#0b1120] text-yellow-100 pt-28 pb-14 '>
        <section className='grid grid-cols-2 md:grid-cols-5 pl-12 list-none gap-y-7 md:gap-y-0 gap-x-6 md:gap-x-3'>
            <div className='pb-1'>
                <li className='text-[2.1em] font-[600] pb-2'>𝓓𝓻𝓸𝓷𝓮 𝓑𝓓</li>
                <li className='pt-1'><img className='w-[46%]' src= {logo} alt="" /></li>
                <li>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration some form.</li>
            </div>
            <div className='leading-[2.2em]'>
                <li className='text-[1.5em] font-[500]'>Company</li>
                <li>About Us</li>
                <li>Work</li>
                <li>Latest News</li>
                <li>Careers</li>
            </div>
            <div className='leading-[2.2em]'>
                <li className='text-[1.5em] font-[500]'>Product</li>
                <li>Prototype</li>
                <li>Plans & Pricing</li>
                <li>Customers</li>
                <li>Integrations</li>
            </div>
            <div className='leading-[2.2em]'>
                <li className='text-[1.5em] font-[500]'>Support</li>
                <li>Help Desk</li>
                <li>Sales</li>
                <li>Become a Partner</li>
                <li>Developers</li>
            </div>
            <div className='leading-[2.2em]'>
                <li className='text-[1.5em] font-[500]'>Contact</li>
                <li>524 Broadway , NYC</li>
                <li>+1 777 - 978 - 5570</li>
            </div>
        </section>
        <hr className='w-[92%] mx-auto' />
        <section className='flex justify-between px-12'>
        <div>@2023 𝓓𝓻𝓸𝓷𝓮 𝓑𝓓. All Rights Reserved</div>
        <div>Powered by 𝓓𝓻𝓸𝓷𝓮 𝓑𝓓</div>
        </section>
    </div>
    );
};

export default Footer;
//