import React, { useState } from 'react'
import DrawerShell from './DrawerShell'
import FloatingInput from './FloatingInput'

function LoginDrawer({ closeDrawer, onSwitchToSignup }) {
  const[phone, setPhone] = useState('');

  return (
    <DrawerShell closeDrawer={closeDrawer} policyText="clicking on Login">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#282c3f]">
            Login
          </h1>
          <div className="mt-2 text-sm font-medium">
            <span className="text-gray-500">or </span>
            <button
              type="button"
              onClick={onSwitchToSignup}
              className="text-[#ff5200] font-semibold hover:underline"
            >
              create an account
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
        <FloatingInput id="phone" label="Phone Number" type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)}/>

        <button
          type="submit"
          className="mt-4 w-full bg-[#ff5200] text-white font-bold py-3.5 px-4 shadow-md hover:bg-[#e26e10] hover:shadow-lg transition-all uppercase tracking-wide text-sm"
        >
          LOGIN
        </button>
      </form>

    </DrawerShell>
  )
}

export default LoginDrawer