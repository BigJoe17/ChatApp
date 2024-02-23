import React, { useState } from 'react'
import toast from 'react-hot-toast';
const UseSignup = () => {
    const [loading, setLoading] = useState(false);

    const signup = async({ fullName, username, password, confirmPassword, gender }) => {

        const success = handleInputsErrors({ fullName, username, password, confirmPassword, gender })

        if (!success)
            return

        setLoading(true)
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fullName, username, password, confirmPassword, gender
                })
            })

            const data = await res.json();
            console.log(data);

        } catch (err) {
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    return { signup, loading }
}

export default UseSignup


function handleInputsErrors({ fullName, username, password, confirmPassword, gender }) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
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

