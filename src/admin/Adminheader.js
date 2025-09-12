import React from "react";
import "../admin/assete/css/adminheader.css";
import { Link } from "react-router-dom";
import adminlogo from "../assete/logo/mindtek_white.png";

const Adminheader = () => {
    return(
        <>
        <header className="admin-header">
            <div className="admin-logo">
                <img src={adminlogo} alt="" />
            </div>
            <nav className="admin-nav">
                <ul>
                    <li><Link to="/Contactdeatils">Contact</Link></li>
                    <li><Link to="/Changepassword">Change Password</Link></li>
                    <li><Link to="/Admin">Logout</Link></li>
                </ul>
            </nav>
        </header>
        </>

    )
}
export default Adminheader