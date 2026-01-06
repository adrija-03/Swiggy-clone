import React from 'react'

const ScrollableItems = (props) => {
    return (
        <div className="flex flex-nowrap gap-6">
            {props.list.map((item, index) => (
                <div className='flex flex-col items-center'>
                    <button key={index} className="shrink-0">
                        <img
                            className="w-36 h-auto"
                            src={`${item.link}`}
                            alt={item.name}
                        />
                    </button>
                    <div className='pt-[14px] font-semibold text-[20px] leading-[24px] tracking-[-0.5px] text-center text-[rgba(2,6,12,0.75)]'>{item.name}</div>
                </div>
            ))}
        </div>
    )
}

export default ScrollableItems