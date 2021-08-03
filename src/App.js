import React from 'react';
import NavBar from './components/navbar/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/presentes/Home';
import Convidados from './components/convidados/Convidados';
import LuaMel from './components/presentes/LuaMel';
import NossaCasa from './components/presentes/NossaCasa';
import Gramado from './components/presentes/Gramado';
import Evento from './components/evento/Evento';

export default function App() {

  return (
    <div>
      <Router>
      <NavBar/>
        <Switch>
          <Route path="/lista-presentes">
            <Home/>
          </Route>
          <Route path="/lista-presentes-lua-de-mel">
            <LuaMel/>
          </Route>
          <Route path="/lista-presentes-nossa-casa">
            <NossaCasa/>
          </Route>
          <Route path="/lista-presentes-gramado">
            <Gramado/>
          </Route>
          <Route path="/evento">
            <Evento/>
          </Route>
          
          <Route path="/lista-convidados">
            <Convidados/>
          </Route>

          <Route path="/">
            <img style={{width: "100%", height:"1000px" ,float:"left", position:"fixed"}} src="/images/casamento.jpg" />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}