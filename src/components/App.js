import React, { Component } from 'react';

// Components
import NavHeader from './NavHeader/NavHeader';
import Carousel from './Carousel/Carousel';
import SiteContent from './SiteContent/SiteContent';
import SiteFooter from './SiteFooter/SiteFooter';

// Assets, CSS, Images
import './normalize.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader />
        <Carousel />
        <SiteContent />
        <SiteFooter />
      </div>
    );
  }
}

export default App;
