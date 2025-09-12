import React from "react";
import Header from "./Header";
import "../assete/css/trems.css";
import { FaCheckCircle } from "react-icons/fa";
import Footer from "./Footer";
const Termscondition = () =>{

    return(
        <>
        <Header/>
        <div className="terms_div"></div>

        <div className="terms_condition">
            <h2>Terms & conditions</h2>
            <p>These Terms and Conditions outline the rules and guidelines for using the Mindtek Research & IT Solution (P) Ltd website.</p>
            <p>By accessing or using this website, you agree to fully comply with these Terms and Conditions. If you do not agree with any part of these terms, you should discontinue the use of this website immediately.</p>
            <p>The following terminology applies to these Terms and Conditions, our Privacy Policy, Disclaimer, and all related agreements:</p>
            <p><FaCheckCircle className="iconss" /> "Client," "You," and "Your" refer to the individual or organization accessing our website and accepting the Company’s terms.</p>
            <p><FaCheckCircle className="iconss" /> "The Company," "Ourselves," "We," "Our," and "Us" refer to Mindtek Research & IT Solution (P) Ltd.</p>
            <p><FaCheckCircle className="iconss" /> "Party," "Parties," or "Us" refer to both the Client and the Company, or either of them individually.</p>
            <p>All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of providing the agreed services or products to the Client in the most appropriate manner. This may include formal meetings of a specified duration, online communication, or any other suitable means, all in accordance with applicable laws and regulations of India.</p>
            <p>Any use of the above terminology or other words in singular, plural, capitalization, or pronouns such as he/she/they shall be considered interchangeable and therefore refer to the same.</p>
        </div>

        <div className="terms_condition_1">
            <p><FaCheckCircle className="iconss" /> All official communications will be made through email to inform you about service updates, confirmations, and related requirements.</p>
            <p><FaCheckCircle className="iconss" /> Personal information is strictly confidential and will not be disclosed by Mindtek employees without your consent.</p>
            <p><FaCheckCircle className="iconss" /> All required documents must be submitted only through the official email address provided by Mindtek for communication.</p>
            <p><FaCheckCircle className="iconss" /> Service confirmation and payment verification are mandatory before the initiation of any work.</p>
            <p><FaCheckCircle className="iconss" /> Payments must be made only to Mindtek Research & IT Solution (P) Ltd through authorized channels.</p>
            <p><FaCheckCircle className="iconss" /> Appointments for discussion or consultation can be scheduled only by registered clients.</p>
            <p><FaCheckCircle className="iconss" /> All appointments require prior approval from the Mindtek business team.</p>
            <p><FaCheckCircle className="iconss" /> If any confirmation needs to be reversed, it must be done within 15 days of the initial confirmation.</p>
            <p><FaCheckCircle className="iconss" /> No refunds will be processed after final confirmation of the procedure.</p>
            <p><FaCheckCircle className="iconss" /> Feedback, corrections, or modifications will be accepted only through email communication.</p>
            <p><FaCheckCircle className="iconss" /> We will never share your project details or personal information with third parties without your written approval.</p>
            <p><FaCheckCircle className="iconss" /> Non-compliance with these terms may result in immediate termination of services without any further obligation from Mindtek.</p>
        </div>
        
            <div className="terms_condition_2">
                <h2>Responsibilities of  Mindtek</h2>
                <p><FaCheckCircle className="iconss" /> Support will be provided either in person or through digital platforms to assist clients as per their requirements.</p>
                <p><FaCheckCircle className="iconss" /> All guidelines and procedures will be clearly explained in official documentation before initiating services.</p>
                <p><FaCheckCircle className="iconss" /> Source code and related documentation will be delivered only after client acknowledgment and submission of a No Objection Certificate (NOC).</p>
                <p><FaCheckCircle className="iconss" /> Mindtek Research & IT Solution (P) Ltd reserves full authority regarding rights and final decisions related to services and deliverables.</p>
                <p><FaCheckCircle className="iconss" /> All legal matters and jurisdictions will fall under the registered location of Mindtek Research & IT Solution (P) Ltd.</p>
            </div>
        <Footer/>
        </>
    )

}

export default Termscondition