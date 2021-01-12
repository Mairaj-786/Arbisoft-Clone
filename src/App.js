import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home'
import Navbar from './Containers/Navbar/Navbar';
import NavResponsive from './Containers/NavResponsive';


function App() {

  const [NavShow, SetNavShow] = React.useState(false)

  const HandleToggle = () => SetNavShow(value => !value)


  return (
    <div className="App">
      <Router>
        <Navbar HandleToggle={HandleToggle} NavShow={NavShow} />
        <NavResponsive NavShow={NavShow} />
        <Switch>
          <Route exact path='/' component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
