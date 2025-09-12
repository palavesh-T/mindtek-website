import React, { useState } from 'react';
import Header from "./Header";
import "../assete/css/contact.css";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaClock, FaCheckCircle  } from "react-icons/fa"; 
import Footer from "./Footer";
import { ContactusApi } from '../service/api';
import MetaTitle from "../components/MetaTitle";
const Contact = () =>{

     const [formData, setFormData] = useState({
    user_name: '',
    user_phone: '',
    user_email: '',
    user_message: '',
  });
  
  const [errorMessage, setErrorMessage] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  

  const handleSubmit = async () => {
    let errors = {};
  
    // Validation for all fields
    if (!/^[A-Za-z\s]+$/.test(formData.user_name.trim())) {
      errors.user_name = 'Enter your Name';
    }
  
    if (!/^[0-9]{10}$/.test(formData.user_phone.trim())) {
      errors.user_phone = 'Phone number must be 10 digits.';
    }
  
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.user_email.trim())) {
      errors.user_email = 'Enter a valid email address.';
    }
  
  
  
    if (formData.user_message.trim() === '') {
      errors.user_message = 'Message cannot be empty.';
    }
  
    if (Object.keys(errors).length > 0) {
      setErrorMessage(errors);
      setTimeout(() => {
        setErrorMessage(''); 
      }, 2000);
      return;
    }
  
    try {
      setErrorMessage('');
         const submissionDate = new Date().toISOString();
                       
    // Create form data with submission date
    const formDataWithDate = {
      ...formData,
      submission_date: submissionDate
    };
      const response = await ContactusApi(formDataWithDate);
      console.log('Form data saved:', response.data);
  
      setSuccessMessage(' submitted successfully!');
      setFormData({
        user_name: '',
        user_phone: '',
        user_email: '',
        user_message: '',
      });
  
      setTimeout(() => {
        setSuccessMessage('');
      }, 2000);
    } catch (error) {
      console.error('Error saving form data:', error);
      setErrorMessage('Failed to submit the form. Please try again.');
    }
  };
    
    return(
        <>
        <Header/>
        <MetaTitle title={"Contact | MindTek Research and IT Solutions (P) Ltd."} />
                <meta 
                name="description" 
                content="MindTek Research and IT Solutions (P) Ltd. provides IT consulting, software development, research services, and digital solutions in Nagercoil, Tamil Nadu." 
                />

        <div className="mindtek_conatct_banner">
            <h2>contact us</h2>
        </div>

        <div className="contact_page">
            <div className="contact_page_1">
                <div className="contact_page_2">
                   <div className="contact_page_3">
                     <div className="icon_circle">
                     <h2><FaPhoneAlt /></h2> 
                     </div>
                        <div className="contact_text">
                            <h1>Call Us Anytime</h1>
                            <Link to="tel:8075006187">+91 8075006187</Link>
                        </div>
                       
                    </div>
                     <div className="contact_page_3">
                         <div className="icon_circle">
                          <h2><FaEnvelope /></h2> 
                          </div>
                            <div className="contact_text">
                          <h1>Send E-Mail</h1>
                        <Link to="mailto:admin@mindtek.org">admin@mindtek.org</Link>
                        </div>
                    </div>
                     <div className="contact_page_3">
                        <div className="icon_circle">
                                <FaClock />
                            </div>
                          <div className="contact_text">
                        <h1>Opening Hours</h1>
                        <Link to="">Mon - Sat (10.00 AM - 6.00 PM)</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="conatct_form_div">
            <div className="conatct_form_div_1">
                <div className="conatct_form_div_2">
                    <h2>We'd love to hear from you.</h2>
                    <p>At our IT solution company, we are committed to providing exceptional customer service and support. If you are experiencing technical difficulties or need assistance with one of our services,</p>
                    <div className="conatct_form_div_11">
                     <h3>Your benefits:</h3>
                     </div>
                    <div className="conatct_form_div_3">
                       
                        <div className="conatct_form_div_4">
                            <p><FaCheckCircle />Client-oriented</p>
                            <p><FaCheckCircle />Competent</p>
                            <p><FaCheckCircle />Problem-solving</p>
                        </div>
                        <div className="conatct_form_div_5">
                            <p><FaCheckCircle />Independent</p>
                            <p><FaCheckCircle />Results-driven</p>
                            <p><FaCheckCircle />Transparent</p>
                        </div>
                    </div>
                </div>

                <div className="conatct_form_div_6">
                    <div className="conatct_form_div_7">
                        <h1>Mindtek</h1>
                        <div className="conatct_form_div_8">
                             <div className="input-wrapper">
                            <input type="text" placeholder="Enter Your Name" id="user_name" value={formData.user_name} onChange={handleChange} autoComplete='off'/>
                              {errorMessage.user_name && <div className="error-message" style={{ color: 'red',fontSize:"10px" }}>{errorMessage.user_name}</div>}
                              </div>
                               <div className="input-wrapper">
                            <input type="text" placeholder="Enter Your Number" id="user_phone" value={formData.user_phone} onChange={handleChange}/>
                             {errorMessage.user_phone && <div className="error-message" style={{ color: 'red',fontSize:"10px" }}>{errorMessage.user_phone}</div>}
                             </div>
                        </div>
                        <div className="conatct_form_div_9">
                            <input type="email" placeholder="Enter Your Email" id="user_email" value={formData.user_email} onChange={handleChange} autoComplete='off' />
                             {errorMessage.user_email && <div className="error-message" style={{ color: 'red',fontSize:"10px" }}>{errorMessage.user_email}</div>}
                        </div>
                        <div className="conatct_form_div_10">
                            <textarea placeholder="Enter Your Message" id='user_message' value={formData.user_message} onChange={handleChange}/>
                             {errorMessage.user_message && <div className="error-message" style={{ color: 'red',fontSize:"10px" }}>{errorMessage.user_message}</div>}
                        </div>
                        <div className="contct_sbt_btn">
                            <button onClick={handleSubmit}>Submit</button>
                             {successMessage && <div className="success-message" style={{ color: 'green' }}>{successMessage}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        
        </>
    )
}
export default Contact