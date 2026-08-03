import React from 'react'

function LoginDrawer({ closeDrawer }) {
  return (
    <div className='text-black'>
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={closeDrawer}
      />
      <div className="fixed top-0 right-0 h-screen w-[40%] bg-white z-50 p-10 shadow-xl">

        <button onClick={closeDrawer}>
          X
        </button>

        <h1 className="text-3xl font-bold mt-8">
          Login
        </h1>
        <div>or create an account</div>
        <form className='flex flex-col'>
          <input type="number" placeholder='Phone number' />
          <button>Login</button>
        </form>

        <div>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</div>

      </div>
    </div>
  )
}

export default LoginDrawer