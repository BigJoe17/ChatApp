import React, { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';

const UseSignup = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const signup = async ({ fullname, username, password, confirmPassword, gender }) => {
        const success = handleInputsErrors({ fullname, username, password, confirmPassword, gender });

        if (!success)
            return;

        setLoading(true);
        try {
            const res = await axios.post("/api/auth/signup", {
                fullname, username, password, confirmPassword, gender
            });

            const data = res.data;
            if (data.error) {
                return;
            }

            // Store user data in localStorage or context
            localStorage.setItem('chat-user', JSON.stringify(data));
            setAuthUser(data);

            toast.success(data.message);
        } catch (err) {
            setLoading(false);
            console.error(err);
            toast.error("An error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    }

    return { signup, loading };
}

export default UseSignup;

function handleInputsErrors({ fullname, username, password, confirmPassword, gender }) {
    if (!fullname || !username || !password || !confirmPassword || !gender) {
        toast.error("All fields are required");
        return false
    }

    if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return false
    }

    if (password.length < 6) {
        toast.error("Password must be at least 6 characters long");
        return false
    }

    if (username.length < 6) {
        toast.error("Username must be at least 6 characters long");
        return false
    }

    return true
}
