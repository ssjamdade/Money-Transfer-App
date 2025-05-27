import React from 'react'

const InputBox = ({ label, placeholder, onChange}) => {
    return (
        <div className='w-full'>
            <div className="text-sm text-left py-2 font-bold">
                {label}
            </div>
            <input onChange={onChange} placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200" />
        </div>
    )
}

export default InputBox
