import React from "react";
import Header from "./Header";
import "../assete/css/service.css";
import { FaLightbulb, FaChartLine, FaUsers } from "react-icons/fa";
import { FaCertificate, FaMoneyBillWave, FaHandshake } from "react-icons/fa";
import service_pic_1 from "../assete/image/service.jpg";
import { FaIndustry, FaCarSide, FaLeaf, FaMicrochip, FaFilm, FaPhoneAlt } from "react-icons/fa";
import enquiry from "../assete/image/enquiry.webp";
import scholar from "../assete/image/scholar.jpg";
import discussion from "../assete/image/discussion.jpg";
import client from "../assete/image/client.jpg";
import imple from "../assete/image/imples.jpg";
import web from "../assete/image/web.jpg";
import bill from "../assete/image/billing.png";
import payroll from "../assete/image/payroll.webp";
import mobile from "../assete/image/mobile.webp";
import sms from "../assete/image/sms.png";
import inven from "../assete/image/inven.jpg";
import school from "../assete/image/school.webp";
import college from "../assete/image/college.png";
import Ecom from "../assete/image/e-commerce.jpg";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import MetaTitle from "../components/MetaTitle";
 
const Service = () =>{
      const navigate = useNavigate();

    const mindtek = () => {
    navigate("");
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };
    return(
        <>
        <Header/>
         <MetaTitle title={"Service | MindTek Research and IT Solutions (P) Ltd."} />
                        <meta 
                        name="description" 
                        content="MindTek Research and IT Solutions (P) Ltd. provides IT consulting, software development, research services, and digital solutions in Nagercoil, Tamil Nadu." 
                        />
        <div className="service_banner">
            <h2>Services</h2>
        </div>

        <div className="service_div_mindtek">
            <div className="service_div_mindtek_1">
                <div className="service_div_mindtek_2">
                      <FaLightbulb className="service_icon" />
                    <h2>Experience and Expertise</h2>
                    <p>Our seasoned team brings over a decade of expertise, delivering proven solutions across diverse industries</p>
                </div>
                 <div className="service_div_mindtek_2">
                     <FaChartLine className="service_icon" />
                    <h2>Strategic Marketing</h2>
                    <p>Data-driven marketing strategies that maximize ROI through targeted campaigns and market analysis.</p>
                </div>
                 <div className="service_div_mindtek_2">
                     <FaUsers className="service_icon" />
                    <h2>Customer Focused</h2>
                    <p>
                        Customer Focused
                        We prioritize your needs, delivering personalized solutions with dedicated support every step forward.</p>
                </div>
            </div>
              <div className="service_div_mindtek_1">
                <div className="service_div_mindtek_2">
                       <FaCertificate className="service_icon" />
                    <h2>Industry Certified</h2>
                    <p>Certified professionals committed to excellence, maintaining highest industry standards.</p>
                </div>
                 <div className="service_div_mindtek_2">
                     <FaMoneyBillWave className="service_icon" />
                    <h2>Saving Costs</h2>
                    <p>Smart solutions that reduce operational costs while maintaining premium quality standards.</p>
                </div>
                 <div className="service_div_mindtek_2">
                    <FaHandshake className="service_icon" />
                    <h2>Honesty and Integrity</h2>
                    <p>Building trust through transparent operations and ethical business practices in every partnership.</p>
                </div>
            </div>
        </div>

        <div className="mindtek_service_div">
            <div className="mindtek_service_div_1">
                <div className="mindtek_service_div_2">
                    <img src={service_pic_1} alt="" />
                </div>
                <div className="mindtek_service_div_3">
                    <h2>INDUSTRIES WE HELP</h2>
                    <h1>Solving IT Challenges in Every Industry</h1>
                    <p>Every industry faces unique IT hurdles, from data security to system integration.     Technology-driven solutions improve efficiency, reduce costs, and enhance productivity.   Cloud computing and AI help businesses adapt quickly to changing market demands.</p>
                    <div className="mindtek_service_div_4">
                        <div className="mindtek_service_div_5">
                             <h3><FaIndustry className="services_icon" /> Advanced Manufacturing</h3>
                             <h3><FaCarSide className="services_icon" /> Automotive & Mobility</h3>
                             <h3><FaLeaf className="services_icon" /> Energy & Natural Resources</h3>
                        </div>
                        <div className="mindtek_service_div_5">
                            <h3><FaMicrochip className="services_icon" /> Technology</h3>
                            <h3><FaFilm className="services_icon" /> Media & Entertainment</h3>
                            <h3><FaPhoneAlt className="services_icon" /> Telecommunications</h3>
                        </div>
                       
                    </div>
                     <div className="mindtek_service_div_6">
                            <button><Link to="/Contact" onClick={mindtek}>READ MORE</Link></button>
                        </div>
                </div>
            </div>
        </div>

        <div className="service_new_design_div">
            <div className="service_new_design_div_1">
                     <h3>IT Support For Business</h3>
                        <h1>Ensuring Your Success Trusted IT Services Source</h1>
            </div>
                <div className="service_new_design_div_2">
                    <div className="service_new_design_div_3">
                        <img src={enquiry} alt="" />
                        <p>Enquiry</p>
                    </div>
                    <div className="service_new_design_div_3">
                        <img src={scholar} alt="" />
                        <p>Scholar</p>
                    </div>
                    <div className="service_new_design_div_3">
                        <img src={discussion} alt="" />
                        <p>Discussion</p>
                    </div>
                    <div className="service_new_design_div_3">
                        <img src={client} alt="" />
                        <p>Client Approval</p>
                    </div>
                </div>
            <div className="service_new_design_div_4">
                        <div className="service_new_design_div_5">
                                  <img src={imple} alt="" />
                        <p>Implementation</p>
                        </div>
                        <div className="service_new_design_div_5">
                                  <img src={web} alt="" />
                        <p>Web Development</p>
                        </div>
                        <div className="service_new_design_div_5">
                                  <img src={bill} alt="" />
                        <p>Billing Software</p>
                        </div>
                    </div>

                     <div className="service_new_design_div_2">
                    <div className="service_new_design_div_3">
                        <img src={payroll} alt="" />
                        <p>Payroll Software</p>
                    </div>
                    <div className="service_new_design_div_3">
                        <img src={mobile} alt="" />
                        <p>Mobile Application</p>
                    </div>
                    <div className="service_new_design_div_3">
                        <img src={sms} alt="" />
                        <p>Bulk SMS</p>
                    </div>
                    <div className="service_new_design_div_3">
                        <img src={inven} alt="" />
                        <p>Inventory System</p>
                    </div>        
                </div>
                  <div className="service_new_design_div_4">
                        <div className="service_new_design_div_5">
                                  <img src={school} alt="" />
                        <p>School Management</p>
                        </div>
                        <div className="service_new_design_div_5">
                                  <img src={college} alt="" />
                        <p>College Management</p>
                        </div>
                        <div className="service_new_design_div_5">
                                  <img src={Ecom} alt="" />
                        <p>Ecommerce Software</p>
                        </div>
                    </div>          
        </div>
        <Footer/>
        </>
    )
}
export default Service