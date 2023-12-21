
import './App.css';
import { Routes, Route} from "react-router-dom";
import NavBar from './components/Shared/NavBar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';

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



function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>  
        <Route path='/order-now' element={<OrderNow></OrderNow>}></Route>  
        <Route path='/pending-order' element={<PendingOrder></PendingOrder>}></Route>  
        <Route path='/dashboard' element={<UserDashboard></UserDashboard>}></Route>  
        <Route path='/contact-us' element={<ContactUs></ContactUs>}></Route>  
        <Route path='/premium-templates' element={<PremiumTemplates></PremiumTemplates>}></Route>  
        <Route path='/free-templates' element={<FreeTemplates></FreeTemplates>}></Route>  



        <Route path='/admin' element={<Admin></Admin>}></Route>  
        <Route path='/admin/payment-status/:id' element={<PaymentStatus></PaymentStatus>}></Route>  
        <Route path='/edit-banner' element={<BannerSection></BannerSection>}></Route>  
        <Route path='/banner/:id' element={<UpdateBannerSection></UpdateBannerSection>}></Route> 
        <Route path='/add-logo' element={<Logo></Logo>}></Route>  
        <Route path='/edit-logo/:id' element={<EditLogo></EditLogo>}></Route> 
        <Route path='/edit-about' element={<AboutSection></AboutSection>}></Route>  
        <Route path='/:id' element={<UpdateAboutSection></UpdateAboutSection>}></Route>  
        <Route path='/edit-video' element={<VideoSection></VideoSection>}></Route>  
        <Route path='/video/:id' element={<UpdateVideoSection></UpdateVideoSection>}></Route>  
        <Route path='/service-edit/:id' element={<EditService></EditService>}></Route>  
        <Route path='/servicetext-edit/:id' element={<EditServicestext></EditServicestext>}></Route>
        <Route path='/edit-service' element={<ServicesSection></ServicesSection>}></Route>  
        <Route path='/step-section' element={<StepSection></StepSection>}></Route>  
        <Route path='/edit-step/:id' element={<EditStep></EditStep>}></Route>  
        <Route path='/total-orders' element={<TotalOrders></TotalOrders>}></Route>  
        <Route path='/add-item' element={<AddItem></AddItem>}></Route>  
        <Route path='/setting' element={<Setting></Setting>}></Route>  
        <Route path='/edit-testimonial/' element={<AdminTestimonialSection></AdminTestimonialSection>}></Route>  
        <Route path='/edit-testimonial/:id' element={<EditTestimonial></EditTestimonial>}></Route>  
        <Route path='/testimonialtext-edit/:id' element={<EditTestimonialtext></EditTestimonialtext>}></Route>
        <Route path='/add-contact/' element={<ContactPage></ContactPage>}></Route>  
        <Route path='/edit-contact-page/:id' element={<EditContactPage></EditContactPage>}></Route>  
        <Route path='/add-about-footer/' element={<FooterAbout></FooterAbout>}></Route>  
        <Route path='/edit-about-footer/:id' element={<EditFooterabout></EditFooterabout>}></Route>  
        <Route path='/add-address-footer/' element={<FooterContact></FooterContact>}></Route>  
        <Route path='/edit-address-footer/:id' element={<EditFooterContact></EditFooterContact>}></Route> 
        <Route path='/add-social-footer/' element={<FooterSocial></FooterSocial>}></Route>  
        <Route path='/edit-social-footer/:id' element={<EditFooterSocial></EditFooterSocial>}></Route> 
        <Route path='/all-messages/' element={<Messages></Messages>}></Route>  
        <Route path='/view/:id' element={<ViewMessage></ViewMessage>}></Route>  
        <Route path='/all-subscriber/' element={<Subscribers></Subscribers>}></Route>        
        <Route path='/add-copyright' element={<FooterCopyright></FooterCopyright>}></Route>  
        <Route path='/edit-copyright/:id' element={<EditFooterCopyright></EditFooterCopyright>}></Route>  
        <Route path='/paypal-email/:id' element={<PaypalEmail></PaypalEmail>}></Route>  
        <Route path='/pay-now/:id' element={<PayNow></PayNow>}></Route>  
        <Route path='/order-cancelled/:id' element={<CancelledPayment></CancelledPayment>}></Route>  
        
       



      </Routes>


      <Footer></Footer>
    </div>
  );
}

export default App;
