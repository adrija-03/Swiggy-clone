function FloatingInput({ id, label, type, value, onChange}) {
    return (
        <div className="relative border border-gray-300 focus-within:border-black focus-within:shadow-sm transition-all rounded-sm">
            <input
                type={type}
                id={id}
                placeholder=" "
                value={value}
                onChange={onChange}
                className="peer w-full px-4 pt-6 pb-2 text-base text-gray-900 bg-transparent outline-none font-medium"
            />
            <label
                htmlFor={id}
                className="absolute left-4 top-4 text-gray-400 text-base transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-500"
            >
                {label}
            </label>
        </div>
    )
}

export default FloatingInput