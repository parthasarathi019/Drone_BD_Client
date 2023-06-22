//eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';


const All_Toys = () => {
  useTitle('All Toys')
  const Loaded_Drones = useLoaderData()
  const [totalData ,setTotalDate] = useState(Loaded_Drones)
  const [searchText, setSearchText] = useState('')
  const [Show_All , setShow_All] = useState(false)
  const handle_show_all = () => {
    setShow_All(true)
}

  
const handleSearch = () => {
  fetch(`https://drone-bd-server.vercel.app/searchText/${searchText}`)
  .then(res => res.json())
  .then(data => {
    setTotalDate(data);
  })
}

   


  console.log(searchText);

  return (
    <section>
      <div className="flex justify-center items-center gap-x-3">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className=" py-2 pl-10 pr-4 w-[30%] text-gray-700 bg-white border rounded-md   focus:border-blue-400  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
          placeholder="Search"
        />
        <button onClick={handleSearch} className='btn btn-primary'>Search</button>
      </div>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                </th>
                <th>Picture</th>
                <th>Available Quantity</th>
                <th>Sub-category</th>
                <th>See More...</th>
              </tr>
            </thead>
            {/* 


View Details button */}
            <tbody>
              {
                totalData?.slice(0 , Show_All ? 999999999999999 : 20).map(Drone => <tr key={Drone._id}>
                  <th>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={Drone.photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{Drone.name}</div>
                        <div className="text-sm opacity-50">${Drone.price}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>On Stock:</p>
                    <br />
                    <span className="badge badge-ghost badge-sm">{Drone.updare_quantity} pcs available</span>
                  </td>
                  <td>{Drone.category}</td>
                  <th>
                    <button className="btn btn-primary"><Link to={`/View_Toy_Data/${Drone._id}`}>View Details</Link></button>
                  </th>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
     {!Show_All &&
       <div className='flex justify-center'><button onClick={handle_show_all} className='btn btn-primary'>See more...</button></div>
     }
    </section>
  );
};

export default All_Toys;


