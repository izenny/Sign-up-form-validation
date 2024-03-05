import React, { useState } from "react";

const Login = () => {
   
    const [email, setEmail] = useState("");
   
    const [password, setPassword] = useState("");
    
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const errors = {};
       
        if (!email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email is invalid";
        }
        
        if (!password.trim()) {
            errors.password = "Password is required";
        } else if (!/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(password)) {
            errors.password = "Password must contain at least one number and one special character, and be at least 8 characters long";
        }
       
        return errors;
    };

    const loginData = (e) => {
        e.preventDefault(); 
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            console.log("Form submitted successfully");
            
        } else {
            setErrors(errors);
        }
    };
  return (
    <div className="login-c">
      <div className="login-header">
        <h2>Login</h2>
      </div>
      <div>
        <form onSubmit={loginData}>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
