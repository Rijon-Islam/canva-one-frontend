
import './App.css';
import { Routes, Route} from "react-router-dom";
import NavBar from './components/Shared/NavBar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import RequireAuth from './components/Shared/RequireAuth';

import Footer from './components/Shared/Footer/Footer';
import ContactUs from './Pages/ContactUs';
import BannerSection from './Pages/AdminSection/BannerSection';
import Admin from './Pages/AdminSection/Admin';
import OrderNow from './Pages/OrderNow';
import TotalOrders from './Pages/AdminSection/TotalOrders';
import AddItem from './Pages/AdminSection/AddItem';
import UserDashboard from './Pages/UserDashboard';
import AboutSection from './Pages/AdminSection/AboutSection';
import VideoSection from './Pages/AdminSection/VideoSection';
import ServicesSection from './Pages/AdminSection/ServicesSection';
import UpdateAboutSection from './Pages/AdminSection/UpdateAboutSection';
import Setting from './Pages/AdminSection/Setting';
import UpdateVideoSection from './Pages/AdminSection/UpdateVideoSection';
import EditService from './Pages/AdminSection/EditService';
import StepSection from './Pages/AdminSection/StepSection';
import EditStep from './Pages/AdminSection/EditStep';
import Logo from './Pages/AdminSection/Logo';
import AdminTestimonialSection from './Pages/AdminSection/AdminTestimonialSection';
import EditTestimonial from './Pages/AdminSection/EditTestimonial';
import ContactPage from './Pages/AdminSection/ContactPage';
import Subscribers from './Pages/AdminSection/Subscribers';
import Messages from './Pages/AdminSection/Messages';
import ViewMessage from './Pages/AdminSection/ViewMessage';
import PremiumTemplates from './Pages/PremiumTemplates';
import FreeTemplates from './Pages/FreeTemplates';
import PendingOrder from './Pages/PendingOrder';
import UpdateBannerSection from './Pages/AdminSection/UpdateBannerSection';
import PaymentStatus from './Pages/AdminSection/PaymentStatus';
import FooterAbout from './Pages/AdminSection/FooterAbout';
import FooterContact from './Pages/AdminSection/FooterContact';
import FooterSocial from './Pages/AdminSection/FooterSocial';
import EditFooterabout from './Pages/AdminSection/EditFooterabout';
import EditFooterContact from './Pages/AdminSection/EditFooterContact';
import EditFooterSocial from './Pages/AdminSection/EditFooterSocial';
import EditLogo from './Pages/AdminSection/EditLogo';
import EditContactPage from './Pages/AdminSection/EditContactPage';
import EditServicestext from './Pages/AdminSection/EditServicestext';
import FooterCopyright from './Pages/AdminSection/FooterCopyright';
import EditFooterCopyright from './Pages/AdminSection/EditFooterCopyright';
import PaypalEmail from './Pages/AdminSection/PaypalEmail';
import PayNow from './Pages/AdminSection/PayNow';
import CancelledPayment from './Pages/AdminSection/CancelledPayment';
import EditTestimonialtext from './Pages/AdminSection/EditTestimonialtext';
import AddUser from './Pages/AdminSection/AddUser';
import UpdateUser from './Pages/AdminSection/UpdateUser';




