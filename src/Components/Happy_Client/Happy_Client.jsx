//eslint-disable-next-line
import React from 'react';
import LazyLoad from 'react-lazyload';

const Happy_Client = () => {
    return (
        <section>
            <div className='bg-[url("https://images.squarespace-cdn.com/content/v1/5fb43dd79d63ac327876d9d8/1659831123917-19QRZSXLHRBUNQMKJ021/top+view+of+flowers.jpg?format=2500w")]' >
                <div>
                    <h2 className='text-center text-orange-500 text-4xl  py-6 '>Our clients Reviews...</h2>
                </div>
                <div className='flex gap-3 m-3 flex-col md:flex-row md:justify-evenly py-4'>

                    <div className="card  hover:bg-gradient-to-r from-[#e86d7c] to-[#bc86d2] p-8 p-8 shadow-xl">
                        <figure><LazyLoad><img className='w-[80px] h-[71px] rounded-[500px] mt-4' src="https://img.freepik.com/free-photo/friendly-smiling-woman-looking-pleased-front_176420-20779.jpg?size=626&ext=jpg&ga=GA1.1.1436565612.1673088567&semt=sph" alt="Shoes" /></LazyLoad></figure>
                        <div className="card-body text-center">
                        <div><h2 className=" text-center text-lg text-orange-500">Geeta Devi</h2> <h2 className=" text-center text-lg text-orange-500">CEO of Parrot</h2></div>
                            <p>Lively atmosphere with nice Indian music playing on a decent sound system. Nice staff and good service. Food was good and freshly prepared. Samosas had way too much chili flakes. I like them with spice but not loads of chili flakes. Tandori chicken was tasty though hotter in terms of spice than I am used too. I recommend trying this place especially if you like hot and spicy food.</p>
                            <div className="">
                                <div className="rating">
                                    <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card  hover:bg-gradient-to-r from-[#bcbaa9] to-[#e69f98] shadow-xl">
                        <figure><LazyLoad><img className='w-[80px] h-[71px] rounded-[500px] mt-4' src="https://img.freepik.com/free-photo/business-concept-portrait-confident-young-businesswoman-keeping-arms-crossed-looking-camera-w_1258-104422.jpg?size=626&ext=jpg&ga=GA1.1.1436565612.1673088567&semt=sph" alt="Shoes" /></LazyLoad></figure>
                        <div className="card-body text-center">
                            <div><h2 className=" text-center text-lg text-orange-500">Geeta Devi</h2> <h2 className=" text-center text-lg text-orange-500">CEO of Dji Corporaration</h2></div>
                            <p>Excellent quality and ambiance. Indian food in Princeton varies a lot and it,s difficult to find a consistent experience, even at one restaurant. I hesitate to give a huge, glowing review based on one visit, but if the second visit is anything like the first, I,ll go to 5 stars. I had the Cashmere Chicken and my bf had the Chicken Vindaloo and it was all extremely tasty. Pleasant, attentive staff. Loved it!</p>
                            <div className="">
                                <div className="rating">
                                    <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" checked />
                                    <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" checked />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card  hover:bg-gradient-to-r from-[#e1a92e] to-pink-500">
                        <figure><LazyLoad><img className='w-[80px] h-[71px] rounded-[500px] mt-4' src="https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg?size=626&ext=jpg&ga=GA1.1.1436565612.1673088567&semt=sph" alt="Shoes" /></LazyLoad></figure>
                        <div className="card-body text-center">
                        <div><h2 className=" text-center text-lg text-orange-500">Geeta Devi</h2> <h2 className=" text-center text-lg text-orange-500">CEO of XAG</h2></div>
                            <p>My family and I have been to Cross Culture twice since it,s opening. We have been pleased to find the dishes very good. We have ordered the bhindi masala which was wonderful tasting (although I would have loved more okra), the chicken tandoori, chicken vindaloo, and a vegetarian dish that I have forgotten the name of. We will definitely be heading there again soon!!</p>
                            <div className="">
                                <div className="rating">
                                    <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          
        </section>
    );
};

export default Happy_Client;
//complete
