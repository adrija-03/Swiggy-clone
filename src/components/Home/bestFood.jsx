import React from 'react'

const row1 = [
    "Burger",
    "Pizza",
    "Cake",
    "North Indian",
    "Biryani",
    "Rolls",
    "Chinese",
    "Momo",
    "Dosa",
    "Chinese",
];

const row2 = [
    "Kebab",
    "Shawarma",
    "South Indian",
    "Pastry",
    "Paratha",
    "Ice Cream",
    "Pasta",
    "Rasmalai",
    "Pure Veg",
    "Gulab Jamun",
];


const BestFood = () => {
    return (
        <div className='w-[80%] mx-auto'>
            <div className='flex justify-between items-center mt-32'>
                <div className='text-2xl font-bold tracking-tight '>Order our best food options</div>
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

                    {/* Row 1 */}
                    <div className="flex flex-nowrap gap-6">
                        {row1.map((item, index) => (
                            <button key={index} className="shrink-0">
                                <img
                                    className="w-36 h-auto"
                                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/${item.replace(" ", "%20")}.png`}
                                    alt={item}
                                />
                            </button>
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-nowrap gap-6">
                        {row2.map((item, index) => (
                            <button key={index} className="shrink-0">
                                <img
                                    className="w-36 h-auto"
                                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/${item.replace(" ", "%20")}.png`}
                                    alt={item}
                                />
                            </button>
                        ))}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default BestFood