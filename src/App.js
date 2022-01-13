import React from 'react';
import { BrowserRouter, Route ,Switch} from 'react-router-dom'
import Navbar from "./features/home/Navabr";
import Home from './components/Home.js'
import AboutUs from './components/AboutUs';
import ContactUs from './components/Contact';
import Faq from './components/Faq';
import JoiinUs from './components/joinUs';
import Services from './components/Service';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path= "/aboutus" component={AboutUs}  />
      <Route path='/joinus' component={JoiinUs} />
      <Route path='/services' component={Services} />
      <Route path='/faq' component={Faq} />
      <Route path='/contact' component={ContactUs} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
