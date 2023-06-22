//eslint-disable-next-line
import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DJI from '../DJI/DJI';
import Parrot from '../PARROT/Parrot';
import Skydio from '../SKYDIO/Skydio';
import Xag from '../XAG/Xag';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import Swal from 'sweetalert2';


const React_Tabs = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [Drones, setDrones] = useState([]);

  useEffect(() => {
    fetch('https://drone-bd-server.vercel.app/drones')
      .then((res) => res.json())
      .then((Drone) => setDrones(Drone));
  }, []);

//--------------------------for login alert system------------------------------------
  useEffect(() => {
    if (user) {
      // User is logged in, navigate to the desired page
      const desiredPage = sessionStorage.getItem('desiredPage');
      if (desiredPage) {
        navigate(desiredPage);
        sessionStorage.removeItem('desiredPage');
      }
    }
  }, [user, navigate]);

  const handleButtonClick = (d1) => {
    if (!user) {
        Swal.fire({
            title: 'Please Login First',
          })
      sessionStorage.setItem('desiredPage', `/View_Toy_Data/${d1}`);
      navigate('/login');
    } else {
      navigate(`/View_Toy_Data/${d1}`);
    }
  };

  return (
    <div className="my-2">
      <Tabs>
        <section className="bg-pink-500 py-1 text-[1.4em] font-bold">
          <div className="md:w-[20%] w-[70%] mx-auto">
            <TabList>
              <div className="flex">
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
          <h2 className="text-black grid grid-cols-1 md:grid-cols-3 py-4 md:gap-8 gap-3">
            {Drones.map((d1) => (
              <section key={d1._id}>
                <div className="bg-pink-300 w-[100%] pb-2 md:pt-7 border-2 border-blue-950 rounded-sm border-dashed">
                  <div className="flex justify-center">
                    <img className="rounded-sm h-[220px] w-[200px]" src={d1.photo} alt="" />
                  </div>
                  <div className="text-center">
                    <p>{d1.name}</p>
                    <p>{d1.category}</p>
                    <p>${d1.price}</p>
                    <p>★{d1.updare_rating}★</p>
                    <p>Powered by {d1.seller_same}</p>
                    <button className="btn btn-primary" onClick={() => handleButtonClick(d1._id)}>
                      <Link to={`/View_Toy_Data/${d1._id}`}>View Details</Link>
                    </button>
                  </div>
                </div>
              </section>
            ))}
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
