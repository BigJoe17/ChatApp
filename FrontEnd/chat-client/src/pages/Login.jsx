import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className='flex  flex-col items-center justify-center min-w-96 mx-auto '>
                <div className='w-full rounded-lg shadow-md bg-blue-600 p-5 text-white fobg-clip-padding 
                backdrop-filter backdrop-blur-lg bg-opacity-5'>
                    <h1 className='text-3xl  font-semibold text-center text-gray-300'>Login
                        <span className='text-blue-500'> ChatApp</span>
                    </h1>
                    <form action="" className=''>
                        <label className='label p-2'>
                            <span className='text-2xl'>Username</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs align-center text-blue-900" />

                        <div>
                            <label className='label '>
                                <span className='text-2xl'>Password</span>
                            </label>
                            <input type="password" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs align-center text-blue-900" />
                        </div>

                        <div className='py-4'>

                            <Link to={'/signup'}> <p>Don't have an account? <span className='text-blue-500 cursor-pointer'>
                                Sign Up</span></p>
                            </Link>

                            <div>
                                <input type="submit" className="font-bold bg-blue-500 text-white py-2 px-4 mt-4 cursor-pointer  w-full rounded-lg" value="Login" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
