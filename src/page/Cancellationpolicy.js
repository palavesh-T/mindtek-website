import React from "react";
import "../assete/css/cancellation.css";
import Header from "./Header";
import Footer from "./Footer";


const Cancellationpolicy = () =>{

    return(
    <>
    <Header/>
    <div className="cancel_div"></div>

    <div className="cancel_div_1">
        <h2>Cancellation Policy</h2>
        <p>Our warranty covers only service-related concerns caused by Mindtek Research & IT Solution (P) Ltd and does not include cancellations due to changes in your personal circumstances or preferences. This is because significant time, resources, manpower, technology, and effort are invested in delivering your service or project.</p>
        <p>If you wish to pause the processing of a service, the amount already paid will remain in your account as credit until you are ready to resume the service.</p>
        <p>Before issuing any refund, we reserve the right to make every reasonable effort to complete the agreed service. If you still choose to cancel after the work has started, a 20% cancellation fee will be applied in addition to any earned service charges and applicable government fees.</p>
    </div>
    <Footer/>
    </>
    )
}
export default Cancellationpolicy