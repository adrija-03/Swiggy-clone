import React from 'react'
import ScrollableItems from './scrollableItems'

const row1 = [

    {
        imageLink : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/12/11/7293a378-a88e-48cf-b451-da8d3ad31cb0_image2756e6ced814cb42a387a7ed400dfc19d9.JPG",
        restaurantName : "Haveli Dharampura",
        restaurantRatings : "4.1",
    },
    {
        imageLink : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/7/29/a5aba697-125e-4a72-b4bd-af748918e581_SwiggyDineout1080X7202c612ffceb9194372adfb1c18bbdce57e.PNG",
        restaurantName : "Wow! Momo",
        restaurantRatings : "4.5",
    },
    {
        imageLink : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1667811837/univpvf3s8fd2asohxtv.jpg",
        restaurantName : "Oval Bean Cafe",
        restaurantRatings : "4.3",
    },
    {
        imageLink : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/11/27/23400271-2db1-4640-af7d-d47569365c75_image132bd1ab082dc4617a0b77c7c10dfc1af.JPG",
        restaurantName : "Dyve",
        restaurantRatings : "4.5",
    },
    {
        imageLink : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1705324002/614ce1258b980d7aad88fdaad47882ef.jpg",
        restaurantName : "F Bar & Lounge",
        restaurantRatings : "4.0",
    }
]

const DiscoverRestaurants = () => {
  return (
    <div className='w-[80%] mx-auto'>
            <div className='flex justify-between items-center mt-32'>
                <div className='text-2xl font-bold tracking-tight '>Shop groceries on Instamart</div>
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
            <div className="overflow-x-auto no-scrollbar">
                <div className="flex flex-col gap-6 min-w-max">
                    <div className="flex flex-nowrap gap-4">
                        {row1.map((item, index) => (
                            <div key={index} className="shrink-0 rounded-2xl">
                                <img
                                    className="w-36 h-auto min-w-[328px] rounded-tl-2xl rounded-tr-2xl"
                                    src={item.imageLink}
                                    alt={item}
                                />
                                <div className='flex justify-between relative bottom-8 px-3 font-bold text-[20px] leading-[24px] tracking-[-0.5px] text-white'>
                                    <div>{item.restaurantName}</div>
                                    <div className='flex items-center gap-[2px]'>
                                        <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8.00005" cy="7.99999" r="7.2" fill="url(#StoreRating16_svg__paint0_linear_32982_71565)"></circle><path d="M8.06524 10.292C8.02495 10.2683 7.97496 10.2683 7.93466 10.292L5.85313 11.5174C5.54781 11.6972 5.1768 11.4206 5.26191 11.0766L5.8205 8.81958C5.83239 8.77154 5.81567 8.72094 5.77751 8.68943L3.96412 7.19223C3.68661 6.96312 3.82918 6.51269 4.18797 6.48497L6.58754 6.29955C6.63517 6.29587 6.67685 6.2661 6.69578 6.22223L7.63269 4.05109C7.77165 3.72907 8.22825 3.72907 8.36722 4.05109L9.30412 6.22223C9.32305 6.2661 9.36473 6.29587 9.41237 6.29955L11.8119 6.48497C12.1707 6.51269 12.3133 6.96312 12.0358 7.19223L10.2224 8.68943C10.1842 8.72094 10.1675 8.77154 10.1794 8.81958L10.738 11.0766C10.8231 11.4205 10.4521 11.6972 10.1468 11.5174L8.06524 10.292Z" fill="white"></path><defs><linearGradient id="StoreRating16_svg__paint0_linear_32982_71565" x1="8.00005" y1="0.799988" x2="8.00005" y2="15.2" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs></svg></span>
                                        <span className='text-[16px]'>{item.restaurantRatings}</span>
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