import React from 'react'
import { useState } from 'react';
import DrawerShell from './DrawerShell';
import FloatingInput from './FloatingInput'

function SignUpDrawer({ closeDrawer, onSwitchToLogin }) {

  const [referral, setReferral] = useState(false);
  const [user, setUser] = useState({
    phoneNumber: '',
    name: '',
    email: '',
    referralCode: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value })
  }
  return (
    <DrawerShell closeDrawer={closeDrawer} policyText="creating an account">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#282c3f]">
            Sign up
          </h1>
          <div className="mt-2 text-sm font-medium">
            <span className="text-gray-500">or </span>
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="text-[#ff5200] font-semibold hover:underline"
            >
              login to your account
            </button>
          </div>
          <div className="w-8 h-[2px] bg-black mt-4" />
        </div>

        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
          alt="Swiggy Login Graphic"
          className="w-24 h-24 object-contain"
        />
      </div>

      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
      >

        <FloatingInput id="phone" label="Phone Number" type="tel" value={user.phoneNumber} onChange={handleChange} />
        <FloatingInput id="name" label="Name" type="text" value={user.name} onChange={handleChange} />
        <FloatingInput id="email" label="Email" type="email" value={user.email} onChange={handleChange} />

        {referral &&
          <FloatingInput id="referralCode" label="Referral code" type="text" value={user.referralCode} onChange={handleChange} />}

        <button
          type='button'
          onClick={() => setReferral(prev => !prev)}
          className='text-[#5d8ed5] cursor-pointer'>
          Have a referral code?
        </button>

        <button
          type="submit"
          className="mt-4 w-full bg-[#ff5200] text-white font-bold py-3.5 px-4 shadow-md hover:bg-[#e26e10] hover:shadow-lg transition-all uppercase tracking-wide text-sm"
        >
          Continue
        </button>
      </form>

    </DrawerShell>



  )
}

export default SignUpDrawer