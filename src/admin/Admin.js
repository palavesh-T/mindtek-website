import React, { useState, useEffect } from "react";
import "../admin/assete/css/admin.css";
import { useNavigate } from 'react-router-dom'; 
import { SignInApi } from "../service/api";


const Admin = () =>{
     const [user_name, setUsername] = useState("");
      const [password, setPassword] = useState("");
      const [showPassword, setShowPassword] = useState(false);
       const navigate = useNavigate(); 
      const [error, setError] = useState('');
    
       useEffect(() => {
            if (localStorage.getItem('user') !== null) {
                navigate("/Admin"); 
            }
        }, [navigate]);
    
        //   const togglePasswordVisibility = () => {
        //     setPasswordVisible(!passwordVisible);
        // };
    
    
          const handleLogin = async (event) => {
        event.preventDefault();
        try {
                const response = await SignInApi({ user_name, password });
    
                if (response.status === false) {
                    console.log("Login failed");
                    setError("Invalid username or password");
                } else {
                    console.log("Login Successful");
                    localStorage.setItem('authenticated', 'true');
                    localStorage.setItem('user', user_name); 
                    navigate('/Contactdeatils'); 
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                setError("Invalid password");
            }
        };
    

    return(
         <div className="admin-login-container">
      <h2>Admin </h2>
      <form onSubmit={handleLogin}>
        {/* Username Input */}
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
              id="user_name"
            value={user_name}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

       
        <div className="form-group password-group">
          <label>Password</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
               id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {/* <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} /> */}
            </span>
          </div>
        </div>
{error && (
  <div style={{ textAlign: 'center', color: 'red', marginTop: '15px' }}>
    {error}
  </div>
)}

        <button type="submit"  value="Login" className="login-btn">
          Login
        </button>
      </form>
    </div>
    )
}
export default Admin