import React from 'react';

import Sprite from './Sprite';
import Cigars from './Cigars';
import Warheads from './Warheads';
import VendingMachine from './VendingMachine';
import Navbar from './Navbar';
import './App.css';

import { Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    
  
    <BrowserRouter>
   
    <Navbar/>
    <Route exact path='/'>
          <VendingMachine />
        </Route>
    <Route exact path='/sprite'>
          <Sprite />
        </Route>
        <Route exact path='/cigars'>
          <Cigars />
        </Route>
        <Route exact path='/warheads'>
          <Warheads />
        </Route>

    {/* <Route exact path="/"> <VendingMachine/> </Route>
            <Route exact path="/sprite"> <Sprite /> </Route>
            
<Route exact path="/cigars"> <Cigars /></Route>
           
<Route exact path="/warheads"> <Warheads /> </Route>
            */}
            
  </BrowserRouter>
    
  );
}

export default App;
