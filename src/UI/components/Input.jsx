import React, { useState } from 'react'

const Input = (props) => {
    const [inputValue, setInputValue] = useState('')

    const inputValueHandler = (event) => {
        setInputValue(event.target.value)
    }

    const addListEvent = () => {
        inputValue.trim() != '' ? props.onGetListHandler(inputValue) : ''
        setInputValue('')
    }

    return (
        <div className='flex justify-center mb-10 w-1/2 m-auto'>
            <input onChange={inputValueHandler} value={inputValue} type="text" className='bg-slate-600 h-12 outline-none text-white px-5 py-2 font-poppins text-xl w-full' />
            <button className='h-12 bg-pink-500 text-white font-poppins aspect-square text-3xl' onClick={addListEvent}>+</button>
        </div>
    )
}

export default Input