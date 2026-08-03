import React from 'react'

const CitiesWithDeliveryReuasable = (props) => {
  return (
    <div>
        <div className='border-[2px] border-[rgba(2,6,12,0.15)] w-[185px] h-[70px] rounded-xl p-4'>
            <div className='text-[rgba(2, 6, 12, 0.75)] font-normal text-center text-[13px]'>{props.startText} <br/>{props.city}</div>
        </div>
    </div>
  )
}

export default CitiesWithDeliveryReuasable