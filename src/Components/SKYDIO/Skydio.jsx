//eslint-disable-next-line
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import Swal from 'sweetalert2';

const Skydio = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [SKYDIO, setSKYDIO] = useState([])
    useEffect(() => {
        fetch('https://drone-bd-server.vercel.app/skydio')
            .then(res => res.json())
            .then(Drone => setSKYDIO(Drone))
    }, [])
    console.log(SKYDIO);
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
        <div>

            <h2 className='text-black grid grid-cols-1 md:grid-cols-3 py-4 md:gap-11 gap-3 '>
                {SKYDIO.map(d1 => <section key={d1._id}>
                    <div className='bg-pink-300 w-[100%] pb-2 md:py-7 border-2 border-blue-950 rounded-sm border-dashed'>
                        <div className='flex justify-center'> <img className='rounded-sm h-[220px] w-[200px]' src={d1.photo} alt="" /> </div>
                        <div className='text-center'>
                            <p>{d1.name}</p>
                            <p>{d1.category}</p>
                            <p>${d1.price}</p>
                            <p>Powered by {d1.seller_same}</p>
                            <button className="btn btn-primary" onClick={() => handleButtonClick(d1._id)}>
                                <Link to={`/View_Toy_Data/${d1._id}`}>View Details</Link>
                            </button>
                        </div>
                    </div>
                </section>)
                }
            </h2>
        </div>
    );
};

export default Skydio;
