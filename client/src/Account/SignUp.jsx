import React, { useState } from "react";

const SignUp = () => {
    const [firstname, setFirstname] = useState("");
    const [secondname, setSecondname] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        if (!firstname.trim()) {
            errors.firstname = "First name is required";
        }
        if (!secondname.trim()) {
            errors.secondname = "Second name is required";
        }
        if (!email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email is invalid";
        }
        if (!age.trim()) {
            errors.age = "Age is required";
        } else if (isNaN(age) || parseInt(age) < 18) {
            errors.age = "Age must be above 18";
        }
        if (!password.trim()) {
            errors.password = "Password is required";
        } else if (!/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(password)) {
            errors.password = "Password must contain at least one number and one special character, and be at least 8 characters long";
        }
        if (password !== cpassword) {
            errors.cpassword = "Passwords do not match";
        }
        return errors;
    };

    const signupData = (e) => {
        e.preventDefault(); 
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            console.log("Form submitted successfully");
            
        } else {
            setErrors(errors);
        }
    };

    return (
        <div className="signup-c">
            <div className="signup-head">
                <h2>Signup</h2>
            </div>
            <div className="signup-form">
                <form onSubmit={signupData}>
                    <div>
                        <label>First name</label>
                        <input type="text" onChange={(e) => setFirstname(e.target.value)} />
                        {errors.firstname && <span className="error">{errors.firstname}</span>}
                    </div>
                    <div>
                        <label >Second name</label>
                        <input type="text" onChange={(e) => setSecondname(e.target.value)} />
                        {errors.secondname && <span className="error">{errors.secondname}</span>}
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div>
                        <label htmlFor="">Age</label>
                        <input type="number" onChange={(e) => setAge(e.target.value)} />
                        {errors.age && <span className="error">{errors.age}</span>}
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                    <div>
                        <label htmlFor="">Confirm Password</label>
                        <input type="password" onChange={(e) => setCpassword(e.target.value)} />
                        {errors.cpassword && <span className="error">{errors.cpassword}</span>}
                    </div>
                    <button type="submit">SIGN UP</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
