import React, { useState } from 'react'
import Input from './Input'
import { AiFillDelete } from 'react-icons/ai'

const TodoList = () => {

    const [listComponent, setListComponent] = useState([])

    const getList = (data) => {
        setListComponent([...listComponent, data])
    }

    const deleteItemsHandler = (index) => {
        const updatedList = [...listComponent]
        updatedList.splice(index, 1)
        setListComponent(updatedList)
    }


    return (
        <React.Fragment>
            <div className=' absolute w-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[65%]'>
                <h1 className='font-poppins text-5xl text-center m-5 font-bold text-white'>Todo List</h1>
                <Input onGetListHandler={getList} />
            </div>

            <div className={listComponent.length > 0 ? 'mt-10 bg-slate-800 p-4 w-1/2 m-auto mb-5' : ''}>
                {listComponent.map((value, index) => (
                    <div key={index} className='bg-slate-600 text-white text-left pl-5 text-xl h-10 w-full m-auto font-poppins my-2 flex items-center justify-between'>
                        <h1>{value}</h1>
                        <button className='float-right p-2 bg-red-500 h-full' onClick={() => deleteItemsHandler(index)}>
                            <AiFillDelete />
                        </button>
                    </div>
                ))}
            </div >
        </React.Fragment>
    )
}

export default TodoList