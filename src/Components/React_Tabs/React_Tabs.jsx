
//eslint-disable-next-line
import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DJI from '../DJI/DJI';
import Parrot from '../PARROT/Parrot';
import Skydio from '../SKYDIO/Skydio';
import Xag from '../XAG/Xag';
import { Link } from 'react-router-dom';
const React_Tabs = () => {

    const [Drones, setDrones] = useState([])
    useEffect(() => {
        fetch('https://drone-bd-server.vercel.app/drones')
            .then(res => res.json())
            .then(Drone => setDrones(Drone))
    }, [])
    console.log(Drones);

    // const { _id, name, photo, price, seller_same, updare_description, updare_quantity, updare_rating, updare_seller_email } = View_Toy_Data

    return (
        <div >
            <Tabs>
               <section className=' bg-red-500'>
               <div className='md:w-[20%] w-[70%] mx-auto'>
                    <TabList>
                        <div className='flex'>
                        <Tab>All</Tab>
                        <Tab>DJI</Tab>
                        <Tab>Parrot</Tab>
                        <Tab>Skydio</Tab>
                        <Tab>XAG</Tab>
                        </div>
                    </TabList>
                </div>
               </section>

                <TabPanel>
                    <h2 className='text-black grid grid-cols-1 md:grid-cols-3 py-4 md:gap-8 gap-3'>
                        {Drones.map(d1 =>  <section key={d1._id}>
            <div className='bg-pink-300 w-[100%] pb-2 md:pt-7 border-2 border-blue-950 rounded-sm border-dashed '>
                  <div className='flex justify-center'> <img className='rounded-sm h-[220px] w-[200px]' src={d1.photo} alt="" /> </div>
                  <div className='text-center'>
                  <p>{d1.name}</p>
                   <p>{d1.category}</p>
                   <p>${d1.price}</p>
                   <p>★{d1.updare_rating}★</p>
                   <p>Powered by {d1.seller_same}</p>
                   <button  className="btn btn-primary"><Link to = {`/View_Toy_Data/${d1._id}`}>View Details</Link></button>

                  </div>
            </div>
        </section>)
                        }
                    </h2>
                </TabPanel>
                <TabPanel>
                    <DJI></DJI>
                </TabPanel>
                <TabPanel>
                    <Parrot></Parrot>
                </TabPanel>
                <TabPanel>
                    <Skydio></Skydio>
                </TabPanel>
                <TabPanel>
                    <Xag></Xag>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default React_Tabs;
