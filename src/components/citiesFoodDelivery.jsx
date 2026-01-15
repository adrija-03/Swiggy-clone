import React from 'react'
import CitiesWithDeliveryReuasable from './citiesWithDeliveryReuasable';

const listOfCities = [
  "Bangalore",
  "Gurgaon",
  "Hyderabad",
  "Delhi",
  "Mumbai",
  "Pune",
  "Kolkata",
  "Chennai",
  "Ahmedabad",
  "Chandigarh",
  "Jaipur",
  "Kochi"
];
const startText = "Order food online in ";
export const CitiesFoodDelivery = () => {
  return (
    <div className='mt-20 mx-60'>
      <div className='font-semibold text-[24px] leading-[26px] tracking-[-0.6px] text-[rgba(2,6,12,0.92)]'>Cities with food delivery</div>
      <div>
        <div className='mt-6 grid grid-cols-4 gap-4'>
        {listOfCities.map((city, index) => (
          <CitiesWithDeliveryReuasable
            key={index}
            startText={startText}
            city={city}
          />
        ))}
      </div>
      </div>
    </div>
  )
}
