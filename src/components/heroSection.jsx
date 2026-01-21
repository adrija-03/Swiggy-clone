import React from 'react';

export default function HeroSection() {
    return (
        <div className='bg-[#FF5200]'>
            <div className='pt-[30px] w-full'></div>
            <div className='flex items-center justify-around'>
                <div className='w-[160px] h-[48px]'>
                    <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png' alt='Swiggy'></img></div>
                <div>
                    <div className='flex items-center justify-around w-[130%] text-white font-[Inter] text-[16px] font-semibold leading-[21px] tracking-[-0.4px] cursor-pointer z-[10000]'>
                        <div>Swiggy Corporate</div>
                        <div>Partner with us</div>
                        <div class="border border-solid p-[15px] rounded-[12px] flex gap-1">
                            <div>Get the app</div>
                            <div className="-rotate-45">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" aria-label="rating-up-down-icon" aria-hidden="false" strokecolor="#FFFFFF" fillcolor="#FFFFFF"><path d="M12.634 3.45a1 1 0 0 0-1.365 1.462l4.827 4.506c.238.221.44.41.614.577H2.996a1 1 0 0 0 0 2h13.777c-.186.18-.41.39-.677.64l-4.769 4.45a1 1 0 0 0 1.365 1.462l4.817-4.495c.546-.51 1.03-.96 1.367-1.376.365-.449.664-.979.664-1.65 0-.672-.299-1.201-.664-1.65-.338-.415-.821-.866-1.367-1.376z" fill="#FFFFFF" fill-opacity="0.92"></path></svg>
                            </div>
                        </div>
                        <div class="bg-black rounded-[16px] p-[15px]">Sign up</div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center flex-col pt-16 pb-10 px-0 relative top-2'>
                <img className='h-[450px] w-[250px] absolute top-0 left-0' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png'></img>
                <div className='w-[60%] text-center mx-auto my-0 text-white font-[Inter] text-[48px] font-semibold leading-[56px] tracking-[-0.3px]'>
                    Order food & groceries. Discover best restaurants. Swiggy it!</div>
                <div className='flex items-center justify-around mt-2'>
                    <div className='flex items-center justify-around w-[302px] h-[58] rounded-xl bg-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 23" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.115 21.8122C12.4772 19.4062 17.7886 13.4751 17.7886 8.78883C17.7886 3.79647 13.9976 0 9.00526 0C4.0129 0 0.210938 3.79647 0.210938 8.78883C0.210938 13.4755 5.52998 19.4073 7.89476 21.8129C8.51149 22.4403 9.49871 22.44 10.115 21.8122ZM8.99988 12.7888C11.4269 12.7888 13.3943 10.8214 13.3943 8.39441C13.3943 5.96745 11.4269 4 8.99988 4C6.57292 4 4.60547 5.96745 4.60547 8.39441C4.60547 10.8214 6.57292 12.7888 8.99988 12.7888Z" fill="#FF5200"></path></svg>
                        <input placeholder='Enter your delivery location ' className='h-[58px] w-[204px]'></input>
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" aria-label="rating-down-down-icon" aria-hidden="false" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.372 6.15a1.1 1.1 0 0 0-.117 1.552l7.184 8.355.03.035c.149.173.327.381.504.536.212.186.564.427 1.058.427s.847-.24 1.059-.427c.177-.155.355-.363.504-.536l.03-.035 7.12-8.282a1.1 1.1 0 0 0-1.668-1.434l-7.045 8.194-7.108-8.267a1.1 1.1 0 0 0-1.55-.117" fill="rgba(2, 6, 12, 0.92)" fill-opacity="0.92"></path></svg>
                    </div>
                    <div className='flex items-center justify-around rounded-xl bg-white px-4 ml-2'>
                        <input placeholder='Search for restaurant, item or more ' className='h-[58px] w-[290px] flex-1 rounded-xl border-none outline-none'></input>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 16 16">
                            <path d="M13.438,15.563l-2.665-2.664	C9.684,13.598,8.388,14.002,7,14.002c-3.865,0-7-3.135-7-7c0-3.864,3.135-7,7-7c3.864,0,7,3.136,7,7	c0,1.391-0.407,2.687-1.105,3.776l2.665,2.664c0.585,0.585,0.585,1.536,0,2.121C14.974,16.148,14.024,16.148,13.438,15.563z M12,7.002c0-2.759-2.241-5-5-5c-2.76,0-5,2.241-5,5c0,2.76,2.24,5,5,5C9.759,12.002,12,9.762,12,7.002z"></path>
                        </svg>
                    </div>
                </div>
                <img className='h-[450px] w-[250px] absolute top-0 right-0' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png'></img>
            </div>
            <div className='flex items-center justify-center flex-nowrap w-full max-w-[80%] min-h-[320px] px-2 pb-5 mx-auto'>
                <div>
                    <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png' alt='Food delivery'></img></div>
                <div>
                    <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png' alt='Instamart'></img></div>
                <div>
                    <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png' alt='Dineout'></img></div>
            </div>
        </div>

    );
}


