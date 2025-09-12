import React, { useState } from "react";
import Adminheader from "./Adminheader";
import "../admin/assete/css/changepassword.css";
import { useNavigate } from 'react-router-dom';
import { updateConfirmPasswordApi } from "../service/api";
//  import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
//  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Changepassword = () =>{
    const navigate = useNavigate();
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState('');



    //   const toggleCurrentPasswordVisibility = () => {
    //     setCurrentPasswordVisible(!currentPasswordVisible);
    // };

    // const toggleNewPasswordVisibility = () => {
    //     setNewPasswordVisible(!newPasswordVisible);
    // };

    // const toggleConfirmPasswordVisibility = () => {
    //     setConfirmPasswordVisible(!confirmPasswordVisible);
    // };


     const handleSubmit = async (event) => {
        event.preventDefault();

        if (newPassword !== confirmPassword) {
            setErrorMessage('New password and confirm password do not match');
            return;
        }
        try {
            const response = await updateConfirmPasswordApi({
                id: 1,
                current_password: currentPassword,
                new_password: newPassword,
                confirm_password: confirmPassword,
            });

            if (response.success) {
                console.log('Password change successful:', response.message);
                navigate('/Admin');
                window.location.reload();
            } else {
                setErrorMessage(response.message || 'Password change failed. Please try again later.');
            }
        } catch (error) {
            console.error('Password change failed:', error);
            setErrorMessage('Password change failed. Please try again later.');
        }
    };

    return(
        <>
        <Adminheader/>
         <div className="change-password-container">
                <h2>Change Password</h2>
                <form onSubmit={handleSubmit} className="change-password-form">
                    <div className="form-group">
                        <label>Old Password</label>
                        <input
                           type="password"
                           value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            required
                        />
                          {/* <FontAwesomeIcon
                            icon={currentPasswordVisible ? faEye : faEyeSlash}
                            onClick={toggleCurrentPasswordVisibility}
                            className="icon"
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: '71%',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer'
                            }}
                        />   */}
                    </div>
                    <div className="form-group">
                        <label>New Password</label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                          {/* <FontAwesomeIcon
                            icon={newPasswordVisible ? faEye : faEyeSlash}
                            onClick={toggleNewPasswordVisibility}
                            className="icon"
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: '35%',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer'
                            }}
                        />   */}
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type= "password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                         {/* <FontAwesomeIcon
                            icon={confirmPasswordVisible ? faEye : faEyeSlash}
                            onClick={toggleConfirmPasswordVisibility}
                            className="icon"
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: '35%',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer'
                            }}
                        />   */}
                    </div>
                      {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button type="submit" className="submit-btn">Update Password</button>
                </form>
            </div>
        </>
    )
}
export default Changepassword