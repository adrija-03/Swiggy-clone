import { useEffect, useState } from 'react'
import ScrollableItems from './scrollableItems';

const ShopGroceries = () => {
    const [grocery, setGrocery] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/grocery")
        .then((response) => {
            if(!response.ok){
                throw new Error("Failed to fetch grocery")
            }
            return response.json();
        })
        .then((data) => setGrocery(data))
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
    }, [])

    if (loading) return <div className="w-[80%] mx-auto mt-32">Loading...</div>;
    if (error) return <div className="w-[80%] mx-auto mt-32">Error: {error}</div>;

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
            <div className="overflow-x-auto scrollbar mt-3">
                <div className="flex flex-col gap-6 min-w-max">
                    <ScrollableItems
                    list = {grocery}/>
                </div>
            </div>
        </div>
    )
}

export default ShopGroceries