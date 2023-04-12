import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Support from './components/Support';
import AllInOne from './components/AllInOne';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Forms from './components/Forms';
import Stattics from './components/Stattics';
import Company from './components/Company';
import Chatbot from './components/Chatbot';
function App() {
  return (
    <div className='dark:bg-black'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Hero />
            <Chatbot />
            <About />
            <Support />
            <AllInOne />
            <Pricing />
          </Route>
          <Route  exact path='/forms'>
          <Forms />
          </Route>
          <Route exact path ='/Stattics'>
            <Stattics />
          </Route>
          <Route exact path = '/Company'>
            <Company />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
