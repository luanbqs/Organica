import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import OurHistory from './pages/OurHistory'
import Blog from './pages/Blog'
import Partners from './pages/Partners'
import Products from './pages/Products'
import Market from './pages/Market'
import Contacts from './pages/Contacts'


// import SingUp from './pages/Cadastro'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/OurHistory" component={OurHistory} />
        <Route path="/Blog" component={Blog} />
        <Route path="/Partners" component={Partners} />
        <Route path="/Contacts" component={Contacts} />
        <Route path="/Market" component={Market} />
        <Route path="/Products" component={Products} />
        {/* <Route path="/SingUp" component={SingUp} /> */}

      </Switch>
    </BrowserRouter>
  );
}

export default App;
