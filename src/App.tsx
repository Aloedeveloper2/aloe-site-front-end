import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Compte from './screens/Compte/compte';
import Contact from './screens/Contact/contact';
import Aboutus from './screens/About-us/about-us';
import Home from './screens/Home/home.screen';
import Services from './screens/Nos-services/services';

function App() {
  return (
    <BrowserRouter>
      <Route exact path={'/'} component={Home}></Route>
      <Route path={'/services'} component={Services}></Route>
      <Route path={'/about-us'} component={Aboutus}></Route>
      <Route path={'/contact'} component={Contact}></Route>
      <Route path={'/compte'} component={Compte}></Route>
    </BrowserRouter>
  );
}

export default App;
