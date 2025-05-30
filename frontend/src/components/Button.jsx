import React from 'react'

const Button = ({ label, onClick, disabled }) => {
    return (

        <button
            onClick={onClick}
            type="button"
            disabled={disabled}
            className={`cursor-pointer w-full py-2.5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm transition ${disabled ? 'opacity-50 cursor-not-allowed' : ''
                }`}
        >
            {label}
        </button>

    )
}

export default Button
