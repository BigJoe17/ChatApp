import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
const Signup = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''

    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);

    }

    const handleCheckBox = ({gender}) => {
        setInputs({ ...inputs, gender })

    }
    return (
        <>
            <div className='flex  flex-col items-center justify-center min-w-96 mx-auto  h-screen'>
                <div className='w-full rounded-lg shadow-md bg-blue-600 p-5 text-white fobg-clip-padding 
    backdrop-filter backdrop-blur-lg bg-opacity-5'>
                    <h1 className='text-3xl  font-semibold text-center text-gray-300'>Signup
                        <span className='text-blue-500'> ChatApp</span>
                    </h1>
                    <form action="" className=''>
                        <div className='pt-2'>
                            <label className='label p-2'>
                                <span className='text-2xl '>FullName</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input text-black input-bordered input-primary w-full max-w-xs align-center"
                                value={inputs.fullName}
                                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}

                            />
                        </div>

                        <div className='pt-2'>
                            <label className='label p-2'>
                                <span className='text-2xl'>Username</span>
                            </label>
                            <input type="text" placeholder="Type here" className="text-black input input-bordered input-primary w-full max-w-xs align-center"
                                value={inputs.username}
                                onChange={(e) => setInputs({ ...inputs, username: e.target.value })}

                            />
                        </div>

                        <div className='pt-2'>
                            <label className='label p-2'>
                                <span className='text-2xl'>Email</span>
                            </label>
                            <input type="email" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs align-center"
                                value={inputs.email}
                                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}

                            />
                        </div>

                        <div className='pt-2'>
                            <label className='label p-2'>
                                <span className='text-2xl'>Password</span>
                            </label>
                            <input type="password" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs align-center"
                                value={inputs.password}
                                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}

                            />
                        </div>

                        <div className='pt-2'>
                            <label className='label '>
                                <span className='text-2xl'>ConfirmPassword</span>
                            </label>
                            <input type="password" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs align-center"
                                value={inputs.confirmPassword}
                                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                            />
                        </div>

                        <GenderCheckBox onCheckBoxChange={handleCheckBox} selectGender={inputs.gender} />

                        <div className='py-4'>
                            <Link to={'/login'}>
                                <p>if already registered ? <span className='text-blue-500 cursor-pointer'> Login</span></p>
                            </Link>
                            <div>
                                <input type="submit" onClick={handleSubmit} className="font-bold bg-blue-500 text-white py-2 px-4 mt-4 cursor-pointer w-full rounded-lg" value="Login" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup