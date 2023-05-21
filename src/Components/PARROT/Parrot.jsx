//eslint-disable-next-line
import React, { useEffect, useState } from 'react';

const Parrot = () => {
    const [PARROT, setPARROT] = useState([])
    useEffect(() => {
        fetch('https://drone-bd-server.vercel.app/parrot')
            .then(res => res.json())
            .then(Drone => setPARROT(Drone))
    }, [])
    console.log(PARROT);
    return (
        <div>

        <h2 className='text-black grid grid-cols-1 md:grid-cols-3 py-4 md:gap-11 gap- '>
            {PARROT.map(d1 => <section key={d1._id}>
                <div className='bg-pink-300 w-[100%] pb-2 md:py-7 border-2 border-blue-950 rounded-sm border-dashed '>
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

export default Parrot;