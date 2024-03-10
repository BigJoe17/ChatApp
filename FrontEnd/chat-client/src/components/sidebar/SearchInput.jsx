import React from 'react'
import useState from "react"
import { IoSearch } from "react-icons/io5";

const SearchInput = () => {

    return (
        <>
<form action="" className='flex gap-2 items-center '>
<input type="text" placeholder="Search..." className="input input-bordered w-full max-w-xs bg-sky-900  rounded-full text-white" />
<button type ="submit" className='bg-blue-600 btn btn-circle btn-outline text-white'>
    <IoSearch className='w-6 h-6 outline-none'/>
</button>
</form>
        </>

    )


}

export default SearchInput