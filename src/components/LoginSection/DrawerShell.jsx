function DrawerShell({ closeDrawer, children, policyText }) {
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

                    {children}

                    <p className="mt-3 text-[11px] text-gray-500 leading-tight font-medium">
                        By {policyText}, I accept the{' '}
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
export default DrawerShell