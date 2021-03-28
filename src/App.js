/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */


import './css/animate.css';
import './css/bootstrap.min.css';
import './css/flaticon.css';
import './css/font-awesome.min.css';
import './css/style.css';

import { Route } from "react-router-dom";

import {Header, Footer} from "./components";
import { Home, Item } from './pages';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/item" component={Item}/>
      <Footer/>
    </div>

  );
}

export default App;
