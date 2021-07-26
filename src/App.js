import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import NavContactInfo from './components/navInfo';
import Homepage from './components/pages/Homepage';
import Services from './components/pages/Services';
import ContactUs from './components/pages/ContactUs';
import About from './components/pages/About';
import Family from './components/pages/Family';
import Fees from './components/pages/Fees';
import BusinessImigrattion from './components/pages/BusinessImigrattion';
import Career from './components/pages/Career';
import Immigrate from './components/pages/Immigrate';
import studyPermit from './components/pages/studyPermit';
import Refusal from './components/pages/Refusal';
import WorkPermit from './components/pages/WorkPermit';
import LatestNews from './components/pages/LatestNews';
import Appointment from './components/pages/Appointment';
import Footer from './components/footer';



function App() {
  return (
    <Router> 
        <NavContactInfo/>
        <Navbar/>
        <Switch>
          <Route path ='/' exact component={Homepage}/>
          <Route path ='/services' exact component={Services}/>
          <Route path ='/contact-us' exact component={ContactUs}/>
          <Route path ='/about' exact component={About}/>
          <Route path ='/familySponsor' exact component={Family}/>
          <Route path ='/fees' exact component={Fees}/>
          <Route path ='/Business-immigration' exact component={BusinessImigrattion}/>
          <Route path ='/career' exact component={Career}/>
          <Route path ='/immigrate' exact component={Immigrate}/>
          <Route path ='/study-permit' exact component={studyPermit}/>
          <Route path ='/refusal' exact component={Refusal}/>
          <Route path ='/work-permit' exact component={WorkPermit}/>
          <Route path ='/news' exact component={LatestNews}/>
          <Route path ='/appointment' exact component={Appointment}/>
        </Switch>
        <Footer/>
    </Router>
      
    
  
  );
}

export default App;
