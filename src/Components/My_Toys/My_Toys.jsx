//eslint-disable-next-line
import React, { useContext, useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../Providers/AuthProviders';


const My_Toys = () => {
useTitle('My Toys')
  const { user } = useContext(AuthContext)
  console.log(user);
  //eslint-disable-next-line
  const [Boookings, seBoookings] = useState([])
  const url = (`https://drone-bd-server.vercel.app/mydrones?email=${user?.email}`)
  useEffect(() => {
    fetch(url)

      .then(res => res.json())
      .then((data) => {
        seBoookings(data);
      })
  }, [url])

  const handle_delete = (_id) => {
    console.log(_id);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
           
            fetch(`https://drone-bd-server.vercel.app/drones/${_id}`, {method: "DELETE"} ,

            )
            .then(res => res.json())
            .then(delete_data => {
                // console.log(delete_data);
                if (delete_data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your drone data been deleted.',
                        'success'
                    )
                }
                const remaining = Boookings.filter(Boooking => Boooking._id !== _id)
                seBoookings(remaining)
              })
        }
    })
   
}
  return (
    <div>
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Delete</th>
            <th>Picture</th>
            <th>Available Quantity</th>
            <th>Sub-catagory</th>
            <th>See More...</th>
            <th>Update</th>
          </tr>
        </thead>
        {/* 


View Details button */}
        <tbody>
          {
            Boookings.map(Drone => <tr key={Drone._id}>
              <th>
                <button  onClick={() => { handle_delete(Drone._id) }} className="btn btn-square btn-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
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
                <span className="badge badge-ghost badge-sm">{Drone.updare_quantity}</span>
              </td>
              <td>{Drone.category}</td>
              <th>
                 <button  className="btn btn-primary"><Link to = {`/View_Toy_Data/${Drone._id}`}>View Details</Link></button>
              </th>
              <th>
                 <button  className="btn btn-primary"><Link to = {`/Update_Drone/${Drone._id}`}>Update</Link></button>
              </th>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default My_Toys;