function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>  
        <Route path='/order-now' element={<RequireAuth><OrderNow></OrderNow></RequireAuth>}></Route>  
        <Route path='/pending-order' element={<RequireAuth><PendingOrder></PendingOrder></RequireAuth>}></Route>  
        <Route path='/dashboard' element={<RequireAuth><UserDashboard></UserDashboard></RequireAuth>}></Route>  
        <Route path='/contact-us' element={<ContactUs></ContactUs>}></Route>  
        <Route path='/premium-templates' element={<RequireAuth><PremiumTemplates></PremiumTemplates></RequireAuth>}></Route>  
        <Route path='/free-templates' element={<RequireAuth><FreeTemplates></FreeTemplates></RequireAuth>}></Route>  



        <Route path='/admin' element={<RequireAuth><Admin></Admin></RequireAuth>}></Route>  
        <Route path='/add-user' element={<RequireAuth><AddUser></AddUser></RequireAuth>}></Route>  
        <Route path='/admin-user/:id' element={<RequireAuth><UpdateUser></UpdateUser></RequireAuth>}></Route>  
        <Route path='/admin/payment-status/:id' element={<RequireAuth><PaymentStatus></PaymentStatus></RequireAuth>}></Route>  
        <Route path='/edit-banner' element={<RequireAuth><BannerSection></BannerSection></RequireAuth>}></Route>  
        <Route path='/banner/:id' element={<RequireAuth><UpdateBannerSection></UpdateBannerSection></RequireAuth>}></Route> 
        <Route path='/add-logo' element={<RequireAuth><Logo></Logo></RequireAuth>}></Route>  
        <Route path='/edit-logo/:id' element={<RequireAuth><EditLogo></EditLogo></RequireAuth>}></Route> 
        <Route path='/edit-about' element={<RequireAuth><AboutSection></AboutSection></RequireAuth>}></Route>  
        <Route path='/:id' element={<RequireAuth><UpdateAboutSection></UpdateAboutSection></RequireAuth>}></Route>  
        <Route path='/edit-video' element={<RequireAuth><VideoSection></VideoSection></RequireAuth>}></Route>  
        <Route path='/video/:id' element={<RequireAuth><UpdateVideoSection></UpdateVideoSection></RequireAuth>}></Route>  
        <Route path='/service-edit/:id' element={<RequireAuth><EditService></EditService></RequireAuth>}></Route>  
        <Route path='/servicetext-edit/:id' element={<RequireAuth><EditServicestext></EditServicestext></RequireAuth>}></Route>
        <Route path='/edit-service' element={<RequireAuth><ServicesSection></ServicesSection></RequireAuth>}></Route>  
        <Route path='/step-section' element={<RequireAuth><StepSection></StepSection></RequireAuth>}></Route>  
        <Route path='/edit-step/:id' element={<RequireAuth><EditStep></EditStep></RequireAuth>}></Route>  
        <Route path='/total-orders' element={<RequireAuth><TotalOrders></TotalOrders></RequireAuth>}></Route>  
        <Route path='/add-item' element={<RequireAuth><AddItem></AddItem></RequireAuth>}></Route>  
        <Route path='/setting' element={<RequireAuth><Setting></Setting></RequireAuth>}></Route>  
        <Route path='/edit-testimonial/' element={<RequireAuth><AdminTestimonialSection></AdminTestimonialSection></RequireAuth>}></Route>  
        <Route path='/edit-testimonial/:id' element={<RequireAuth><EditTestimonial></EditTestimonial></RequireAuth>}></Route>  
        <Route path='/testimonialtext-edit/:id' element={<RequireAuth><EditTestimonialtext></EditTestimonialtext></RequireAuth>}></Route>
        <Route path='/add-contact/' element={<RequireAuth><ContactPage></ContactPage></RequireAuth>}></Route>  
        <Route path='/edit-contact-page/:id' element={<RequireAuth><EditContactPage></EditContactPage></RequireAuth>}></Route>  
        <Route path='/add-about-footer/' element={<RequireAuth><FooterAbout></FooterAbout></RequireAuth>}></Route>  
        <Route path='/edit-about-footer/:id' element={<RequireAuth><EditFooterabout></EditFooterabout></RequireAuth>}></Route>  
        <Route path='/add-address-footer/' element={<RequireAuth><FooterContact></FooterContact></RequireAuth>}></Route>  
        <Route path='/edit-address-footer/:id' element={<RequireAuth><EditFooterContact></EditFooterContact></RequireAuth>}></Route> 
        <Route path='/add-social-footer/' element={<RequireAuth><FooterSocial></FooterSocial></RequireAuth>}></Route>  
        <Route path='/edit-social-footer/:id' element={<RequireAuth><EditFooterSocial></EditFooterSocial></RequireAuth>}></Route> 
        <Route path='/all-messages/' element={<RequireAuth><Messages></Messages></RequireAuth>}></Route>  
        <Route path='/view/:id' element={<RequireAuth><ViewMessage></ViewMessage></RequireAuth>}></Route>  
        <Route path='/all-subscriber/' element={<RequireAuth><Subscribers></Subscribers></RequireAuth>}></Route>        
        <Route path='/add-copyright' element={<RequireAuth><FooterCopyright></FooterCopyright></RequireAuth>}></Route>  
        <Route path='/edit-copyright/:id' element={<RequireAuth><EditFooterCopyright></EditFooterCopyright></RequireAuth>}></Route>  
        <Route path='/paypal-email/:id' element={<RequireAuth><PaypalEmail></PaypalEmail></RequireAuth>}></Route>  
        <Route path='/pay-now/:id' element={<RequireAuth><PayNow></PayNow></RequireAuth>}></Route>  
        <Route path='/order-cancelled/:id' element={<RequireAuth><CancelledPayment></CancelledPayment></RequireAuth>}></Route>  
        
       



      </Routes>


      <Footer></Footer>
    </div>
  );
}

export default App;
