import React from "react";
import Header from "./Header";
import "../assete/css/privacy.css";
import Footer from "./Footer";


const Privacypolicy =() =>{

    return(
        <>
        <Header/>

        <div className="privacy_div"></div>

        <div className="privacy_contents">
            <h2>Privacy Policy</h2>
            <p>Your information is collected and used by us to deliver, improve, and personalize our services. By using our services, you agree to the collection and use of information in accordance with this Privacy Policy. Unless otherwise defined, the terms used in this policy have the same meaning as in our Terms & Conditions, available at www.mindtek.org.</p>
            <p>Please note that data protection laws may vary by region. Your data, including personal information, may be transferred to and stored in locations outside your state, province, or country. If you provide information while located outside India, you acknowledge and consent to your data being processed and stored in India.</p>
            <p>By submitting your information and accepting this Privacy Policy, you consent to this transfer.</p>
            <p>At Mindtek Research & IT Solution (P) Ltd, we prioritize the security and confidentiality of your personal information. We implement industry-standard measures to protect your data. Your personal information will never be shared with or transferred to any third party or foreign entity without proper security and legal safeguards in place.</p>
        </div>
        <Footer/>
        </>
    )
}

export default Privacypolicy