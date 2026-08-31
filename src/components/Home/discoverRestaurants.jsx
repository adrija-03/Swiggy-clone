import { useState, useEffect } from 'react'

const DiscoverRestaurants = () => {
    const [restaurant, setRestaurant] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/restaurants")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch restaurants")
                }
                return response.json();
            })
            .then((data) => setRestaurant(data))
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false))
    })

    if (loading) return <div className="w-[80%] mx-auto mt-32">Loading...</div>;
    if (error) return <div className="w-[80%] mx-auto mt-32">Error: {error}</div>;

    return (
        <div className='w-[80%] mx-auto'>
            <div className='flex justify-between items-center mt-32 mb-8'>
                <div className='text-2xl font-bold tracking-tight '>Discover best restaurants on Dineout</div>
                <div className='flex'>
                    <div className="rounded-full h-[34px] px-2 pt-2 pb-1 bg-[rgba(2,6,12,0.15)] mr-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 25 25"
                            aria-hidden="true"
                        >
                            <path
                                d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <div className="rounded-full h-[34px] px-2 pt-2 pb-1 bg-[rgba(2,6,12,0.15)]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 25 25"
                            aria-hidden="true"
                        >
                            <path
                                d="M1 12.001h21.086l-5.294-5.295.707-.707L24 12.501l-6.5 6.5-.707-.707 5.293-5.293H1v-1z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto scrollbar">
                <div className="flex flex-col gap-6 min-w-max">
                    <div className="flex flex-nowrap gap-4">
                        {restaurant.map((item) => (
                            <div key={item.id} className="shrink-0 rounded-2xl">
                                <img
                                    className="w-36 h-auto min-w-[328px] rounded-tl-2xl rounded-tr-2xl"
                                    src={item.imageLink}
                                    alt={item.restaurantName}
                                />
                                <div className='flex justify-between relative bottom-8 px-3 font-bold text-[20px] leading-[24px] tracking-[-0.5px] text-white'>
                                    <div>{item.restaurantName}</div>
                                    <div className='flex items-center gap-[2px]'>
                                        <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8.00005" cy="7.99999" r="7.2" fill="url(#StoreRating16_svg__paint0_linear_32982_71565)"></circle><path d="M8.06524 10.292C8.02495 10.2683 7.97496 10.2683 7.93466 10.292L5.85313 11.5174C5.54781 11.6972 5.1768 11.4206 5.26191 11.0766L5.8205 8.81958C5.83239 8.77154 5.81567 8.72094 5.77751 8.68943L3.96412 7.19223C3.68661 6.96312 3.82918 6.51269 4.18797 6.48497L6.58754 6.29955C6.63517 6.29587 6.67685 6.2661 6.69578 6.22223L7.63269 4.05109C7.77165 3.72907 8.22825 3.72907 8.36722 4.05109L9.30412 6.22223C9.32305 6.2661 9.36473 6.29587 9.41237 6.29955L11.8119 6.48497C12.1707 6.51269 12.3133 6.96312 12.0358 7.19223L10.2224 8.68943C10.1842 8.72094 10.1675 8.77154 10.1794 8.81958L10.738 11.0766C10.8231 11.4205 10.4521 11.6972 10.1468 11.5174L8.06524 10.292Z" fill="white"></path><defs><linearGradient id="StoreRating16_svg__paint0_linear_32982_71565" x1="8.00005" y1="0.799988" x2="8.00005" y2="15.2" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop></linearGradient></defs></svg></span>
                                        <span className='text-[16px]'>{item.restaurantRatings}</span>
                                    </div>
                                </div>
                                <div className='shadow-md'>
                                    <div className='text-[13px] text-[rgba(2,6,12,0.6)] font-medium px-3'>
                                        <div className='flex justify-between items-center'>
                                            <div><span>{item.foodType}</span> <span>&middot;</span> <span>{item.foodOrigin}</span></div>
                                            <div>{item.approxAmount} for two</div>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <div>{item.location}</div>
                                            <div>{item.distance} km</div>
                                        </div>
                                    </div>
                                    <div className='px-3 mt-3'>
                                        <div className='flex items-center justify-start gap-0.5 rounded-xl bg-[#f0f0f5] w-[115px] px-2 py-0.5'>
                                            <div className='w-3 h-3'>
                                                <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png'></img>
                                            </div>
                                            <div className='text-[13px] text-[rgba(2,6,12,0.6)] font-medium'>Table booking</div>
                                        </div>
                                    </div>
                                    <div className='px-3 mt-3'>
                                        <div className='flex items-center justify-start gap-0.5 rounded-lg bg-[#1BA672] h-9 px-2 py-0.5'>
                                            <div className='w-6 h-6'>
                                                <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png'></img>
                                            </div>
                                            <div className='text-[16px] text-[#ffffff] font-semibold'>15% off on pre-booking</div>
                                        </div>
                                    </div>
                                    <div className='px-3 mt-3'>
                                        <div className='flex items-center justify-start gap-0.5 rounded-lg bg-[#C8f9e5] h-9 px-2 py-0.5'>
                                            <div className='w-3 h-3'>
                                                <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png'></img>
                                            </div>
                                            <div className='text-[16px] text-[#1BA672] font-semibold'>Up to 10% off with bank offers</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscoverRestaurants