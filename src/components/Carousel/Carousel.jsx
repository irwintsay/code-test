import React from 'react';
import './Carousel.css';
import hero1 from '../../assets/img/hero-landing.png'

const Carousel = props => (
  <div className="Carousel">
    <div className="overlay hero-copy">
      <span className="large-text springville">Screening:</span>
      <span className="large-text springville">DVF Secret Agent Part 2</span>
      <p className="medium-text acaslonpro">October 15, 2017</p>
      <span className="small-text acaslonpro">Join us for a private screening of DVF Secret Agent Part 2</span>
      <span className="small-text acaslonpro">with our special guest, director Peter Lindberg.</span>
    </div>
    <div className="overlay screen"></div>
    <img src={ hero1 } alt="Carousel" />
  </div>
);

export default Carousel;