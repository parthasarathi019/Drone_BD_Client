//eslint-disable-next-line
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update_Drone = () => {
    const navigate = useNavigate();
    const Loaded_cofee = useLoaderData()
    console.log(Loaded_cofee);
    const Handle_Update = (event) => {
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
        const update_drone = { name, price, category , select, seller_same , updare_rating , updare_quantity , updare_description , updare_seller_email , photo }
        // console.log(update_drone);

        fetch(`https://drone-bd-server.vercel.app/drones/${Loaded_cofee._id}`, {
            method: "PUT",
            headers: { //---------------------------------------
                "Content-Type": "application/json",
            },
            body: JSON.stringify(update_drone),
        })

            .then(res => res.json())
            .then(update_data => {
                console.log(update_data);
                if (update_data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success',
                        text: 'Your drone data Updated successfully!',
                        icon: 'success',
                        confirmButtonText: '🥰K',
                      })
                      
                      navigate("/My_Toys")
                  }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'please update at least 1 property!',
                      })
                  }
            })
    
    }
    return (
        <div>
            <div className=''>
                <p className='text-[#c16a3b] text-2xl text-center '>Update your information :</p>

                <div className='w-[62%] mx-auto my-6 text-orange-600 border border-black'>
                    <form onSubmit={Handle_Update} className='bg-[#f3f3f3]' action="">
                    <p className='text-2xl text-center text-[#374151] font-bold'>Update Existing Drones Details</p>
                    <p className='md:text-[.9em] text-[.73em] text-center text-[#374151]'>Click here to update drone details.  Here you can update all the details.  Thanks for visiting the update page.</p>
                        <section className='flex'>
                            <div className='w-full'>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold'>Updare Name</p>
                                    <p className='pt-1 md:pt-2'><input defaultValue={Loaded_cofee?.name} name='name' id="name" type='text' required="required" placeholder='Enter Drone Name'  className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold '>Updare Price</p>
                                    <p className='pt-1 md:pt-2'><input  defaultValue={Loaded_cofee?.price}  name='price' id="price" type='text' required="required" placeholder='Enter Drone Price' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold'>Updare Category</p>
                                    <p className='pt-1 md:pt-2'><input defaultValue={Loaded_cofee?.category}  name='category' id="category" type='text' required="required" placeholder='Enter Drone Category' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold'>Updare Seller Name</p>
                                    <p className='pt-1 md:pt-2'><input defaultValue={Loaded_cofee?.seller_same}  name='seller_same' id="seller_same" type='text' required="required" placeholder='Enter Drone Seller Name' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
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
                                    <p className='md:text-[.94em] text-[.85em] font-semibold'>Updare Rating</p>
                                    <p className='pt-1 md:pt-2'><input  defaultValue={Loaded_cofee?.updare_rating} name='updare_rating' id="updare_rating" type='number' required="required" placeholder='Enter Rating' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold'>Updare Quantity</p>
                                    <p className='pt-1 md:pt-2'><input  defaultValue={Loaded_cofee?.updare_quantity}  name='updare_quantity' id="updare_quantity" type='text' required="required" placeholder='Enter Drone Quantity' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold'>Updare Description</p>
                                    <p className='pt-1 md:pt-2'><input  defaultValue={Loaded_cofee?.updare_description}  name='updare_description' id="updare_description" type='text' required="required" placeholder='Enter Drone Description' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold'>Updare Seller Email</p>
                                    <p className='pt-1 md:pt-2'><input defaultValue={Loaded_cofee?.updare_seller_email}   name='updare_seller_email' id="details" type='text' required="required" placeholder='Enter Seller Email' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                            </div>
                        </section>

                        <div className='w-[90.2%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold'>Updare Photo</p>
                                    <p className='pt-1 md:pt-2'><input defaultValue={Loaded_cofee?.photo}   name='photo' id="photo" type='text' required="required" placeholder='Enter drone photo URL' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                        <div className='w-[90.4%] mx-auto pt-3 pb-2'>
                            <p className='pt-1 md:pt-2'><input type="submit" value="update Drone" className=" text-black bg-[#D2B48C] border-2 border-black rounded-md cursor-grab w-full py-2 md:py-[5.52px] pl-1 md:pl-2 text-[.65em] md:text-[1.3em]" /></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update_Drone;

