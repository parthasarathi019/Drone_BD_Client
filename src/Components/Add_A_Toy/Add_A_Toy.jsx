//eslint-disable-next-line
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { useLoaderData } from 'react-router-dom';
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

const Add_A_Toy = () => {
    const navigate = useNavigate();
    useTitle('Add A Toy')
    // const Loaded_cofee = useLoaderData()
    // console.log(Loaded_cofee);
    const Handle_Add = (event) => {
        event.preventDefault();
        const Full_Form = event.target
        const name = Full_Form.name.value
        const price = Full_Form.price.value
        const category = Full_Form.category.value
        const seller_same = Full_Form.seller_same.value
        const select = Full_Form.select.value

        const updare_rating = Full_Form.updare_rating.value
        const updare_quantity = Full_Form.updare_quantity.value
        const updare_description = Full_Form.updare_description.value
        const updare_seller_email = Full_Form.updare_seller_email.value

        const photo = Full_Form.photo.value
        const Add_drone = { name, price, category, seller_same, updare_rating, updare_quantity, updare_description, updare_seller_email, photo ,select }
        console.log(Add_drone);

        fetch("https://drone-bd-server.vercel.app/drones/",
        {
            method: "POST",//-----------------------------------
            headers: { //---------------------------------------
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Add_drone),
        }
    )
        .then(res => res.json())
        .then(drone_data => {
            console.log(drone_data);
            if (drone_data.insertedId) {
                Swal.fire({
                    title: 'success',
                    text: 'Your Drone data added successfully!',
                    icon: 'success',
                    confirmButtonText: '🥰K',
                  })
                  
                  navigate("/")
            }
        })

    }

    
    return (
        <div data-aos="zoom-in" className='bg-white'> 
            <div className=''>
                <p className='text-[#c16a3b] text-2xl text-center '>Add your information :</p>

                <div className='w-[62%] mx-auto my-6 text-orange-600 border border-black'>
                    <form onSubmit={Handle_Add} className='bg-[#f3f3f3]' action="">
                        <p className='text-2xl text-center text-[#374151] font-bold'>Add Existing Drones Details</p>
                        <p className='md:text-[.9em] text-[.73em] text-center text-[#374151]'>Click here to Add drone details.  Here you can Add all the details.  Thanks for visiting the Add page.</p>
                        <section className='flex'>
                            <div className='w-full'>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold'>Add Name</p>
                                    <p className='pt-1 md:pt-2'><input name='name' id="name" type='text' required="required" placeholder='Enter Drone Name' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold '>Add Price</p>
                                    <p className='pt-1 md:pt-2'><input name='price' id="price" type='text' required="required" placeholder='Enter Drone Price' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold'>Add Category</p>
                                    <p className='pt-1 md:pt-2'><input name='category' id="category" type='text' required="required" placeholder='Enter Drone Category' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold'>Add Seller Name</p>
                                    <p className='pt-1 md:pt-2'><input name='seller_same' id="seller_same" type='text' required="required" placeholder='Enter Drone Seller Name' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold'>Add Company</p>
                                    <p ><select name='select' id="select">
                                        <option value="DJI">DJI</option>
                                        <option value="Parrot">Parrot</option>
                                        <option value="Skydio">Skydio</option>
                                        <option value="XAG">XAG</option>
                                    </select></p>
                                </div>
                            </div>
                            <div className='w-full'>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold'>Add Rating</p>
                                    <p className='pt-1 md:pt-2'><input name='updare_rating' id="updare_rating" type='number' required="required" placeholder='Enter Rating' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold'>Add Quantity</p>
                                    <p className='pt-1 md:pt-2'><input name='updare_quantity' id="updare_quantity" type='number' required="required" placeholder='Enter Drone Quantity' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold'>Add Description</p>
                                    <p className='pt-1 md:pt-2'><input name='updare_description' id="updare_description" type='text' required="required" placeholder='Enter Drone Description' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold'>Add Seller Email</p>
                                    <p className='pt-1 md:pt-2'><input name='updare_seller_email' id="details" type='text' required="required" placeholder='Enter Seller Email' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                            </div>
                        </section>

                        <div className='w-[90.2%] mx-auto pt-3'>
                            <p className='md:text-[.94em] text-[.85em] font-semibold'>Add Photo</p>
                            <p className='pt-1 md:pt-2'><input name='photo' id="photo" type='text' required="required" placeholder='Enter drone photo URL' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                        </div>

                        <div className='w-[90.4%] mx-auto pt-3 pb-2'>
                            <p className='pt-1 md:pt-2'><input type="submit" value="Add a Drone" className=" text-black bg-[#D2B48C] border-2 border-black rounded-md cursor-grab w-full py-2 md:py-[5.52px] pl-1 md:pl-2 text-[.65em] md:text-[1.3em]" /></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Add_A_Toy;
//