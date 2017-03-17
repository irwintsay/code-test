import React, { Component } from 'react';
import './Carousel.css';

class Carousel extends Component {
  checkCarouselRatio() {
    let hero = document.querySelector('.hero-1');
    if(hero.offsetWidth * .75 < hero.offsetHeight) {
      hero.classList.add('fixed-aspect-ratio');
    } else {
      hero.classList.remove('fixed-aspect-ratio');
    }
  }

  componentDidMount() {
    this.checkCarouselRatio();
    window.addEventListener('resize', this.checkCarouselRatio.bind(this));
  }

  render() {
    return (
      <div className="Carousel" ref={(div) => { this.crf = div; }}>
        <div className="hero-copy">
          <span className="large-text springville">Screening:</span>
          <span className="large-text springville">DVF Secret Agent Part 2</span>
          <p className="medium-text acaslonpro">October 15, 2017</p>
          <span className="small-text acaslonpro">Join us for a private screening of DVF Secret Agent Part 2</span>
          <span className="small-text acaslonpro">with our special guest, director Peter Lindberg.</span>
        </div>
        <div className="overlay screen"></div>
        <div className="hero-1"></div>
      </div>
    );
  }
}

export default Carousel;