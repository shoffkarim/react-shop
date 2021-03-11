/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */


import './css/animate.css';
import './css/bootstrap.min.css';
import './css/flaticon.css';
import './css/font-awesome.min.css';
import './css/jquery-ui.min.css';
import './css/owl.carousel.min.css';
import './css/slicknav.min.css';
import './css/style.css';

//components

import {Header, MainSlider, Features, ProductSlider, ProductFilter, Banner, Footer} from "./components";

function App() {
  return (
    <div className="App">
      <Header/>
      <MainSlider/>
      <Features/>
      <ProductSlider/>
      <ProductFilter/>
      <Banner/>
      <Footer/>
    </div>

  );
}

export default App;
