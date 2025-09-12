import { BrowserRouter, Routes , Route} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'; 
import PrivateRoute from "./components/PrivateRoute";
import Home from "./page/Home";
import Header from "./page/Header";
import Footer from "./page/Footer";
import About from "./page/About";
import Service from "./page/Service";
import Contact from "./page/Contact";
import Adminheader from "./admin/Adminheader";
import Contactdeatils from "./admin/Contactdeatils";
import Changepassword from "./admin/Changepassword";
import Privacypolicy from "./page/Privacypolicy";
import Termscondition from "./page/termscondition";
import Cancellationpolicy from "./page/Cancellationpolicy";
import Admin from "./admin/Admin";

function App() {
  return (
    <BrowserRouter>
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Home" element={<Home/>} />
        <Route path="Header" element={<Header/>} />
        <Route path="Footer" element={<Footer/>} />
        <Route path="About" element={<About/>} />
        <Route path="Service" element={<Service/>} />
        <Route path="Contact" element={<Contact/>} />
        <Route path="Admin" element={<Admin/>} />
        <Route path="Adminheader" element={<PrivateRoute><Adminheader/></PrivateRoute>} />
        <Route path="Contactdeatils" element={<PrivateRoute><Contactdeatils/></PrivateRoute>} />
        <Route path="Changepassword" element={<PrivateRoute><Changepassword/></PrivateRoute>} />
        <Route path="Privacypolicy" element={<Privacypolicy/>} />
        <Route path="Termscondition" element={<Termscondition/>} />
        <Route path="Cancellationpolicy" element={<Cancellationpolicy/>} />

      </Routes>
    </HelmetProvider>
    </BrowserRouter>
   
  );
}

export default App;
