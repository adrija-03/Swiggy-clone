import React from 'react'

function SignUpDrawer({ closeDrawer }) {

  const changeSignUpPage = (e) => {
    console.log(e.target.textContent)
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end text-[#282c3f]">
      <div
        className="fixed inset-0 bg-black/60 transition-opacity"
        onClick={closeDrawer}
      />

      <div className="relative z-10 h-full w-full max-w-[500px] bg-white p-8 sm:p-10 shadow-2xl flex flex-col justify-between overflow-y-auto">
        <div>
          <button
            onClick={closeDrawer}
            className="mb-6 text-gray-600 hover:text-black transition-colors"
            aria-label="Close drawer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-[#282c3f]">
                Sign up
              </h1>
              <div className="mt-2 text-sm font-medium">
                <span className="text-gray-500">or </span>
                <button
                  type="button"
                  onClick={(e) => changeSignUpPage(e)}
                  className="text-[#ff5200] font-semibold hover:underline"
                >
                  login t0 your account
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
            <div className="relative border border-gray-300 focus-within:border-black focus-within:shadow-sm transition-all rounded-sm">
              <input
                type="tel"
                id="phone"
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-2 text-base text-gray-900 bg-transparent outline-none font-medium"
              />
              <label
                htmlFor="phone"
                className="absolute left-4 top-4 text-gray-400 text-base transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-500"
              >
                Phone number
              </label>
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-[#ff5200] text-white font-bold py-3.5 px-4 shadow-md hover:bg-[#e26e10] hover:shadow-lg transition-all uppercase tracking-wide text-sm"
            >
              LOGIN
            </button>
          </form>

          <p className="mt-3 text-[11px] text-gray-500 leading-tight font-medium">
            By clicking on Login, I accept the{' '}
            <span className="text-gray-900 font-semibold cursor-pointer hover:underline">
              Terms & Conditions
            </span>{' '}
            &{' '}
            <span className="text-gray-900 font-semibold cursor-pointer hover:underline">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUpDrawer