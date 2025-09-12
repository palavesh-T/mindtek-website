
import Header from "./Header";
import "../assete/css/about.css";
import { FaBullseye, FaStar, FaCheckCircle } from "react-icons/fa";
import about_1 from "../assete/image/about 1.jpg";
import about_2 from "../assete/image/about 2.jpg";
import mission from "../assete/image/mission.jpg";
import vission from "../assete/image/vission 1.jpg";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import MetaTitle from "../components/MetaTitle";
const About = () =>{
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
         <MetaTitle title={"Aboutus | MindTek Research and IT Solutions (P) Ltd."} />
                        <meta 
                        name="description" 
                        content="MindTek Research and IT Solutions (P) Ltd. provides IT consulting, software development, research services, and digital solutions in Nagercoil, Tamil Nadu." 
                        />
         <div className="about-banner">
             <h2>ABOUT US</h2>
        </div>
        <div className="mindtek_about_div">
            <div className="mindtek_about_div_1">
                <div className="mindtek_about_div_2">
                <div className="mindtek_about_div_3">
                    <h2>ABOUT COMPANY</h2>
                    <h1>We provide perfect it solutions for Project.</h1>
                </div>
                <div className="mindtek_about_div_4">
                    <p>Aesigning in a powerful way of just not an only professions, how in a passion for our company. </p>
                    <button><Link to="/Service" onClick={mindtek}>LEARN MORE</Link></button>
                   
                </div>
                
            </div>
             <div className="mindtek_about_div_5">
                        <img src={about_1} alt=""/>
                    </div>
        </div>

        <div className="mindtek_about_div_6">
            <div className="mindtek_about_div_7">
                <img src={about_2} alt=""/>
            </div>
           <div className="mindtek_about_div_8">
                <div className="mindtek_about_stats">
                    <h2>100K</h2>
                    <p>Completed Projects</p>
                </div>
                <div className="mindtek_about_stats">
                    <h2>150+</h2>
                    <p>Expert Team</p>
                </div>
                </div>

        </div>
        </div>
        <div className="about_banner_div"></div>

        <div className="about_vission_div">
            <div className="about_vission_div_1">
                <div className="about_vission_div_2">
                  <img src={mission} alt=""/>
                </div>
                <div className="about_vission_div_3">
                    <h2> <FaBullseye style={{ color: "#ff6600", marginRight: "10px" }} />Our Mission</h2>
                    <p>Our roadmap starts with our mission. It declares our purpose as a company and serves as the standard against which we weigh our actions and decisions.</p>
                    <p><FaCheckCircle style={{ color: "#2b00b8ff", marginRight: "8px" }} /> To create value and make a difference</p>
                    <p><FaCheckCircle style={{ color: "#2b00b8ff", marginRight: "8px" }} />To inspire those who we connect with</p>
                    <p><FaCheckCircle style={{ color: "#2b00b8ff", marginRight: "8px" }} /> To provide an undeniable customer service experience</p>
                </div>
            </div>
             <div className="about_vission_div_1">
                <div className="about_vission_div_2">
                  <img src={vission} alt=""/>
                </div>
                <div className="about_vission_div_3">
                    <h2> <FaStar style={{ color: "#f1c40f", marginRight: "10px" }} />OUR VALUES</h2>
                    <p>Our values serve as a compass for our actions and validate how we operate as people and a company.</p>
                    <p>The ability to own a vision and the fortitude to execute that vision.</p>
                    <p><FaCheckCircle style={{ color: "#2b00b8ff", marginRight: "8px" }} /> To leverage our collective intellecte</p>
                    <p><FaCheckCircle style={{ color: "#2b00b8ff", marginRight: "8px" }} />Being committed inside and out</p>
                    <p><FaCheckCircle style={{ color: "#2b00b8ff", marginRight: "8px" }} />What we do, we do well</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default About