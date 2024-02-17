import React from 'react'
import useState from "react"
const Input = () => {
    const [input, setInput] = useState('')
 
    const handleChange = ()=>{
        setInput(e.target.value)
    }

    return (
   <>
   <input 
    type='text'
    value={input}
    onChange={handleChange}
className='rounded-xl p-4 w-10 '
   />
   </>
  )
}

export default Input