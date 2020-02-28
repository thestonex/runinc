import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom' ;
import './App.scss';
import Header from './components/layout/header/Header';
import Home from './pages/Home';
import Event from './pages/Event';
import Shop from './pages/shop';
import Contact from './pages/Contact';
import Notfound from './pages/NotFound';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      
        <Header />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/home" component={Home} />
          <Route path="/event" component={Event} />
          <Route path="/Shop" component={Shop} />
          <Route path="/Contact" component={Contact} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
