//eslint-disable-next-line
import React, { useEffect, useState } from 'react';

const Xag = () => {
    const [XAG, setXAG] = useState([])
    useEffect(() => {
        fetch('https://drone-bd-server.vercel.app/xag')
            .then(res => res.json())
            .then(Drone => setXAG(Drone))
    }, [])
    console.log(XAG);
    return (
        <div>

        <h2 className='text-black grid grid-cols-1 md:grid-cols-3 py-4 md:gap-11 gap-3 bg-green-400 '>
            {XAG.map(d1 => <section key={d1._id}>
                <div className='bg-gray-400 w-[100%] pb-2 md:py-7 border-2 border-blue-950 rounded-sm border-dashed '>
                    <div className='flex justify-center'> <img className='rounded-sm h-[220px] w-[200px]' src={d1.photo} alt="" /> </div>
                    <div className='text-center'>
                        <p>{d1.name}</p>
                        <p>{d1.category}</p>
                        <p>${d1.price}</p>
                        <p>Powered by {d1.seller_same}</p>
                    </div>
                </div>
            </section>)
            }
        </h2>
    </div>
    );
};

export default Xag;

