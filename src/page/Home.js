import Header from "./Header";
import "../assete/css/home.css";
import { Link } from "react-router-dom";
import head_pic from "../assete/image/home-infotechno-main-slider-slide-01-image-02.webp";
import second_pic from "../assete/image/img4.png";
import mid_pic_1 from "../assete/image/how2.png";
import Footer from "./Footer";
import man from "../assete/image/man.png";
import { FaCube, FaCode,FaBullhorn, FaFilm,FaVideo,FaTrophy} from "react-icons/fa";
import { FaNetworkWired, FaServer, FaDatabase, FaShieldAlt,FaBoxOpen   } from "react-icons/fa";
import { GiCheckedShield } from "react-icons/gi";
import process_1 from "../assete/image/process-1.png";
import process_2 from "../assete/image/process-2.png";
import process_3 from "../assete/image/process-3.png";
import porcessshape1 from "../assete/image/porcess-shape1.png";
import porcessshape2 from "../assete/image/porcess-shape2.png";
import photo_collage from "../assete/image/photo-collage.png.png";
import { useNavigate } from "react-router-dom";
import MetaTitle from "../components/MetaTitle";


const Home = () => {
     const navigate = useNavigate();

    const mindtek = () => {
    navigate("");
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };
  return (
    <>
      <Header/>  
       <MetaTitle title={"  MindTek Research and IT Solutions (P) Ltd."} />
                      <meta 
                      name="description" 
                      content="MindTek Research and IT Solutions (P) Ltd. provides IT consulting, software development, research services, and digital solutions in Nagercoil, Tamil Nadu." 
                      />                  
      <div className="mindtek_main_div">
        <div className="mindtek_left">
          <h1>Welcome to Mindtek</h1>
          <p> We provide innovative software solutions and IT services to help your
            business grow faster. Our team focuses on quality, efficiency, and
            reliability.</p>
        
         <Link to="/Contact" className="learn_more_btn" onClick={mindtek}>Learn More</Link>
          
        </div>

        <div className="mindtek_right">
          <img
            src={head_pic}
            alt="Mindtek illustration"
          />
        </div>
      </div>

      <div className="mindtek_second_div">
        <div className="mindtek_second_div_1">
            <div className="mindtek_second_div_3">
                <img src={second_pic} alt="" />
            </div>
            <div className="mindtek_second_div_3">
            <h3> Our Company Community</h3>
            <h2>Top Technology and IT services</h2>
           </div>
           <div className="mindtek_second_div_3">
            <p>We provide cutting-edge IT solutions to help businesses thrive in the digital era. Our services include cloud computing, AI solutions, cybersecurity, and software development tailored to your needs.With expertise in emerging technologies, we ensure scalability, security, and efficiency.</p>
            <button><Link to="/About" onClick={mindtek}>Read more</Link></button>
           </div>
        </div>
      </div>

      <div className="mindtek_new_card_div">
        <div className="mindtek_new_card_div_3">
          <p>What we Provides?</p>
          <h2>Provide Interective IT Solution Business Services</h2>
        </div>
        <div className="mindtek_new_card_div_1">
          <div className="mindtek_new_card_div_2">
                <div className="mindtek_new_card_div_4">
                  <div className="icon">
                    <i className="fa-solid fa-cube"></i> {/* If using Font Awesome */}
                    {/* OR React Icon */}
                    <FaCube /> 
                  </div>
                  <h2>3D Animation Design</h2>
                  <p>Bring your ideas to life with stunning 3D visuals and animations.
                    We craft realistic models, textures, and dynamic motion graphics.
                    </p>
                </div>
                 <div className="mindtek_new_card_div_4">
                   <div className="icon">
                    <FaCode />
                  </div>
                  <h2>Web Development</h2>
                  <p>We build responsive, user-friendly, and high-performing websites.
                      Our team specializes in modern technologies for seamless experiences.</p>
                </div>
                 <div className="mindtek_new_card_div_4">
                  <div className="icon">
                  <FaBullhorn />
                </div>
                  <h2>Digital Marketing</h2>
                  <p>Boost your brand with result-driven digital strategies.
                    We offer SEO, social media, and paid ad campaigns.</p>
                </div>
          </div>


           <div className="mindtek_new_card_div_2">
                <div className="mindtek_new_card_div_4">
                   <div className="icon">
                      <FaFilm />
                    </div>
                  <h2>VFX And Video Editing</h2>
                  <p>Create stunning visuals with professional VFX techniques.
                    We bring imagination to life through creative effects.</p>
                </div>
                 <div className="mindtek_new_card_div_4">
                  <div className="icon">
                    <FaVideo />
                  </div>
                  <h2>Video Editing</h2>
                  <p>Professional editing for all types of videos.
                    Smooth transitions, color correction, and sound design.</p>
                </div>
                 <div className="mindtek_new_card_div_4">
                   <div className="icon">
                    <FaTrophy />
                  </div>
                  <h2>Google Top Ranking</h2>
                  <p>Rank higher on Google with proven SEO strategies.
                      Increase organic traffic and website visibility.</p>
                </div>
          </div>
        </div>
      </div>

      <div className="mindtek_thired_div">
        <div className="mindtek_thired_div_1">
            <div className="mindtek_thired_div_2">
                    <div className="mindtek_thired_div_3">
                         <h2>HOW IT WORK</h2>
                    <p>Our process is simple and transparent, ensuring the best experience for you. First, we analyze your requirements and understand your goals. Then, our experts design a tailored solution that meets your needs. </p>
                        <div className="mindtek_thired_div_4">
                            <div className="mindtek_thired_div_5">
                                <h1> <FaShieldAlt size={15} color="#2196f3" /> Add Your Security Problem</h1>
                                <p>Facing a security challenge? Share your problem with us for expert assistance. Our team specializes in identifying and resolving vulnerabilities quickly.</p>
                            </div>
                            <div className="mindtek_thired_div_5">
                                <h1> <FaBoxOpen size={15} color="#2196f3" /> Choose Security Package</h1>
                                <p>Select the perfect security package that fits your needs and budget. Our plans are designed to provide complete protection for your data and systems. From basic to advanced solutions.</p>
                            </div>
                            <div className="mindtek_thired_div_5">
                                <h1> <GiCheckedShield size={15} color="#2196f3" /> Prepare for Security Test</h1>
                                <p>Get ready to evaluate your system’s defense with our comprehensive security testing. Identify vulnerabilities before they become threats. Our experts simulate real-world attacks to ensure maximum safety.</p>
                            </div>
                        </div>
                    </div>
                     <div className="mindtek_thired_div_6">
                <div className="mindtek_thired_div_7">
                    <img src={mid_pic_1} alt="" />    
                </div>   
            </div>
            </div>           
        </div>
      </div>

      <div className="mindtek_new_design">
        <div className="mindtek_new_design_1">
          <div className="mindtek_new_design_2">
            <h2>LET'S GET STARTED</h2>
            <h1>Build Your entir site in minutes and customize in real-time </h1>
            <small>Call us on: <span><Link to="tel:8075006187" style={{textDecoration:"none", color:"#000"}}>91-8075006187 </Link></span></small>
            <p>Email : <span><Link to="mailto:admin@mindtek.org" style={{textDecoration:"none", color:"#000"}}>admin@mindtek.org</Link></span></p>
            <div className="mindtek_new_design_3">
                  <button><Link to="/Contact" onClick={mindtek}>START WITH A FREE ASSESSMENT</Link></button>
            </div>
          </div>
        </div>
        <div className="mindtek_new_design_4">
          <img src={man} alt="" />
        </div>
      </div>


     <div className="mindtek_process_div">
  <div className="mindtek_process_div_1">
    <h3>Working Process</h3>
    <h2>We Follow the Easy Working Steps</h2>
  </div>
  <div className="mindtek_process_div_2">
    <div className="mindtek_process_div_3">
      <div className="mindtek_process_div_4">
        <div className="image_wrapper">
    <span className="step_number">1</span>
    <div className="circle_border"></div>
    <img src={process_1} alt="" />
  </div>
        <h2>Start A Project</h2>
        <p>Kickstart your journey toward innovation with our expert team.
          We turn your ideas into scalable and efficient solutions.</p>
      </div>
        <img className="arrow_shape" src={porcessshape1} alt="arrow" />
      <div className="mindtek_process_div_4">
  <div className="image_wrapper">
        <img src={process_2} alt="" />
        <span className="step_number">2</span>
    <div className="circle_border"></div>
    </div>
        <h2>Project Analysis</h2>
        <p>Our team conducts a detailed study to understand your requirements.
          We identify challenges, risks, and opportunities for your project.</p>
      </div>
       <img className="arrow_shape" src={porcessshape2} alt="arrow" />
      <div className="mindtek_process_div_4">
          <div className="image_wrapper">
        <img src={process_3} alt="" />
         <span className="step_number">3</span>
    <div className="circle_border"></div>
        </div>
        <h2>Deliver to Succes</h2>
        <p>We ensure seamless execution of every project phase.
          Our experts focus on timely delivery with top-quality standards.</p>
      </div>
    </div>
  </div>
</div>

<div className="mindtek_back_clr_div">
  <div className="mindtek_back_clr_div_1">
    <div className="mindtek_back_clr_div_2">
      <h2>At MINDTEK IT Solutions, We're Committed to Businesses</h2>
      <p>Take the first step towards achieving your business goals by contacting us today. Schedule a consultation with one of our IT specialists to discuss your objectives and explore how our innovative solutions can propel.</p>
    </div>
    <div className="mindtek_back_clr_div_3">
      <div className="mindtek_back_clr_div_4">
        <button><Link to="/Contact" onClick={mindtek}>Explore Solution </Link></button>
       
      </div>
    </div>
  </div>
</div>


<div className="mindtek_best_it_div">
  <div className="mindtek_best_it_div_1">
    <div className="mindtek_best_it_div_2">
      <h3>Best It Solution</h3>
      <h2>Let's Elevate Your Business with Strategic IT Solutions</h2>
      <p>At Mindtek, we understand that every business is unique, which is why we offer a range of flexible IT solutions designed to address your specific challenges and goals.</p>
    <div className="mindtek_best_it_div_4">
  <div className="service-item">
    <h1><FaNetworkWired className="service-icon" /> Network Infrastructure Solutions</h1>
    <h4>We provide robust network infrastructure services to ensure seamless connectivity for your business.</h4>
  </div>

  <div className="service-item">
    <h1><FaServer className="service-icon" /> Managed IT Services</h1>
    <h4>Our Managed IT Services provide end-to-end support to keep your systems running smoothly.</h4>
  </div>

  <div className="service-item">
    <h1><FaDatabase className="service-icon" /> Data Backup & Disaster Recovery</h1>
    <h4>Protect your critical business data with our secure backup solutions.
We offer automated data backup systems to prevent data loss.</h4>
  </div>
</div>

    </div>
    <div className="mindtek_best_it_div_3">
      <img src={photo_collage} ALT=""/>
    </div>
  </div>
</div>

     <div className="mindtek_banner_div">
  <div className="mindtek_banner_div_1">
    <div className="mindtek_banner_div_2">
      <div className="mindtek_stats">
        <div className="stat_item">
          <h2>10K+</h2>
          <p>Customers</p>
        </div>
        <div className="stat_item">
          <h2>20K+</h2>
          <p>Work Completed</p>
        </div>
        <div className="stat_item">
          <h2>100+</h2>
          <p>Expert Members</p>
        </div>
        <div className="stat_item">
          <h2>99.9%</h2>
          <p>Satisfaction Rates</p>
        </div>
      </div>
    </div>
  </div>
</div>

      <Footer/>
    </>
  );
};

export default Home;
