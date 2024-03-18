import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import UseLogin from '../hooks/UseLogin';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login, loading } = UseLogin();


    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(username, password);
    }





    return (
        <>
            <div className='flex  flex-col items-center justify-center min-w-96 mx-auto '>
                <div className='w-full rounded-lg shadow-md bg-blue-600 p-5 text-white fobg-clip-padding 
                backdrop-filter backdrop-blur-lg bg-opacity-5'>
                    <h1 className='text-3xl  font-semibold text-center text-gray-300'>Login
                        <span className='text-blue-500'> ChatApp</span>
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <label className='label p-2'>
                            <span className='text-2xl'>Username</span>
                        </label>
                        <input type="text" placeholder="Type here" 
                        className="input input-bordered input-primary w-full max-w-xs align-center text-blue-900" 
                        onChange={(e) => setUsername(e.target.value)}
                        />

                        <div>
                            <label className='label '>
                                <span className='text-2xl'>Password</span>
                            </label>
                            <input
                                type="password" placeholder="Type here"
                                className="input input-bordered input-primary w-full max-w-xs align-center text-blue-900"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div>
                                <input type="submit" className="font-bold bg-blue-500 text-white py-2 px-4 mt-4 cursor-pointer  w-full rounded-lg" value="Login" />
                                <div className='flex flex-1 gap-3 align-center'>
                                   
                                    <span>Don't have an Account</span>
                                    <Link to="/signup" className="text-blue-500">Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
