//eslint-disable-next-line
import React, { useContext } from 'react';
import {  Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
//eslint-disable-next-line
import { useEffect, useState } from "react";
import Active_Route from '../Active_Route/Active_Route';
import logo from '../../assets/logo.png';
import { AuthContext } from '../Providers/AuthProviders';

const Header = () => {
    const [open, setOpen] = useState(false);
    const { user , Log_Out} = useContext(AuthContext)
    const handle_logout = () => {

        Log_Out() // ʙᴇʜɪɴᴅ ᴛʜᴇ sᴇᴇɴ Log_Out = signOut(auth) ... .. . so,
        .then(() => {})

        .catch((error) => { console.log(error)});
    }

console.log(user);
    return (
        <>
            <nav
            //eslint-disable-next-line
                x-data="{ isOpen: false }"
                className="relative bg-gradient-to-b from-[#a1a49b] to-[#618fa1]  shadow sticky top-0 z-50 md:py-3 py-2"
            >
                <div className="container px-6 py-3 mx-auto">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className='flex flex-col justify-center items-center'>
                                    <img className="md:w-[6.6875em] w-[3.9375em] "src={logo} alt=""/>
                                    <p>Drone BD</p>
                                </div>

                                <div className="hidden mx-10 md:block">
                                    {/* <div className="relative">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                            <MagnifyingGlassIcon className="h-6 text-gray-500" />
                                        </span>

                                        <input
                     
                      type="text"
                      className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md   focus:border-blue-400  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                      placeholder="Search"
                    />

                                    </div> */}
                                </div>
                            </div>

                            <div className="flex lg:hidden">
                                <button
                                    onClick={() => {
                                        //eslint-disable-next-line
                                        setOpen(!open);
                                    }}
                                    type="button"
                                    className={`text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 `}
                                    aria-label="toggle menu"
                                >
                                    <Bars3Icon className="h-6 text-gray-500" />
                                </button>
                            </div>
                        </div>

                        <div
                            className={`   ${open
                                    ? "translate-x-0 opacity-100 "
                                    : "opacity-0 -translate-x-full"
                                } absolute inset-x-0 z-20 w-full px-6 py-2 transition-all duration-300 ease-in-out md:bg-transparent top-24  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center bg-[#4d666d]`}
                        >
                            <div className="flex flex-col items-center md:flex-row md:mx-1 text-white">
                                <Active_Route to="/">
                                    <a
                                        className={`cursor-pointer my-2 text-sm leading-5 transition-colors duration-300 transform  hover:underline md:mx-4 md:my-0`}
                                    >
                                        Home
                                    </a>
                                </Active_Route>

                                <Active_Route to="/All_Toys">
                                    <a
                                        className={`cursor-pointer my-2 text-sm leading-5 transition-colors duration-300 transform  hover:underline md:mx-4 md:my-0`}
                                    >
                                        All Toys
                                    </a>
                                </Active_Route>
                                <Active_Route to="/Blogs">
                                    <a
                                        className={`cursor-pointer my-2 text-sm leading-5 transition-colors duration-300 transform   hover:underline md:mx-4 md:my-0`}
                                    >
                                       Blogs
                                    </a>
                                </Active_Route>
                               {
                                user &&  <Active_Route to="/My_Toys">
                                <a
                                    className={`cursor-pointer my-2 text-sm leading-5 transition-colors duration-300 transform   hover:underline md:mx-4 md:my-0`}
                                >
                                   My Toys
                                </a>
                            </Active_Route>
                               }
                                {
                                    user && 
                                    <Active_Route to="/Add_A_Toy">
                                    <a
                                        className={`cursor-pointer my-2 text-sm leading-5 transition-colors duration-300 transform   hover:underline md:mx-4 md:my-0`}
                                    >
                                      Add Toy
                                    </a>
                                </Active_Route>
                                }
                               <section className='flex items-center'>
                               {
                                    user ?  <img className='h-12 w-12 rounded-full' src={user?.photoURL} alt="" title={user?.displayName}/> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                  </svg>
                                  
                                   }
                              {
                                user ?  <div onClick={handle_logout} >
                                    <Active_Route to="/login">
                                <a
                                    className={`cursor-pointer my-2 text-sm leading-5 transition-colors duration-300 transform   hover:underline md:mx-4 md:my-0`}
                                >
                                  Logout
                                </a>
                            </Active_Route>
                                </div> : 
                             <Active_Route to="/login">
                             <a
                                 className={`cursor-pointer my-2 text-sm leading-5 transition-colors duration-300 transform   hover:underline md:mx-4 md:my-0`}
                             >
                               login
                             </a>
                         </Active_Route>
                              }
                               </section>
                            </div>
                            <div className="my-4 md:hidden">
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <MagnifyingGlassIcon className="h-6 text-gray-500" />
                                    </span>

                                    <input
                                        type="text"
                                        className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md   focus:border-blue-400  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                        placeholder="Search"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
}

export default Header;
